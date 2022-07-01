#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Jul  1 03:59:10 2022

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
    queue=result.method.queue,
    exchange='logs')

def callback(ch,properties,method,body):
    print(f'message received is: {body}')
hi="receiver"

print(f"waiting for connection queue {hi}")

channel.basic_consume(
    queue=queue_name, 
    on_message_callback=callback,
    auto_ack=True)

channel.start_consuming()
