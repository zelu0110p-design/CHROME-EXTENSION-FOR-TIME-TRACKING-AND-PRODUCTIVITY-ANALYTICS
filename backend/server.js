
const express = require('express');
const app = express();
app.use(express.json());

let data = [];

app.post('/track', (req, res) => {
  data.push(req.body);
  res.send({status: 'saved'});
});

app.get('/report', (req, res) => {
  res.json(data);
});

app.listen(3000, () => console.log('Backend running on port 3000'));
