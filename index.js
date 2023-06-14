require('dotenv').config();
const express = require('express');
const userRoutes = require('./app/routes/users')
const upload = require('./app/middleware/multer')
const MiddlewarelogRequest = require('./app/middleware/logs');

const app = express();
const PORT = process.env.PORT || 5001;

//Middleware
app.use(MiddlewarelogRequest);
app.use(express.json());
app.use("/users", userRoutes);
app.use('/assets', express.static('public/images'));
app.use('/upload', upload.single("photo"),(req, res)=>{
    res.json({
        message : "Upload success!"
    })
});

app.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`);
});  