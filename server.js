import express from "express";
import path from "path";
import compression from "compression";
import urllib from "urllib";

const app = express();
app.use(compression());

app.use("/js", express.static(__dirname + "/src"));
app.use("/css", express.static(__dirname + "/src"));

export const loansURL = process.env.api;
// Ultra simple async retrieval of remote files over http or https

const errorHandler = (err, res) => {
  console.log('Error' + err);
  res.status(500);
  res.render('error', { error: err });
};

const checkEnv = (res) => {
  !loansURL && res.status(500).send('Error: API URL is missing.');
}

app.all("/loans/marketplace", (req, res) => {
  checkEnv(res);
  urllib
    .request(loansURL+req.path)
    .then(result => {
      res.json(JSON.parse(result.data.toString()));
    })
    .catch(err => errorHandler(err, res));
});

app.all("/loans/marketplace/(*)", (req, res) => {
  checkEnv(res);
  urllib
    .request(loansURL + '/' + req.params['0'])
    .then(result => {
      res.send(result.data);
    })
    .catch(err => errorHandler(err, res));
});

app.get("*", function(req, res) {
  checkEnv(res); 
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log("Production Express server running at localhost:" + PORT);
});

export default app;
