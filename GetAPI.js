
const express = require("express")
const app = express()
var PORT = 8080

////////////////////////////////////////////////////////////////////////////////////////////////////////

//   URL to paste in browser : http://localhost:8080/Login/12/23441/?fullname=Anirudh+Nayak&age=22    //

////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/Login/:username/:password', function(req, res) 
{
   let fullName=req.query['fullname'];
   let age=req.query['age'];
 
   let username = req.params['username']
    let password = req.params['password']

    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    const person={

      pathParameters:
      {
         userName:username,
         password:password
      },
      queryParameters:
      {
         fullName:fullName,
         age:age
      },
      fullUrl:fullUrl
   };
  // const personJson=JSON.stringify(person);
   res.json(person);
});

app.listen(PORT, function(error){
   if (error) throw error
   console.log("Server running successfully on PORT : ", PORT)
})