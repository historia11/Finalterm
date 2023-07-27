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

### GET /videos

----
Return all videos from databases.
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
  result :[
  video_id: string;
    thumbnail: string;
    shop_name: string;
    video_title: string;
}

{
    video_id: string;
    thumbnail: string;
    shop_name: string;
    video_title: string;
    ]


### GET videos/:id/products

----
Return videos associated with the specified id.
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
  result :[
Produk: {
        nama_produk: string;
        harga_produk: number;
        Thumbnail_produk: string;
        link_produk: string;
        videoId: string;
    }
    Produk: {
        nama_produk: string;
        harga_produk: number;
        Thumbnail_produk: string;
        link_produk: string;
        videoId: string;
}
]



### GET /videos/:id/comment
----
Return all product from databases.
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
  result : [
    comment: string;
    videoId: string;
    username: string;
},

{
    comment: string;
    videoId: string;
    username: string;
}
]



### GET /videos/:id/comment/post

Creates a new Comment and returns the new object.
* **URL Params**  
  None
* **Data Params**  
  ```
  {
    videoId :  string
    username :  string
    comment :  string
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  message: "Success",
  data : {
    username,
    comment
  }
}


## How To Run In Local

### Installation
Make sure to install the dependencies:
```
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install

```

### Development Server
Start the development server on http://localhost:3000

# nodemon
nodemon index

