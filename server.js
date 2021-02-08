const path = require("path");
const http = require("http")
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const server = http.createServer(app);

app.use(cors());


app.use("/", (req, res)=> {
    const options = {
        root: path.join(__dirname, "public"),
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
          }
    }
    res.sendFile("chat.html", options, (err) => {
        if(err) {
            next(err);
        }else {
            console.log("served chat page")
        }
    });
});
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));



const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "localhost";
server.listen(PORT, HOSTNAME, ()=> console.log(`server started at http://${HOSTNAME}:${PORT}/`));