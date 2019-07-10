var url=require('url');
var adr='http://localhost:3000/demo.html?name=ram&age=$';
var q=url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata=q.query;
console.log(qdata);
console.log(qdata.age);