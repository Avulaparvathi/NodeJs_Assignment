const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname,'/Training_Details'),{},function(err){
    if(err)throw err;
    console.log('')
})

fs.writeFile(path.join(__dirname,'Training_Details','Student.txt')
   ,'Student name is parvathi'
   ,(err)=>{
       if(err) throw err;
       console.log('file written to...');
   });

fs.appendFile( path.join(__dirname,'/Training_Details','/Student.txt'),
   ' Student id is 20879',
   err=>{
       if(err) throw err;
       console.log('file appended tp...')
   }
)

fs.readFile(path.join(__dirname,'/Training_Details','Student.txt'),'utf8',(err,data)=>{
    if(err)throw err;
    console.log(data);
})