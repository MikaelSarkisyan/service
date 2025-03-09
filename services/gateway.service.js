import moleculerWeb from 'moleculer-web';
const HTTPServer = moleculerWeb.HTTPServer;
import { ServiceBroker } from "moleculer";

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

