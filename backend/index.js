require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const util = require('util');
const sequelize = require('./database'); // This is the same as the one in database.js
const Article = require('./model/article');


sequelize.sync({force:true}); // This will create the table for us based on our Model definition
//sequelize.sync(); // for real app, this should be commented out
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload());
app.use(express.static('./backend/public')); // this is the static folder for accessing the files

//create article
app.post('/article', (req, res) => {
  Article.create(req.body).then(() => {
    res.send('Article added successfully');
  })
})

//read all articles
app.get('/articles', async (req, res) => {
  const articles = await Article.findAll();
  res.send(articles);
})

//read article by id
app.get('/article/:id', async (req, res) => {
  const reuestedId = req.params.id;
  const article = await Article.findOne({where: {id: reuestedId}});
  res.send(article);
})

//update article by id
app.put('/article/:id', async (req, res) => {
  const reuestedId = req.params.id;
  const article = await Article.findOne({where: {id: reuestedId}});
  article.update(req.body).then(() => {
    res.send('Article updated successfully');
  })
})

//delete
app.delete('/article/:id', async (req, res) => {
  const reuestedId = req.params.id;
  const article = await Article.findOne({where: {id: reuestedId}});
  article.destroy().then(() => {
    res.send('Article deleted successfully');
  })
})

//upload file
app.post('/upload', async (req, res) => {
  const file = req.files.file;
  const fileName = file.name;
  const extension = path.extname(fileName);
  const allowedExtensions = /pdf|doc|docx/;
  if(!allowedExtensions.test(extension)) {
    res.send('Invalid file type');
  } else {
    const md5 = file.md5;
    const url = "/uploads/" + md5 + extension;
    await util.promisify(file.mv)("./backend/public" + url);
    res.json({
      url: url,
      message: 'File uploaded successfully'
    });
  }
})


//listen
app.listen(process.env.API_PORT, () => {
  console.log("Server running on port: ", process.env.API_PORT);
});