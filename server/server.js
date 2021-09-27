require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
// const cookieSession = require("cookie-session");
const app = express();


const PORT = process.env.PORT || 5000;

mongoose
.connect(process.env.DB_URI, {
useNewUrlParser: true,
useUnifiedTopology: false,
})
.then(() => console.log("mongoDB is connected"))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


//==================Routes ================================//


app.use('/auth', require("./routes/users"));
app.use("/auth", routes);

//This is to catch anything that's trying to hit an api route that isn't made
app.all("/*", function (req, res, next) {
  res.send("THIS IS NOT AN API ROUTE");
});

//Serve build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.listen(PORT, () => console.log(`Server  running on ${PORT}`));