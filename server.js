
const http = require('http');

const express = require('express');

const app = express();

const port = 3000;



let n = 490154203237518;
function sumDig(n)
    {
        let a = 0;
        while (n > 0)
        {
            a = a + n % 10;
            n = parseInt(n / 10, 10);
        }
        return a;
    }

function  checkIMEI(n){
    let s = n.toString();
    let l = s.length;
    if (l != 15) return false;

    let sum = 0;

    for(let i =1; i<=l; i++ ){

        let d = n%10;

        if(i%2 == 0){
            d = 2*d;
        }

        sum = sum + sumDig(d);

        n = parseInt(n / 10, 10);
    }
    return (sum%10 == 0);
}

 
let data;

http.createServer((req, res)=>{

    if (checkIMEI(n))
        data="Valid IMEI Code";
    else
        data="Invalid IMEI Code";
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(JSON.stringify(data));
    res.end();

    
    console.log("server running");
}).listen(port);
