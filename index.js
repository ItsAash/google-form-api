const data = require("./data");
const Form = require("./form");
const form = new Form(data.formID);

form.setData(data.data);
scheduleCallback(sendRequest);

function scheduleCallback(cb) {
  const { hours, minutes, seconds } = data.time;
  const reqDate = new Date(0, 0, 0, hours, minutes, seconds);
  (function loop() {
    var now = new Date();
    if (now.toLocaleTimeString() === reqDate.toLocaleTimeString()) {
      cb(now);
    }
    now = new Date(); // allow for time passing
    var delay = 1000 - (now % 1000); // exact ms to next minute interval
    setTimeout(loop, delay);
  })();
}

function sendRequest(now) {
  form.send(async (e) => {
    console.table({
      status: "SENT",
      time: `${now.toLocaleTimeString()}`,
    });
  });
}
