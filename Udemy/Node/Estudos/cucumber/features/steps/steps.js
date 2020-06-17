const Cucumber = require("cucumber");
var Given = Cucumber.Given;
var When = Cucumber.When;
var Then = Cucumber.Then;

var publish = require("../../../kafka/producer").publish;
var consume = require("../../../kafka/consumer").consume;

Given(/^I publish (.*) to kafka at (.*)$/, {timeout: 10 * 1000},(message, topic, callback) => {
  publish(topic, message);
  callback();
});

Then(/^message recieved at (.*) should be (.*)$/, {timeout: 10 * 1000},(topic, message) => {
  return new Promise(function(resolve, reject) {
    consume(topic, function(data, err) {
      if (err) {
        return reject(new Error(`Erro ao consumir kafka.\n${data}`));
      }
      if (data.value === message) {
        return resolve();
      }
      return reject(
        new Error(
          `Mensagem recebida diferente da esperada!\nRecebida:${data.value}\nEsperada:${message}`
        )
      );
    });
  });
});
