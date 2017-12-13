import logging


def configure_logging():
    logging.basicConfig(format='%(asctime)-15s|%(module)-15.15s|%(lineno)-3.3d|%(message)s', level='INFO')