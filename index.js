const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log(req.headers);
    next();
});

app.get("*", (req, res) => {
    res.header("Set-Cookie", "cookie-myname=hello world; Domain=tejas.com")
    res.send("OK");
})

app.listen(3000, () => {
    console.log("connected");
})