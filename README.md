# Amazon

an E-commerce Website built with MERN stack.

## Instructions

after cloning, run this command in the root folder
```bash
npm install
```
navigate to "frontend" folder, run these commands 
```bash
npm install
npm run build
```
wait for application build
after that open the backend/config/config.env
and update the MongoDB connection string
```bash
...
DB_LOCAL_URI=mongodb://localhost:27017/amazon
```

navigate back to "root" folder and run this command for loading demo data
```bash
npm run seeder
```

run this below command to run the app in production mode
```bash
npm run prod
```


## Test
open the http://localhost:8000 and test the 

## Postman Collection
https://www.postman.com/jvlcode/workspace/nodejs-ecommerce/collection/19530322-997cf450-820a-4852-bc1f-a93c9072d6ec?action=share&creator=19530322


## License

[MIT](https://choosealicense.com/licenses/mit/)

________________________________________________________

## Amazon Screenshots
### Login Page
This is the Login Page of e-commerce website.

![Login Screen](/frontend/build/images/screenshots/login_page.png)
________________________________________________________


### Home Page
This is the Home Page of e-commerce website. It shows a list of products. 

![Home Page](/frontend/build/images/screenshots/home_page.png)

________________________________________________________

### Admin Dashboard
This is the Admin which provide options to add new products, delete existing products and to handle the users who can access the website

![Admin Dashboard](/frontend/build/images/screenshots/admin_dashboard.png)
________________________________________________________

### Product List Screen
This page list all the available products that are currently available which can be modified only by admin

![Product List Screen](/frontend/build/images/screenshots/product_list.png)
________________________________________________________

### User List Screen
This page list all the current users

![User List Screen](/frontend/build/images/screenshots/user_list.png)
________________________________________________________

### Product Details Page
When the user clicks on a product it takes you to the product details page.

![Product Details](/frontend/build/images/screenshots/product_detail_page.png)
________________________________________________________

### Cart Detail Screen
This page list all the products that are added to the cart

![Cart Details Screen](/frontend/build/images/screenshots/cart_detail_page.png)
________________________________________________________

### Shipping Detail Screen

![Shipping Details Screen](/frontend/build/images/screenshots/shipping_details.png)
________________________________________________________

### Shipping Info Screen
This page show the shipping details along with the list of products added to that order and total price to place the order

![Shipping Info Screen](/frontend/build/images/screenshots/shipping_info_.png)
________________________________________________________