const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker();

broker.createService({
  name: "auth",
  actions: {
    getAuth(ctx) {
      const { username, password } = ctx.params;
      if (username === "admin" && password === "password") {
        return {
          success: true,
          message: "Welcome",
        };
      } else {
        return {
          success: false,
          message: "Something went wrong!",
        };
      }
    },
  },
});

module.exports = broker;
