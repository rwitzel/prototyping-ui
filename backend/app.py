#!/usr/bin/env python3
import logging

import connexion
from flask_cors import CORS

from logging_configurer import configure_logging

logger = logging.getLogger(__name__)


if __name__ == '__main__':
    configure_logging()
    app = connexion.App(__name__)
    CORS(app.app, supports_credentials=True, origins=[r'http://127.0.0.1:8081', r'http://localhost:8081', r'.*\.github.io'])
    app.add_api('swagger.yaml')
    app.run(port=8080, server='gevent') # run our standalone gevent server
