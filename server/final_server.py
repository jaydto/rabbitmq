from flask import request ,Flask,jsonify
from flask_sqlalchemy import SQLAlchemy
from numpy import append
from sqlalchemy.orm import sessionmaker 
from flask_marshmallow import Marshmallow 
import pandas as pd
import dataset
from sqlalchemy import create_engine, MetaData
from sqlalchemy.sql import insert
from crossorigin import crossdomain

import os

from yaml import dump


# DATABASE VARIABLES
name="root"
password="pa1234work."
host="localhost"
port=3306
dp="real_estate"

# CREATING THE APP
app=Flask(__name__)

basedir=os.path.abspath(os.path.dirname(__file__))

# Database
app.config["SQLALCHEMY_DATABASE_URI"]=f"mysql://{name}:{password}@{host}:{port}/{dp}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False

app.config['MySQL_HOST'] = 'MYSQL'
app.config['MySQL_USER'] = 'root'
app.config['MySQL_PASSWORD'] = 'pa1234work.'
app.config['MySQL_DB'] = 'real_estate'
app.config['MySQL_CURSORCLASS'] = 'DictCursor'
# init db
db=SQLAlchemy(app)
# init marshmallow
mel=Marshmallow(app)
# model
class Real_estates(db.Model):
    __tablename__ = 'real_estate'

    id=db.Column(db.Integer, primary_key=True)
    date=db.Column(db.String(100), nullable=False)
    age =db.Column(db.Float)
    distance =db.Column(db.Float)
    stores =db.Column(db.Float)
    latitude=db.Column(db.Float) 
    longitude=db.Column(db.Float) 
    price=db.Column(db.Float)

    def __init__(self,date,age,distance,stores,latitude,longitude,price):
        self.date=date
        self.age=age
        self.distance=distance
        self.stores=stores
        self.latitude=latitude
        self.longitude=longitude
        self.price=price


# schema
class Real_esate_schema(mel.Schema):
    class Meta:
        fields=('id','date','age','distance','stores','latitude','longitude','price')

# init
real_esate_schema=Real_esate_schema()
real_esate_schemas=Real_esate_schema(many=True)


# routes
@app.route("/",methods=["GET"])
@crossdomain()
def getAll():
    page=request.args.get('page',1,type=int)
    per_page=request.args.get('per_page',30,type=int)
    all_estates=Real_estates.query.paginate(page=page,per_page=per_page)
    result=real_esate_schemas.dump(all_estates.items)
    # paging=result.query.filter_by("date").paginate(page=page,perpage=per_page)
    return jsonify(result)

@app.route("/<id>",methods=["GET"])
@crossdomain()
def getOne(id):
    estate=Real_estates.query.get(id)
    return Real_esate_schema.jsonify(estate)

@app.route("/add",methods=["POST"])
@crossdomain()
def addEstate():
    date=request.json["date"]
    age=request.json["age"]
    distance=request.json["distance"]
    stores=request.json[" stores"]
    latitude=request.json[" latitude"]
    longitude=request.json[" longitude"]
    price=request.json[" price"]
    
    new_Estate=Real_estates( date,age,distance,stores,latitude,longitude,price)
    db.session.add(new_Estate)
    db.session.commit()
    return real_esate_schema.jsonify(new_Estate)

@app.route("/update/<id>",methods=["PUT"])
@crossdomain()
def updateEstates(id):
    estate=Real_estates.query.get(id)
    date=request.json[" date"]
    age=request.json[" age"]
    distance=request.json[" distance"]
    stores=request.json[" stores"]
    latitude=request.json[" latitude"]
    longitude=request.json[" longitude"]
    price=request.json[" price"]

    estate.date=date
    estate.age=age
    estate.distance=distance
    estate.stores=stores
    estate.latitude=latitude
    estate.longitude=longitude
    estate.price=price
    
    db.session.commit()
    return real_esate_schema.jsonify(estate)
    
    
@app.route("/delete/<id>",methods=["DELETE"])
@crossdomain()
def deleteEstate(id):
    estate=Real_estates.query.get(id)
    db.session.delete(estate)
    db.commit()
    return Real_esate_schema.jsonify(estate)
    



if __name__=="__main__":
        app.run(debug=True)
