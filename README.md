# Article Management System for Personel Usage

Bu proje literatür taraması yaparken kendi kişisel veritabanımı oluşturmak için kullanılacaktır.


## Kullanılan Teknolojiler

**İstemci:** Vue3, Bootstrap

**Sunucu:** Node, Express, Sequelize

**Database:** SQLite

  
## Yükleme 

```bash 
  npm install my-project
  cd my-project
```
    
## Ortam Değişkenleri

Bu projeyi çalıştırmak için aşağıdaki ortam değişkenlerini .env dosyanıza eklemeniz gerekecek

`API_PORT`

`DB_NAME`

`DB_USER`

`DB_PASS`

`DB_HOST`

## Sample Article Data

```json
{
    "title": "Example Title",
    "year": 2018,
    "category": "Example category",
    "keywords": "Example, keywords",
    "abstract": "Example abstract",
    "method": "Example method",
    "results": "Example results",
    "notes": "Example note for this article",
    "lang": "English",
    "cite": "Example cite",
    "file_path": "uploads/Example.pdf",
    "translated_file_path": "uploads/Example_TR.pdf"
}
```
  
## API Kullanımı

#### Tüm makaleleri getir

```http
  GET /articles
```

#### Tekil makale getir

```http
  GET /article/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Gerekli**. Çağrılacak öğenin anahtar değeri |

#### Makaleyi güncelle

```http
  PUT /article/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Gerekli**. Çağrılacak öğenin anahtar değeri |


#### Makaleyi sil

```http
  DELETE /article/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Gerekli**. Çağrılacak öğenin anahtar değeri |




 ## Sources:
- https://www.youtube.com/watch?v=bWFuEVmRgdk (Express + Sequelize + SQLite)
- https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs (ENV File read)
- https://sequelize.org/v5/manual/data-types.html (Data Types in Sequelize)
- https://www.youtube.com/watch?v=ckIhxeLEwIk (File upload in NodeJS) 