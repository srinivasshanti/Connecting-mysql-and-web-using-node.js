
var express = require('express');
const company = express();
company.set('view engine','ejs');

var fs=require('fs');

var mysql = require("mysql");

// var connection = (require("./Database/connection"));

//API Routes
// import Employee from "./API/employee";

// company.use("/employee", Employee)

const connection = mysql.createConnection({
  host: "117.236.190.213",
  user: "student_147",
  password: "student_147",
  database: "student_147"
});


connection.connect((err) => {
  if(err) throw err;
  console.log('Connected to MySQL Server!');
    //Select all from class
    company.get('/class', function(request, response){
      var result;
      fs.readFile('class.ejs', 'utf8', function(error, data){
  
        connection.query('SELECT * FROM CLASS', (error, result) => {

            response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/class', { data: result });
            console.log("Query results(inside): " + JSON.stringify(result));
          });
          console.log("Query results(outside): " + JSON.stringify(result));
      });
  });

  

  
  //select all from course
  company.get('/course', function(request, response){
    var result;
    fs.readFile('course.ejs', 'utf8', function(error, data){

      connection.query('SELECT * FROM COURSE', (error, result) => {

          response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/course', { data: result })
          console.log("Query results(inside): " + JSON.stringify(result));
        });
        console.log("Query results(outside): " + JSON.stringify(result));
    });
});



//select all from department
company.get('/department', function(request, response){
  var result;
  fs.readFile('department.ejs', 'utf8', function(error, data){

    connection.query('SELECT * FROM DEPARTMENT', (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views'+ '/department', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
});


//select all from grade_report
company.get('/grade_report', function(request, response){
  var result;
  fs.readFile('grade_report.ejs', 'utf8', function(error, data){

    connection.query('SELECT * FROM GRADE_REPORT', (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/grade_report', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});

//select all from student
company.get('/student', function(request, response){
  var result;
  fs.readFile('student.ejs', 'utf8', function(error, data){

    connection.query('SELECT * FROM STUDENT', (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/student', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});







// Query1
company.get('/quer1', function(request, response){
  var result;
  fs.readFile('quer1.ejs', 'utf8', function(error, data){

    connection.query('CALL quer1()', (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/quer1', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result[0]));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});



//Query2
company.get('/quer2', function(request, response){
  var result;
  fs.readFile('quer2.ejs', 'utf8', function(error, data){

    connection.query('CALL quer2()', (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/quer2', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result[0]));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});



//Query3
company.get('/quer3', function(request, response){
  var result;
  fs.readFile('quer3.ejs', 'utf8', function(error, data){

    connection.query('CALL quer3()', (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/quer3', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result[0]));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});






/*
//submit set for query1 
company.get('/query1submit', function(request, response){
  var result;
  var lname = request.query.lname;
  console.log(lname);
  fs.readFile('query1submit.ejs', 'utf8', function(error, data){
    var x = "call query1(?)";
    connection.query(x,lname,(error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/query1submit', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result[0]));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});







//Query2
company.get('/query2', function(request, response){
  var result;
  fs.readFile('query2.ejs', 'utf8', function(error, data){

    connection.query('SELECT pname FROM project', (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/query2', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//submit set for query2
company.get('/query2submit', function(request, response){
  var result;
  var pname = request.query.pname;
  console.log(pname);
  fs.readFile('query2submit.ejs', 'utf8', function(error, data){
    var x = "call query2(?)";
    connection.query(x,pname, (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views'+ '/query2submit', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});











//Query3
company.get('/query3', function(request, response){
  var result;
  fs.readFile('query3.ejs', 'utf8', function(error, data){

    connection.query('SELECT dname FROM department', (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/query3', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//query3 set for submit
company.get('/query3submit', function(request, response){
  var result;
  var dname = request.query.dname;
  console.log(dname);
  fs.readFile('query3submit.ejs', 'utf8', function(error, data){
    var x = "call query3(?)";
    connection.query(x, dname, (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/query3submit', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result[0]));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});






//Query4
company.get('/query4', function(request, response){
  var result;
  fs.readFile('query4.ejs', 'utf8', function(error, data){

    connection.query('SELECT dno FROM department', (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/query4', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//submit set for query4 
company.get('/query4submit', function(request, response){
  var result;
  var dno = request.query.dno;
  console.log(dno);
  fs.readFile('query4submit.ejs', 'utf8', function(error, data){
    var x = "call query4(?)";
    connection.query(x, dno, (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/query4submit', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result[0]));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});







//Query5
company.get('/query5', function(request, response){
 response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/query5')
});
//submit set for query45
company.get('/query5submit', function(request, response){
  var result;
  var range = request.query.range;
  console.log(range);
  fs.readFile('query5submit.ejs', 'utf8', function(error, data){
    var x = "call query5(?)";
    connection.query(x, range, (error, result) => {

        response.render('C:/Users/SRINIVAS/OneDrive/Desktop/DSM-master/Server/Views' + '/query5submit', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result[0]));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
*/



company.get("/", (req, res) => res.render('home')
);

company.listen(3000, () => {
    console.log('Server is running at port 3000');
});