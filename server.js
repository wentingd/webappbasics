// add package
const http = require("http");

// set variables
const host = "localhost";
const port = process.env.PORT || 8000;

// business logic: stage 1
const requestListener = (req, res) => {
    res.writeHead(200);
    res.end(`Hello from our first server :) Are you looking for ${req.url}?`);
};

// business logic: stage 2 & 3
/*
const requestListener = async (req, res) => {
    const route = req.url || "";
    const method = req.method;
    //config for the response header
    const headers = {
        "Content-Type": "application/json",
        //allow anyone from a different domain/port/protocol call us (used in stage 3)
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET",
        "Access-Control-Max-Age": 2592000, //for 30 days
      };
    // instruct users when they hit the top-level route
    if (route === "/" && method === "GET"){
        res.writeHead(200, headers);
        res.end("Welcome! Cat or Dog? (put /dog or /cat at the end of our URL!)");
    }
    // if user request /cat, give them a kitty!
    else if (route === "/cat" && method === "GET") {
        res.writeHead(200, headers);
        res.end(JSON.stringify({ message : "(=චᆽච=)" }));
    }
    // if user request /dog, give them a puppy!
    else if (route === "/dog" && method === "GET"){
        res.writeHead(200, headers);
        res.end(JSON.stringify({ message : `૮ ・ﻌ・ა` }));
    }
    // otherwise 404 because we don't have other animals yet!
    else {
        res.writeHead(404, headers);
        res.end(JSON.stringify({ message : `Sorry, we haven't caught a ${route} yet...` }));
    }
}
*/

// run the server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});