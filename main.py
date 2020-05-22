#################################################################
####  API BACKEND TEST                                       ####
#################################################################

import flask

app = flask.Flask(__name__)


#################################################################
####  ROUTES                                                 ####
#################################################################

@app.route('/')
def index():
    '''Page index.'''
    return flask.send_file('static/index.html')

@app.route('/favicon.ico')
def icon():
    '''Page icon.'''
    return flask.send_file('static/images/icon.png')

@app.route('/service-worker.js')
def service_worker():
    '''Service worker.'''
    return flask.send_file('static/service-worker.js')

#################################################################
####  MAIN                                                   ####
#################################################################

if __name__ == '__main__':
    app.run()
