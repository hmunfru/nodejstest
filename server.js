var http = require("http")

var server = http.createServer(function(request, response) {
	response.writeHead(200, {
		"Content-Type": "plain/text"
	})
	response.write("Hello World: FIWARE Campus Party\n")
	response.end()
})

server.listen(80)

console.log("> SERVER STARTED")
