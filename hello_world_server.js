var http = require("http")

var server = http.createServer(function(request, response) {
	response.writeHead(200, {
		"Content-Type": "plain/text"
	})
	response.write("Hello World: Node.js test henar\n")
	response.end()
})

server.listen(80)

console.log("> SERVER STARTED")
