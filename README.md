# e-commerce

## Product Route
**Note:**  *  *is required*
 HTTP | Router | Headers | Body | Success | Error | Description
------|--------|---------|------|---------|-------|------------
 POST | <span style="color:red">/products</span> | token | *name, *price, *detail, *userId | new Product -> Object{id, name, price, detail, userId} | Object { message: `Internal Server Error`, err } | Create a Product
 GET | <span style="color:red">/products</span> | token |  | Object{id, name, price, detail, userId} | Object { message: `Internal Server Error`, err } | All Product
 DELETE | <span style="color:red">/products/:id</span> | token |  | Deleted Product -> Object{id, name, price, detail, userId} | Object { message: `Internal Server Error`, err } | Delete a Product

<br>

## User Route
**Note:**  *  *is required*
 HTTP | Router | Body | Success | Error | Description
------|--------|------|---------|-------|------------
 POST | <span style="color:red">/users/login</span> |  *email, *password | Object{token} | Object { message: `Internal Server Error`, err } | Login User  
 POST | <span style="color:red">/users/register</span> |  *email, *password | Object{token} | Object { message: `Internal Server Error`, err } | Register User  

<br>

## Cart Route
**Note:**  *  *is required*
 HTTP | Router | Body | Success | Error | Description
------|--------|------|---------|-------|------------
 POST | <span style="color:red">/carts</span> |  *userId, *productId | Object{userId, productId} | Object { message: `Internal Server Error`, err } | Create Cart  
 DELETE | <span style="color:red">/carts</span> |  *cartId* | Object{userId, productId} | Object { message: `Internal Server Error`, err } | Delete Cart  

## Usage

Make sure you have Node.js and npm installed in your computer, and then run these commands:<br>
$npm install<br>
$nodemon app.js<br>
$live-server --host=localhost<br>

Access the Server side via http://localhost:3000/.

Access the Client side via http://localhost:8080/.