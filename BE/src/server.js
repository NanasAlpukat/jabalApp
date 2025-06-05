import 'dotenv/config'; // menggantikan require('dotenv').config()
import app from './app.js'; // pastikan file app.js menggunakan export default

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// const express = require('express')
// const testRoutes = require('./routers/test')

// const app = express()
// app.use('/test',testRoutes)
// app.listen(4000, () =>{
//     console.log('Server berhasil di running di port 4000')
// })