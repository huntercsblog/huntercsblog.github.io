---
title: Docker Tutorial
date: 2020-09-25
tags: ["Tech"]
authors: ["shakil"]
---

# What is Docker?

In short, Docker is a tool that converts a project into an image that can run in a container. It's a tool that developers can use to take code that they have already written and easily run it anywhere. It is especially useful for when you develop an application locally and want to deploy it to a server without worrying about whether or not the right interpreters or compilers are available.

## What is an image?

Docker images are like compiled projects that are packaged with all of their dependencies and everything needed to run the project. This means, for example, that any NodeJS project will be packaged with all of its `node_modules` as well as the `node` binary. This may seem excessive, but it really is important so that the image can run anywhere -- that is on any computer even if it doesn't have NodeJS installed and even if it is running a different operating system from the one you developed the project on. Docker does some optimizations to save space between images, so if you have multiple Docker images that use `node`, then you will only store `node` once and Docker will use that copy between all of your images. That said, each image can be treated as if it has its own copy of everything.

## What is a container?

Docker containers are isolated environments for running Docker images. These environments can have varying levels of isolation, but, generally, each has access to its own filesystem, is completely unaware of anything running outside the container on the same computer, and has full network access. The container basically acts as if it is an entirely separate computer which has numerous security benefits. For those of you that are aware of virtual machines, an older type of container, this might sound very resource-heavy, but Docker again has a few tricks up its sleeve to achieve this with less resources.

Traditional virtual machines emulate an entire computer by running every part of the operating system and then also running your project on top of that so that your project can run in an isolated environment. This includes the kernel, an essential part of every OS. However, kernels take a lot of resources to emulate, so running more than one virtual machine is often not feasible. On the other hand, Docker emulates an OS without the need to emulate the kernel, so each Docker container has a much smaller footprint. In fact, you can run thousands of Docker images, each in its own container, and your computer would be able to handle it.

# Why use Docker?

The two main advantages of Docker are mentioned above: it lets you run your project anywhere and it runs your projects in a secure manner. These are rather broad, so I'll go into further detail.

## Run anywhere

When you create a Docker image, you freeze everything that is used to run the project. That means not only storing your project files, but also storing the environment that it will run in. If you need to run your project in a specific version of Linux or with a specific version of Java, it will be encoded into the image. This creates an incredible amount of flexibility when you are running multiple containers on a single machine. Different projects often have conflicting dependencies or may require different version of the language they are written in. These problems simply don't exist with Docker because the image has everything that you need.

One more benefit of this is the fact that you don't have to go out of your way to install an obscure programming language or learn a new package manager. A project that is set up with Docker can be run as simply as typing two commands: `docker build` and `docker run`. I'll explain more about the details of using Docker later in this article.

## Run in a container

When using Docker, you will often run programs written by other people. Projects that you may or may not trust. With Docker, you don't have to worry about this because the program will run in a container where it cannot touch anything on your filesystem. On top that there are plenty of security exploits in which an attacker can hijack your server through a project you may have online. If they hijack your server directly, then you have a serious problem, but if they hijack a Docker container, then you can easily stop the container and re-run the image. No problem.

On top of that, running in a container provides flexibility in how you run your programs. A container can easily be allocated a certain amount of RAM or CPU, so you can be sure that each container will only use as many resources as you allow it. This also creates an easily configurable unit of a program. Oftentimes, large companies will have to spread their web offerings over multiple servers and containers are the perfect unit to help manage the complexity that can come from that type of deployment.

# How to use Docker?

