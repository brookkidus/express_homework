const express = require("express");
const app = express();
app.listen(1234 , (err)=>{
    if (err) {
        console.log("not listening");
    }else{
        console.log("listening");
    }
});
app.use(express.static("apple"))
