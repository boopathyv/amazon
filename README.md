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

________________________________________________________

## Amazon Screenshots
### Login Page
This is the login screen of the e-commerce website, where users can enter their credentials to access their accounts.

![Login Screen](/frontend/build/images/screenshots/login_page.png)
________________________________________________________


### Home Page
The home page displays a collection of available products for users to browse and purchase.

![Home Page](/frontend/build/images/screenshots/home_page.png)

________________________________________________________

### Admin Dashboard
The admin dashboard allows administrators to manage the website by adding or removing products and controlling user access.

![Admin Dashboard](/frontend/build/images/screenshots/admin_dashboard.png)
________________________________________________________

### Product List Screen
This screen shows all the products currently listed on the website. Only admins have the ability to modify the product list.

![Product List Screen](/frontend/build/images/screenshots/product_list.png)
________________________________________________________

### User List Screen
This page displays a list of all registered users on the platform.

![User List Screen](/frontend/build/images/screenshots/user_list.png)
________________________________________________________

### Product Details Page
When a user selects a product, they are redirected to this page, which provides detailed information about the item.

![Product Details](/frontend/build/images/screenshots/product_detail_page.png)
________________________________________________________

### Cart Detail Screen
This page shows all the products that have been added to the shopping cart by the user.

![Cart Details Screen](/frontend/build/images/screenshots/cart_detail_page.png)
________________________________________________________

### Shipping Detail Screen
This page captures and displays the shipping address details required for delivery.

![Shipping Details Screen](/frontend/build/images/screenshots/shipping_details.png)
________________________________________________________

### Shipping Info Screen
This page summarizes the shipping information, including the items in the order and the total price, before the user places the order.

![Shipping Info Screen](/frontend/build/images/screenshots/shipping_info.png)
________________________________________________________