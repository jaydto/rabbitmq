#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Jul  1 09:09:03 2022

@author: apple
"""

import pika
connection=pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))

channel=connection.channel()

channel.exchange_declare(
    exchange="logs",
    exchange_type="fanout")


result=channel.queue_declare(
    queue="",
    exclusive=True)

queue_name=result.method.queue

channel.queue_bind(
    queue=queue_name,exchange="logs")

def callback(ch,method,properties,body):
    print(f'message is {body}')

print("waiting for connection to be established ")

channel.basic_consume(
    queue=queue_name, 
    on_message_callback=callback,
    auto_ack=True)

channel.start_consuming()