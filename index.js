const express = require("express");
require("./config");
const Card = require("./card");

const app = express();
app.use(express.json());
app.post("/create", async (req, resp) => {
  let data = new Card(req.body);
  let result = await data.save();
  console.log(req.body);
  resp.send(result);
});

app.get("/list", async (req, resp) => {
  let data = await Card.find();
  resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.parems);
  let data = await Card.deleteOne(req.params);
  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  console.log(req.parems);
  let data = await Card.updateOne(req.params, { $set: req.body });
  resp.send(data);
});

app.get("/search/:key", async (req, resp)=>{
  console.log(req.params.key)
  let data = await Card.find(
  {
    "$or":[
      {"name":{$regex:req.params.key}},
    ]
  })
  resp.send(data);
})

app.listen(5001);