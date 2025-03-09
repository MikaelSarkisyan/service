import { ServiceBroker } from "moleculer";
import { HTTPServer } from "moleculer-web";

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

export default broker;

