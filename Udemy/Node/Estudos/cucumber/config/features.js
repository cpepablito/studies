const yaml = require("node-yaml");

const cucumber = (key, object) => {
  let features = `node ./node_modules/.bin/cucumber-js `;

  object[key].forEach(element => {
    features += `./features/${element} `;
  });

  features += "-f json:./config/output/cucumber_report.json";

  console.log(features);
};

yaml
  .read("../features/features.yml")
  .then(res => cucumber(process.env.FEATURE, res))
  .catch(err => console.error("Error while reading file:\n\n%s", String(err)));
