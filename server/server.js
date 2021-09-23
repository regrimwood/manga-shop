const PORT = process.env.PORT || 5000;
const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongo");

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
