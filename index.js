import { ServiceBroker } from "moleculer";
import ApiService from "moleculer-web";

const broker = new ServiceBroker({
  nodeID: "node-2",
  transporter: "nats://localhost:4222",
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

broker.createService(ApiService)

broker.start();

setTimeout(async () => {
  console.log(await broker.call("$node.services"));
}, 5000);
