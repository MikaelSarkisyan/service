import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker({
  nodeID: "node-2",
  transporter: "NATS",
});

broker.createService({
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

broker.start();

setTimeout(async () => {
  console.log(await brokerNode1.call("$node.services"));
}, 5000);
