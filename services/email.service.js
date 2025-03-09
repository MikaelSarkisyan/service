const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker();

broker.createService({
  name: "email",
  actions: {
    async sendEmail(ctx) {
      const { recipient, subject, content } = ctx.params;

      console.log(`Sending email to ${recipient} with subject ${subject}`);
      console.log(`Content ${content}`);
      return `Email sent to ${recipient}`;
    },
  },
});

module.exports = broker;
