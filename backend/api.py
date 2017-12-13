import logging
import os
import time
from datetime import datetime

from configuration import cache_folder
from logging_configurer import configure_logging

logger = logging.getLogger(__name__)

def command1(param1, param2, allow_caching):

    result_path = f'{cache_folder}/command1_{param1}_{param2}.txt'

    if allow_caching and os.path.isfile(result_path):
        with open(result_path, 'r') as file:
            return file.read()


    result = datetime.utcnow().isoformat()

    with open(result_path, 'w') as file:
        file.write(result)

    return result



if __name__ == '__main__':
    configure_logging()

    result = command1('abc', 'def', False)
    logger.info(f'result: {result}')

    time.sleep(2)

    result = command1('abc', 'def', True)
    logger.info(f'result: {result}')
