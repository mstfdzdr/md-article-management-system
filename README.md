# Article Management System for Personel Usage

Bu projenin ne yaptığı ve kimin için olduğu hakkında kısa bir açıklama


## Kullanılan Teknolojiler

**İstemci:** React, Redux, TailwindCSS

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
    "file_path": "uploads/Example.pdf"
}
```
  
## API Kullanımı

#### Tüm öğeleri getir

```http
  GET /api/items
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Gerekli**. API anahtarınız. |

#### Öğeyi getir

```http
  GET /api/items/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Gerekli**. Çağrılacak öğenin anahtar değeri |

#### add(num1, num2)

İki sayı alır ve toplamı döndürür.




 ## Sources:
- https://www.youtube.com/watch?v=bWFuEVmRgdk (Express + Sequelize + SQLite)
- https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs (ENV File read)
- https://sequelize.org/v5/manual/data-types.html (Data Types in Sequelize)
- https://www.youtube.com/watch?v=ckIhxeLEwIk (File upload in NodeJS) 