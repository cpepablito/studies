module.exports = {
  KafkaLocal: {
    kafkaHost: "localhost:9092",
    Topics: ["teste"],
    Partitions: [0],
    Options: {
      groupId: "QA-Zup",
      autoCommit: true,
      fromOffset: false,
      encoding: "utf8"
    }
  },
  KafkaQA: {
    kafkaHost: "elo-qa-kafka01.local.zup.com.br:9092",
    Topics: [
      "elo_bin_creation",
      "elo_catalog_offers",
      "elo_catalog_update",
      "elo_change_customer_offer",
      "elo_customer_creation",
      "elo_offer_usage_history"
    ],
    Partitions: [0, 1, 2, 3],
    Options: {
      groupId: "QA-Zup",
      autoCommit: true,
      fromOffset: false,
      encoding: "utf8"
    }
  },
  KafkaGroupQA: {
    Topics: [
      "elo_bin_creation",
      "elo_catalog_offers",
      "elo_catalog_update",
      "elo_change_customer_offer",
      "elo_customer_creation",
      "elo_offer_usage_history"
    ],
    Options: {
      kafkaHost: 'elo-qa-kafka01.local.zup.com.br:9092',
      groupId: 'QA-Zup',
      autoCommit: false,
      sessionTimeout: 60000,
      fetchMaxBytes: 10 * 1024 * 1024,
      protocol: ['roundrobin'],
      fromOffset: 'earliest',
      outOfRangeOffset: 'earliest'
    }   
  }
};
