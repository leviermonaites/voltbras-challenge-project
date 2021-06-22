# How to run the project

 - I am assuming you have docker installed your machine.

<!-- Create a folder called 'app' on the 'usr' folder on the root path of your Linux Distro or WSL. -->
<!-- So: the path to your folder should be something like this: -->
  <!-- - /usr/app -->

## Let's begin ##
Pull the repository on a folder chosen by you

<!-- Run "npm i" to install the required dependencies -->

<!-- ## Env File ##
After that, you have to create a file called ".env" on the root folder. I would let it provided by default for you on the github repository, but just for make sure you know I'm somewhat keen on security stuff I did it like that. -->

<!-- You can put the following data there, or change according to your preferences:
DATABASE=voltbras
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=volt
DATABASE_PASSWORD=12345678* -->

## Docker
<!-- You need to have the node image, to get it, you can paste the following on your terminal:
docker pull node -->
Now you can run the following command:
docker-compose up

On your browser you can type the url:
http://localhost:4000/graphql

And voilà, everything is up and running.

Takeaways of the project:
Some input cases that are more complex have their proper description, the others are easily inferred by their names and types.