You can learn how to install Docker [here](https://docs.docker.com/get-docker/).

Installing on Linux is as simple as getting it from your distribution's package manager. The following will work on Ubuntu:
```bash
sudo apt-get install docker
```

On Linux, you may also have to enable and start the Docker background service like so:
```bash
sudo systemctl enable docker
sudo systemctl start docker
```

If you want to follow along and run the same commands as this tutorial, feel free to copy the following into a file named `main.cpp`:
```cpp
#include <iostream>

int main() {
    std::cout << "Hello, Docker!" << std::endl;
    return 0;
}
```

There are three main concepts in Docker: Dockerfiles, images, and containers. A Dockerfile is a series of commands that specifies how to build an image out of your code. This image then runs as a container. 

If you're reading this article, you're probably a Hunter student learning C++, so I'll make a C++ analogy. After you're done writing your C++ code, you have to run a bunch of `g++` commands to compile it. You may have even stored these commands into a Makefile for ease of use. These `g++` commands are akin to your Dockerfile. After you run those commands, you end up with a binary file such as `a.out`. This binary is a runnable program that was derived from your code and is akin to a Docker image. Once you decide to run the binary by typing something like `./a.out` into the terminal, you'll have a running process. This process may run quickly and be stopped within a few seconds if its a small program. The running process is akin to a Docker container. Each time you update your code, you can run the same commands again to produce a new binary and you can run that binary as many times as you want. Similarly, each time you update your code, you can build a new image and run it in a container as many times as you want.

## Writing a Dockerfile

To start off, you're going to need a Dockerfile. Generally, there are three parts to each Dockerfile, but you may need more depending on your project. This file should be placed at the root of your project and should be named `Dockerfile` (the capitalization is important).

### Base image

Each Dockerfile starts off with a base image which is the most fundamental part of the environment your project will run in. The image for your project will be built off of this base. For interpreted languages like Python, the base image for that language is necessary. For compiled languages, the language's base image may be necessary for compilation, but just any Linux base image will do for running the program. The most commonly used base image for compiled projects is Alpine Linux. You can browse publicly available images on [Docker Hub](https://hub.docker.com/).

The first line of your Dockerfile will use the `FROM` command and look like this:
```docker
FROM base-image:version
```

### Copying your code

Next, you have to bring your code into the image and make it runnable. For interpreted languages, this means copying your code into the image and optionally downloading dependencies. For compiled languages, this means copying your code and then compiling it. The two main Dockerfile commands that you will use here are `COPY` for copying files from the local filesystem into the image and `RUN` for running commands in the image. It's also good practice to define a `WORKDIR` because the image will run everything from root (`/`) by default.

These commands look like this:
```docker
WORKDIR /app
COPY src/ folder_in_image/
RUN g++ src/main.cpp -o main
```

### Entrypoint

The last part to set up is a command that should be run when you run the image which is known as the entrypoint. This is done with the `CMD` command which looks like this:
```docker
CMD ["./main"]
```

### Putting it all together

Altogether, here's what a simple Dockerfile would look like for a simple C++ project. Lines that start with `#` are comments.
```docker
# Start with a base image that has g++
# The "latest" version tag is available for every image and
# it just defaults to the latest version it can find
FROM frolvlad/alpine-gxx:latest

# Set a working directory other than /
WORKDIR /app

# Copy source code into the image
# "." is the same as working directory, ie: /app
COPY main.cpp .

# Compile the program
RUN g++ -o main main.cpp

# Set the entrypoint
CMD ["./main"]
```

Here's what a simple Dockerfile could look like for a simple NodeJS project:
```docker
# Start with NodeJS v14
FROM node:14

# Set a working directory
WORKDIR /app

# Get dependencies
COPY package.json .
RUN npm install

# Copy source code directory into the image with the same name
COPY src/ src/

# Set entrypoint with an argument 
CMD ["node", "src/index.js"]
```

## Building the image

Now that the Dockerfile is ready, the hard part is out of the way. Simply `cd` into your project directory and run the following command to build the image.
```bash
docker build .
```

Note: Docker will recursively send everything in the current directory to the Docker daemon as the "build context" so copy the sample C++ code and Dockerfile into a new directory if you're following along.

This will download the `frolvlad/alpine-gxx` base image and then run through the steps in your Dockerfile, but will not redo a step that has been done in the past if nothing relevant to that step has changed. Docker will assign a random name to your image, but you can specify it with the `-t` flag like this:
```bash
docker build . -t docker-tutorial
```

## Running the image

Now that you have an image built, you can view available images using:
```bash
docker image ls
```

That should show something similar to this format:
```
REPOSITORY             TAG       IMAGE ID        CREATED          SIZE
docker-tutorial        latest    ffd1adcf2458    3 minutes ago    205MB
frolvlad/alpine-gxx    latest    37291897ce83    3 months ago     205MB
```

The image I just built is named `docker-tutorial` because I used the `-t` flag, but no matter what the name may be, you can run it in a container using this command:
```bash
docker run docker-tutorial
```

You should see the following output if you are using the sample C++ code provided above:
```
Hello, Docker!
```

## Cleaning up

There's one more important step in running an image. When Docker creates a container for running an image, it runs until the program specified in the entrypoint either completes or errors out. At that point, the container is stopped, but it is not deleted. Generally, you can view running Docker containers with `docker ps`, but to view all containers including stopped ones, add the `-a` flag:
```bash
docker ps -a
```

That'll give you output with this format:
```
CONTAINER ID  IMAGE            COMMAND   CREATED        STATUS                    PORTS  NAMES
188c8695181f  docker-tutorial  "./main"  6 seconds ago  Exited (0) 5 seconds ago         zealous_heisenberg
```

If a container ever errors out and you want to inspect its contents to figure out what happened, it'll be available here. This one is fine, though, so I can remove it by specifying the name with this command:
```bash
docker rm zealous_heisenberg
```

After running `bash±docker ps -a` again, the stopped container should be gone.

## Re-run anywhere

Now that you've built and run an image locally, you can do it on any other computer that has Docker installed. One way you can do this is by committing your Dockerfile with your code, cloning it on another computer, building it, and running it. However, you can also opt to push your image to [Docker Hub](https://hub.docker.com) and pull it on any other computer. The step-by-step commands of doing this are out of scope for this article, but one more thing you might be interested in is running Docker images that other people have pushed to Docker Hub. For example, let's say you want to run MongoDB on your computer, but don't want to bother installing it and configuring it properly. Luckily for you, MongoDB has an [official image](https://hub.docker.com/_/mongo) published on Docker Hub, so all you have to do is pull (download) it and run it with the following commands:
```bash
docker pull mongo
docker run mongo
```

There are plenty of community contributions on Docker Hub such as [OpenVPN](https://hub.docker.com/r/kylemanna/openvpn), [Nginx](https://hub.docker.com/_/nginx), or even a [Minecraft server](https://hub.docker.com/r/itzg/minecraft-server). Any of these can easily be run locally with the above commands, so feel free to explore! On top of that, plenty of repositories on GitHub include a Dockerfile at the root of the project, making it easy to build and run without having to set up a particular, possibly finicky, development environment.

Anyways, that's all you need to know about the basics of Docker. There's much more that Docker provides. Volumes, in particular, are a very important part of most Docker workflows and Docker Compose is a tool that helps coordinate projects that involve more than one Docker container. You can also specify a bunch of different flags to the various commands mentioned in this tutorial to better customize your own Docker workflow. For example, `docker run --rm image_name` will automatically remove a container after it is done running and `docker run -d` will run an image in the background (daemonized). You can learn more about these by running `man docker` or by visiting the [Docker documentation](https://docs.docker.com/).
