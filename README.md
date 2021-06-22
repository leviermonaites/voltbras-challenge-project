# How to run the project

 - I am assuming you have docker installed your machine.

## Let's begin

Pull the repository on a folder chosen by you

## Docker
Now you can run the following command:
*docker-compose up*

On your browser you can type the url:
http://localhost:4000/graphql

And voilà, everything is up and running.

## Takeaways of the project:
Some input cases that are more complex have their proper description, the others are easily inferred by their names and types.

To connect to my database, I'm using a setTimeout, that is a thing I'm not proud of. I tried to solve this problem by using docker-compose-wait, but didn't manage to do it successfully.