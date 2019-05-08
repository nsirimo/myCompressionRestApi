var express = require('express');
var app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())

async function myCompress(data) {
    let current = data.charAt[0];
    let currString = "";
    let compressedString = "";

    //scan through data (string)
    for(let i = 0; i < data.length; i++) {
        if(data.charAt(i) != current) {
            const count = currString.length;
            if(count < 16) {
                compressedString += currString;
            } else {
                let compressed = "";
                if(current == '0') {
                    compressed += "-";
                    compressed += count;
                    compressed += "-";
                    compressedString += compressed;
                } else if(current == '1') {
                    compressed += "+";
                    compressed += count;
                    compressed += "+";
                    compressedString += compressed;
                }
            }
            currString = data.charAt(i);
            current = data.charAt(i);
            counter = 1;
        } else {
            currString += data.charAt(i);
        }
    }
    compressedString += "\n";

    return compressedString;
}

app.post('/compressInput', function (req, res) {
    console.log("this is it: " + req.body);
  myCompress(req.body.inputString)
  .then((compressedString) => {
      res.send(compressedString).status(200);
  });
});

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});