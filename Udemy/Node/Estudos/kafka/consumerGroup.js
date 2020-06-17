var kafka = require('kafka-node');
var config = require('../config').KafkaGroupQA;

function consume(topic){
    if(topic){
       var topics = topic;
    }
    else{
       var topics = config.Topics;
    }

    var consumer =  new kafka.ConsumerGroup(
        config.Options,
        topics
    );

    consumer.on('message', function(message){
        console.log(message.value);
        return message;
    });

    consumer.on('error', function(error){
        console.log(error);
        return error;
    });
};

module.exports = {consume}