# Amazon
an E-commerce Website built with MERN stack.

RUN 
## docker-compose up --build

## Test
open the http://localhost:8000 and test the 

________________________________________________________

## NOTES
# docker-compose.yaml 
It consists of different services web, mongo for the database and seeder to store the initial data in the mongodb

# build: .
Takes the root folder and uses Dockerfile to build the webapp and starts the server
# COPY --from=build /amazon/frontend/build ./backend/public
frontend folder is not needed, hence the prod built files are considered and copied inside backend folder.
Which in turn the server consumes the frontend build files in app.js

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'public')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    );
}

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