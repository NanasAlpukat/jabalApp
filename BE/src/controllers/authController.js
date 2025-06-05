
import { prisma } from '../config/prisma.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt.js';
import { v4 as uuidv4 } from 'uuid';
import sendEmail from '../services/emailService.js';




export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user);

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 12 * 60 * 60 * 1000, // 12 jam
  });

  const person = {
    'id': user.id,
    'role': user.role,
    'name': user.name
  }
  res.json({ person });
};

export const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
};


export const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    const tokenRecord = await prisma.token.findFirst({
      where: { token },
      include: { user: true },
    });

    if (!tokenRecord || tokenRecord.expiresAt < new Date()) {
      if (tokenRecord) await prisma.token.delete({ where: { id: tokenRecord.id } }); // optional cleanup
      return res.status(400).json({ message: 'Token is invalid or expired' });
    }

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: tokenRecord.userId },
      data: { password: hashed },
    });

    await prisma.token.delete({ where: { id: tokenRecord.id } });

    res.json({ message: 'Password has been reset successfully' });
    // res.json({ message: token });
  } catch (err) {
    res.status(500).json({ message: 'Failed to reset password', error: err.message });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const token = uuidv4();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 menit
    
    await prisma.token.create({
      data: {
        token,
        expiresAt,
        user: { connect: { id: user.id } },
      },
    });

    const resetLink = `${process.env.BASE_URL}/reset-password?token=${token}`;
    await sendEmail({
      to: email,
      subject: 'Reset Your Password',
      html: `<p>Click this link to reset your password:</p><span>${token}</span>`,
      // html: `<p>Click this link to reset your password:</p><a href="${resetLink}">${resetLink}</a>`,
    });


    res.json({ message: 'Reset password email sent',token: resetLink });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send reset email', error: err.message });
  }
};

export const me = async (req, res) => {
  try {
    const user = req.user
    if (!user || !user.id) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    // Ambil data user dari database berdasarkan ID
    const person = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true
      }
    })

    if (!person) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({ user: person })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}



