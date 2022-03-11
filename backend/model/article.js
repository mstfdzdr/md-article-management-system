const { Model, DataTypes} = require('sequelize');
const sequelize = require('../database');
class Article extends Model {}

Article.init({
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.TEXT,
    },
    year: {
        type: DataTypes.INTEGER,
    },
    category: {
        type: DataTypes.TEXT,
    },
    keywords: {
        type: DataTypes.TEXT,
    },
    abstract: {
        type: DataTypes.TEXT,
    },
    method: {
        type: DataTypes.TEXT,
    },
    results: {
        type: DataTypes.TEXT,
    },
    notes: {
        type: DataTypes.TEXT,
    },
    lang: {
        type: DataTypes.STRING,
    },
    cite: {
        type: DataTypes.TEXT,
    },
    file_path: {
        type: DataTypes.TEXT,
    },
}, {
    sequelize,
    modelName: 'article'
});

module.exports = Article;

//MAKALEDE AD,YIL,KATEGORİ,ANAHTAR KELİMELER, ÖZET, YÖNTEM, SONUÇLAR, NOTLAR, DİL, ATIF ALANLARI OLMALI