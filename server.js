const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

const http = require('http')

server = http.createServer((req,res) => {
    let reqBody = '';
    req.on('data', (data) => {
        reqBody += data
    })

    req.on('end', () =>{
        reqBody = reqBody.split('&').map((ele) => ele.split('='));
        reqBody = reqBody.map((pair) => pair.map((val) => decodeURIComponent(val)));
        let obj = {}
        console.log(reqBody)
        reqBody.forEach((pair) => obj[pair[0]] = pair[1]);
        console.log(obj) 
    })
    res.status = 200;
    res.end();
})

const port = 5000;

server.listen(port, () => {
    console.log('Server is listening on port', port)
});

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };