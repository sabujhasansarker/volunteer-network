const event = require("./event");
const routers = [
  {
    path: "/event",
    hedelar: event,
  },
];

module.exports = (app) => {
  routers.forEach((router) => {
    app.use(router.path, router.hedelar);
  });
};
