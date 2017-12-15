
Use this template when you want to create a <b>prototype frontend</b>
having only a basic understanding of frontend development (HTML5, CSS, JavaScript, ...).

This template tries to avoid all sophisticated features of current front end development
(build tools, framework features) to make the entry barrier as low as possible.

The project targets Python data scientists who want to visualize
their results more interactively than in Jupyter notebooks.

There 104 HTML5 elements, 370 CSS properties, numerous JavaScript APIs,
numerous UI widgets, many web UI frameworks, many AngularJS constructs.

But you have to know only a small subset of all these things.
This templates contains everything a Python data scientist needs.

To create you own prototype, just fork the repository and change it.


## Run the Frontend

The webserver can be started via [docker-compose](https://docs.docker.com/compose/install/):

    docker-compose up
    open http://127.0.0.1:8081


## Run the Backend

    cd backend
    workon myvirtenv-python36
    pip install -r requirements.txt
    python app.py
    ./test.sh


## Roadmap

* Module 10: JSON Editor
* Module 11: Javascript (Object.assign etc.)
* Module 12: error handling (console, alert)


