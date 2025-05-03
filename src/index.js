const express = require('express');
const indexRouter = require('./routes/index');
const app = express();
const port = 3000;
const db = require('./models');
db.sequelize.sync();

app.use(express.json());
app.use('/api', indexRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})