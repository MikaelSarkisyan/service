const { ServiceBroker } = require("moleculer");
const HTTPServer = require("moleculer-web");

const brokerNode1 = new ServiceBroker({
  nodeID: "node-1",
  transporter: "NATS",
});

brokerNode1.createService({
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

const brokerNode2 = new ServiceBroker({
  nodeID: "node-2",
  transporter: "NATS",
});

brokerNode2.createService({
  name: "products",
  actions: {
    listProducts(ctx) {
      return [
        { id: 1, name: "Apple" },
        { id: 2, name: "Orange" },
        { id: 3, name: "Banana" },
      ];
    },
  },
});

Promise.all([brokerNode1.start(), brokerNode2.start()]);


setTimeout(async () => {
  console.log(await brokerNode1.call("$node.services"));
}, 5000);