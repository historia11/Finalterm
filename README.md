# midterm
## Database Structure
project memiliki 3 collection
### Videos Collection
 {
 video_id: string
    thumbnail: string
    shop_name: string
    video_title: string
}
### Product Collection
    Product: [
    nama_produk : string
    harga_produk : number
    Thumbnail_produk : string
    link_produk : string
     videoId: string
    ]

### Comment Collection
   { 
   videoId : string
    username : string
    comment : string
    }

GET   /
GET   /api
GET   /videos
GET   /videos/:id/product
GET   /videos/:id/comment
POST  /videos/:id/comment/post


## API Request Response
### GET /

----
Return json `message `
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  message: 'API is running'
}
