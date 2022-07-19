#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Jul  1 03:52:43 2022

@author: apple
"""

import pika

connection=pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel=connection.channel()
channel.exchange_declare(exchange="logs",exchange_type="fanout")
channel.basic_publish(exchange="logs", routing_key="", body="hello")
print("connecting")
connection.close()