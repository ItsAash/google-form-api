const fetch = require("node-fetch");

const Name = "Nothing+much+bro";
const team = "Tero+bau";

class forms {
  constructor(formID) {
    this.formID = formID;
    this.data;
  }

  setData(data) {
    this.data = data;
  }

  send(callback) {
    sendRequest(this.formID, this.data, callback);
  }
}

const sendRequest = async (formID, data, callback) => {
  const response = fetch(
    `https://docs.google.com/forms/u/0/d/e/${formID}/formResponse`,
    {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
      },
      body: jsonToUriencoded(data),
      method: "POST",
      mode: "cors",
    }
  );
  callback(response);
};

function jsonToUriencoded(obj) {
  var str = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
  }
  return str.join("&");
}

module.exports = forms;
