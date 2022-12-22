# Example using Nest, RabbitMQ and MS 


## Description

* Two projects , one generate a message to a queue with orders, the other one is billing which is in charge of receiving
* Add project alias
```
source devTools/rabbitExampleAlias
```
* run the rabbit mq container and create the queue "billing" through [Rabbit UI](http://localhost:15672)
```
upRabbitCli
```
* start both projects in different consoles.
```
startDebugCli;
startDebugMS;
```
* Through postman create an order

```
POST: http://localhost:3001/order
Body: 
{
    "name": "Churrinche",
    "price": 1.0
}
```

* You'll see on logs the sending and receiving.
* Take a look also on [Rabbit UI](http://localhost:15672/#/queues/%2F/billing) that queue is empty 
* If you turn off the MS, you'll see messages in billing queue
