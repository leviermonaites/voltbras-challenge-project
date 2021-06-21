# How to run the project

I am assuming you have the two of the following things installed on your computer:
Node.JS
Docker - To use docker-compose
MySQL Server

Run "npm i" to install the required dependencies

After that, you have to create a file called ".env" on the root folder. I would let it provided by default for you on the github repository, but just for make sure you know I'm somewhat keen on security stuff I did it like that.

You can put the following data there, or change according to your preferences:
DATABASE=voltbras
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=volt
DATABASE_PASSWORD=12345678*

Now you can run the command in one terminal:
'docker-compose up'

And in another - Make sure you are on the project's folder:
'npm start'

On your browser you can type the url:
http://localhost:4000/graphql

And voilà, everything is up and running.

Takeaways of the project:
Some input cases that are more complex have their proper description, the others are easily inferred by their names and types.
