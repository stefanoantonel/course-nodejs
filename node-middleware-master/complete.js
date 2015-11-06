/*
 * My first Middleware using 'connect' module
 */

//Not a node callback function but a Middleware function
//   req  - Request to server
//   res  - Response object 
//   next - Function to execute synchronously after finishing the current

//Function One
function logger(req, res, next){
	console.log('backend  %s %s', req.method, req.url);
	next();
}

//Function two
function hello (req, res, next) {
	//res.setHeader('Content-Type', 'text/plain');
	res.write("Hello baby!");
	res.end();
	//res.end('Hello World!!!');
	next();
}

//Function three
function admin(req, res, next) {
	switch(req.url) {
		case '/':
			// ”http://myapp.com/admin”
			res.end('try /users');
			 break;
		case '/users':
			// ”http://myapp.com/admin/users”
			//res.setHeader('Content-type', 'application/json');
			res.write(JSON.stringify(['jair', 'israel', 'jocabed', 'socorro']));
			//res.end(JSON.stringify(['jair', 'israel', 'jocabed', 'socorro']));
			 break;
	}
	next();
}

var connect = require('connect');
var app = connect();

//print text within logger function with method name and url
app
	.use('/admin', admin)
	.use(logger)
	.use(hello)
	.listen(3000);
