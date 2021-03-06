from flask import Flask
import requests
from flask import request
from flask import json
from os import environ
from flask_cors import cross_origin
import time
app=Flask(__name__,static_url_path='',static_folder='/build')
url=environ.get('url')
API_KEY=environ.get('API_KEY')
API_ID=environ.get('API_ID')

@app.route('/')
def home():
    return 'hello world'

@app.route('/get',methods=['POST','GET'])
@cross_origin()
def sendList():
    payload={'q':request.json['q'],'app_id':API_ID,'app_key':API_KEY,'health':request.json['health']}
    r=requests.get(url,params=payload)
    return r.text
if __name__=='__main__':
    app.run(threaded=True,port=5000)
