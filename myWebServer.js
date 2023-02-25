
// // // const fs = require("fs");
// // // const path = require("path");
// // // fs.mkdir(path.join(__dirname, "static"), (err) => {
// // //   if (err) {
// // //     return console.log(err);
// // //   }
// // //   console.log("done");
// // // });

// // const http = require("http");
// // // const server = http.createServer();
// // // let port = 1234
// // const randomNumber = require('./randomNumber');
// // const random1 = randomNumber.random();
// // const server = http.createServer( (req , res ,err)=>{
    
// // if (err)throw err
// //     res.end(`Request received and processed:\n random number: ${random1}`)
// //     console.log("request received" );

// // });
// // server.listen(1232, function(err){
// // if (err)throw err
// // console.log('listing to port number 1234');
// // })
// // server.listen(port, function(err){
// // if (err)throw err
// // console.log('listing to port');
// // })


// // Import the randomNumber module
// const  http = require("http");
// const  fs = require("fs");
// const  url = require("url");
// const mimetype = require("mime-types").lookup
// const server = http.createServer(function(req, res){
//     let filepath = req.url
//     if (filepath == "/"){
//         filepath = "/index.html"
//     }
//     if (filepath == "/about") {
//         filepath = "/about.html"
//     }
//     let requestedFile = __dirname + "static/apple-html-css-replica" + filepath
//     // let requestedFile = "static/apple-html-css-replica" + filepath
//     fs.readFile(requestedFile , function(err, content){
//         if (err ) {
//            res.writeHead(404 )
//            res.end()

//         }else{
//             let mime = mimetype(filepath)
//             res.writeHead(200, {"content-type":mime} )
//            res.write(content)
//         }
//         res.end()
//     })
// });

// server.listen(1232, function(err){
//     if (err)throw err
//     console.log('listing to port number 1234');
//     })
    
// express
//Q6
const express = require('express')
const app = express();
app.listen(1234, function(err){
    if (err){
        console.log("server not running");
    }else{
        console.log("server running" );
    }
})

app.get("/" , function(req, res){
res.send("request received and processed");
});
// app.get("/about" , function(req, res){
// res.send("this is the about page");
// });
// app.get("/cotactus" , function(req, res){
// res.send("this is our address");
// });
// Q7
// const randomNum = require("./randomNumber");
// const express = require("express");
// // const app = express();
// const port  = 1234;
// app.listen(port, function(err){
// if (err) {
//     console.log("server is not listening");
// }else{
//     console.log("server is listening");
// }
// })
// app.get("/",function(req , res){
//     res.send(`your random numer is: ${randomNum.random()}`);
// });

