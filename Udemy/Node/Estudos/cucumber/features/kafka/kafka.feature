Feature: Kafka

    Testes voltados ao Kafka
    
    Scenario Outline: <title>
        Given I publish <message> to kafka at <topic>
        Then message recieved at <topic> should be <message>
        Examples:
            | title             | topic | message |
            | 1 - Kafka Message | teste | oi      |