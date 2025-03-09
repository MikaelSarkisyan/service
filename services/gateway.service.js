import moleculerWeb from 'moleculer-web';
import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker({
  nodeID: "node-1",
  transporter: "NATS",
});

broker.createService({
  name: "gateway",
  mixins: [moleculerWeb],

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

