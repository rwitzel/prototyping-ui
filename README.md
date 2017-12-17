# Prototyping UI

## Who is the target user of this project?

The project targets **Python data scientists** who
* want to present their results more **interactively** than via Jupyter notebooks, and
* don't know much about website technologies, like HTML, CSS, webframeworks, and
* want to learn and **use only the minimum of these technologies**,
* want to **start with a website template** that already contains examples
  for everything they want to do.


## What does this repository contain?

This repository is a template for a webpage with a Python REST backend.

The template contains
* a call to a Python backend,
* styled examples, like
  * a list of items with some actions for them (delete, show, filter)
  * an object editor
  * a chart
  * a dropdown
  * mathematical formulas
  * forms
* hints how to use HTML, CSS, AngularJS, integration of plugins,
* a description of good practices,
* an exercise.


## What doesn't this repository contain?

To make the entry barrier for a Python data scientist as low as possible,
this template tries to avoid
* all sophisticated features of current front end development (build tools, framework features)
* the extensive use of HTML elements, CSS properties.


## Why is AngularJS 1.x chosen as frontend framework?

AngularJS 1.x
* allows rapid prototyping,
* provides a concise syntax,
* keeps the developer away from technical details (like event handlers),
* low entrance barrier for non-frontend people (if introduced correctly).

This compensates for the disadvantages, e.g.
* low performance for big pages,
* less modularization options.


## Why does this project does not use a build tool like bower?

To keep things as simple as possible.

Simplicity compensates the disadvantages of this approach, hopefully.


## How to use this repository?

To create you own prototype, just fork the repository and change it.


## How to run the frontend?

As the project is in a branch with name `gh-pages`, its contents are automatically
served via [Github Pages](https://rwitzel.github.io/prototyping-ui/frontend/),
i.e. a local web server is needed only for testing local changes.

A local webserver can be started via [docker-compose](https://docs.docker.com/compose/install/):

    docker-compose up
    open http://127.0.0.1:8081


## How to run the backend?

    cd backend
    workon myvirtenv-python36
    pip install -r requirements.txt
    python app.py
    ./test.sh


