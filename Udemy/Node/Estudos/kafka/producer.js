var kafka = require("kafka-node");
var config = require("../config").KafkaLocal;

function publish(topic, message) {
  const client = new kafka.KafkaClient({ kafkaHost: config.kafkaHost });
  const producer = new kafka.Producer(client);

  if (topic) {
    var payloads = config.Partitions.map(function(partition) {
      return {
        topic: topic,
        partition: partition,
        messages: message.split(";")
      };
    });
  } else {
    var payloads = config.Topics.map(function(topic) {
      return config.Partitions.map(function(partition) {
        return {
          topic: topic,
          partition: partition,
          messages: message.split(";")
        };
      });
    }).flat();
  }

  producer.on("ready", function() {
    producer.send(payloads, function(err, data) {
    });
  });

  producer.on("error", function(err) {
  });
}

module.exports = { publish };
