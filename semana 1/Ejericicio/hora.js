var http = require('http'),
    fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile('./form.html', function(err, html) {
    var html_string = html.toString();

      var fecha = new Date();
      var hora1 = fecha.getHours();
      var hora2 = fecha.getHours();
      var min = fecha.getMinutes();
      var seg = fecha.getSeconds();

      hora2 = ((hora2 + 11) % 12 + 1);
      if(hora1>=12) {
        var comp = hora2 + ':'+ min + ':' + seg + ' pm';
        var comp1 = hora1 + ':'+ min + ':' + seg ;
      }else{
        var comp = hora2 + ':'+ min + ':' + seg + ' am';
        var comp1 = hora1 + ':'+ min + ':' + seg;
      }

    res.writeHead(200,{'Content-type':'text/html'});
    html_string = html_string.replace('{hora1}',comp1);
    html_string = html_string.replace('{hora2}',comp);
    
    res.write(html_string);
    res.end();

  });
}).listen(8080);
