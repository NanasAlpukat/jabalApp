import Queue from 'bull';

const forgotPasswordQueue = new Queue('forgot-password', {
  redis: { port: 6379, host: 'localhost' },
});

export { forgotPasswordQueue };
