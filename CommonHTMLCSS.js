const http =require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    //Build File Path

    let filepath = path.join(__dirname, "public1", req.url ==="/" ? "index1.html" : req.url);


    //Extension of file
    let extname = path.extname(filepath);

    //Initial content type
    let contentType = "text/html";

    //Check ext and set content type
    switch (extname){
        case".js":
        contentType = "text/javascript";
        break;

        case ".css":
        contentType = "text/css";
        break;

        case ".json":
        contentType = "application/json";
        break;

        case ".png":
        contentType = "image/png";
        break;

        case ".jpg":
        contentType = "image/jpg";
        break;

    }

    //Check if contentType is text/html but no html file extension

    if (contentType == "text/html" && extname == "") filepath += ".html";

    // log the filepath
    console.log(filepath);

    //Read File
    fs.readFile(filepath, (err,content) => {
        if (err) {
            if (err.code == "ENOENT") {
             
                // Page Not Found

                fs.readFile(
                    path.join(__dirname, "public1", "index1.html"),
                    (err, content) => {
                        res.writeHead(404, {"Content-Type": "text/html"});
                        res.end(contevt, "utf8");

                    }
                 
                );

            }else {

                // some server error
                res.writeHead(500);
                res.end('Server Error: ${err.code}');

            }
        } else {

            //success
            res.writeHead(200, { "content-Type" : contentType});
                res.end(content, "utf8");
        }
    });

});

const PORT = process.env.PORT||5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))