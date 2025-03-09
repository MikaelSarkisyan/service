const { ServiceBroker } = require("moleculer");
const HTTPServer = require("moleculer-web");

const broker = new ServiceBroker({
  nodeID: "node-1",
  transporter: "NATS",
});

broker.createService({
  name: "gateway",
  mixins: [HTTPServer],

  settings: {
    routes: [
      {
        aliases: {
          "GET /products": "products.listProducts",
        },
      },
    ],
  },
});

broker.start();

module.exports = broker;
