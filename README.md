# How to run the project

 - I am assuming you have docker installed your machine.

## Let's begin

Pull the repository on a folder chosen by you

## Docker
We'll need to make use of an utility in order to help us to manage DATABASE failure connection which may happen when you're first running the application
To install such utility, make sure you're running a terminal as an administrator

First let's make sure we have our required package manager upgraded. 
To do so on windows:
  - c:\python39\python.exe -m pip install --upgrade pip

To do so on Unix/MacOS
  - apt-get install python3-pip

Now, let's install the utility with the following command:
  - pip install docker-compose-wait

Now you can run the following command:
*docker-compose up*

On your browser you can type the url:
http://localhost:4000/graphql

And voilà, everything is up and running.

## Takeaways of the project:
Some input cases that are more complex have their proper description, the others are easily inferred by their names and types.
