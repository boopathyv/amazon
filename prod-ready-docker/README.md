1️⃣ Prepare your Dockerfile
cd /amazon/
follow the below steps till step 3

2️⃣ Build the Docker Image Locally

> docker build -t myamazonapp:1.0 .

You now have an image called myamazonapp:1.0.

3️⃣ Save Image as a File to Ship
You can export the image to a .tar file: Use this .tar file to ship to the customer

> docker save -o myamazonapp.tar myamazonapp:1.0

4️⃣ Customer Loads the Image

A)
On the customer’s side:

>docker load -i myamazonapp.tar

This will import the image as myamazonapp:1.0.

B)
To Run it along with other services to consider seeder and mongo(docker-compose.yaml) :
If your app requires MongoDB or other services, ship the docker-compose.yml file.
> docker-compose up


To Run it manually :

> docker run -p 8000:8000 myamazonapp:1.0