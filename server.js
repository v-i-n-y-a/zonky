import express from "express";
import path from "path";
import compression from "compression";
import urllib from "urllib";

const app = express();
app.use(compression());

app.use(express.static(path.join(__dirname, "public")));
app.use("/js", express.static(__dirname + "/src"));
app.use("/css", express.static(__dirname + "/src"));

export const loansURL = process.env.api;
// Ultra simple async retrieval of remote files over http or https
app.all("/loans/marketplace", (req, res) => {
  urllib
    .request(loansURL+req.path)
    .then(result => {
      res.json(JSON.parse(result.data.toString()));
    })
    .catch(err => {
      console.log(err);
    });
});

app.all("/loans/marketplace/(*)", (req, res) => {
  urllib
    .request(loansURL + '/' + req.params['0'])
    .then(result => {
      res.send(result.data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log("Production Express server running at localhost:" + PORT);
});

export default app;
