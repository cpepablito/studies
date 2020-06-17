var kafka = require('kafka-node');
var config = require('../config').KafkaLocal;

function consume(topic, callback){
    const client = new kafka.KafkaClient({kafkaHost:config.kafkaHost});
    const options = config.Options;
    
    if(topic){
       var payloads = config.Partitions.map(function(partition){return {topic: topic, partition: partition}});
    }
    else{
       var payloads = config.Topics.map(function(topic){
            return config.Partitions.map(function(partition){return {topic: topic, partition: partition}})
        }).flat();
    }

    var consumer =  new kafka.Consumer(
        client,
        payloads,
        options
    );

    consumer.on('message', function(message){
        callback(message,false);
    });

    consumer.on('error', function(error){
        callback(error,true);
    });
};

module.exports = {consume}