/*var fs = require('fs');

function start(response) {
    console.log("Request handler 'start' was called.");

    fs.readFile('./index.html', function (err, html) {
        if (err) {
            throw err;
        }
        else
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    });
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;
*/
var fs = require('fs');
var url = require('url');
var querystring = require("querystring");

var obj;
function start(response/*, postData*/) {
    console.log("Request handler 'start' was called.");

    fs.readFile('./page.html', function (err, data) {
        if (err) throw err;
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();

    });

       fs.readFile('./file.json', function(err,data) {
           if (err) throw err;
           obj = JSON.parse(data);

       })








    /*fs.readFile('./file.json', function (err, data) {
     if (err) throw err;
     obj = JSON.parse(data);

     obj.splice( postData,1);
     var fs = require('fs');
     fs.writeFile("./file.json",JSON.stringify(obj),function (err) {
     if(err) {
     return console.log(err);
     //response.writeHead(409);
     response.end();
     }

     console.log("The file was saved!");
     response.writeHead(200);
     response.end();
     // writeHead(301,{Location: '/'});response.end();
     });


     });*/


/*
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/sendtext" method="post">'+
        '<input type="text" name="q" placeholder="Поиск"    value="">'+
        '<textarea name="text" rows="20" cols="20"></textarea>'+
        '<textarea name="text2" rows="20" cols="20"></textarea>'+
        '<input type="checkbox" name="checkbox"  >Показывать' +
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '<table>';



    fs.readFile('./file.json', function (err, data) {
        if (err) throw err;
        var obj = JSON.parse(data);


        for (var i=0;i<obj.length;i++)
        {
            body=body+
        '<tr>' +
            '<td class="service">'+obj[i].service.toString()+'</td>'+
            '<td class="contractor">'+obj[i].contractor.toString()+'</td>'+
            '<td  class="actions">' +
               // '<a title="Информация" href="/infoCity?id=1">🛈</a>' +
                //'<a title="Изменить" href="/editCity?id=1">✎</a>' +
                "<a title=\"Удалить\" href=\"/removeService?id=" + i +"\""+'>✖</a>' +
            '</td>'+
        '</tr>';
            //body= body + obj[i].service.toString()+obj[i].contractor.toString();
        }



        body=body+
            '</table>'+
            '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

});*/

}
function sendjquery(response) {
        console.log("Request handler 'jquery' was called.");


    fs.readFile('./js/jquery.js', function (err, data) {
            if (err) throw err;
            response.writeHead(200, {"Content-Type": "text/js"});
            response.write(data);
            response.end();

        })
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent the text: "+
        querystring.parse(postData).text);
    response.end();
}

function sendtext(response, postData) {
    console.log("Request handler 'send' was called.");

    fs.readFile('./index.html', function (err, html) {
        if (err) {
            throw err;
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html+"You've sent : "+ querystring.parse(postData).text + querystring.parse(postData).text2+ querystring.parse(postData).q+querystring.parse(postData).checkbox);
        response.end();
})}

function removeService(response,postData, request) {
    console.log("Request handler 'upload' was called.");

       /* response.writeHead(200, {"Content-Type": "text/html"});
        response.write( querystring.parse(que).id);
        response.end();
        */

       obj.splice(postData,1);
    fs.writeFile("./file.json",JSON.stringify(obj),function (err) {
        if (err) throw err;
        console.log("The file was saved!");
        response.writeHead(200);
        response.end();
    })


        /*fs.readFile('./file.json', function (err, data) {
         if (err) throw err;
         obj = JSON.parse(data);

         obj.splice( postData,1);
         var fs = require('fs');
         fs.writeFile("./file.json",JSON.stringify(obj),function (err) {
         if(err) {
         return console.log(err);
         //response.writeHead(409);
         response.end();
         }

         console.log("The file was saved!");
         response.writeHead(200);
         response.end();
         // writeHead(301,{Location: '/'});response.end();
         });


         });*/


}
/*
function removeService(response,postData, request) {
    console.log("Request handler 'upload' was called.");

    var obj;
    var que = url.parse(request.url).query;que
    if(querystring.parse(que).id) {

        /* response.writeHead(200, {"Content-Type": "text/html"});
         response.write( querystring.parse(que).id);
         response.end();
         *\/

        fs.readFile('./file.json', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);

            obj.splice( querystring.parse(que).id,1);
            var fs = require('fs');
            fs.writeFile("./file.json",JSON.stringify(obj),function (err) {
                if(err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
                response.writeHead(301,{Location: '/'});
                response.end();
                // writeHead(301,{Location: '/'});response.end();
            });

            //body= body + obj[i].service.toString()+obj[i].contractor.toString();






        });
    }

}
*/
function sendjson(response, postData) {
    console.log("Request handler 'send' was called.");

    fs.readFile('./file.json', function (err, html) {
        if (err) {
            throw err;
        }
        response.writeHead(200, {"Content-Type": "text/json"});
        response.write(html);
        response.end();
    })
}

exports.start = start;
exports.upload = upload;
exports.sendtext = sendtext;
exports.removeService = removeService;
exports.sendjson = sendjson;
    exports.sendjquery = sendjquery;