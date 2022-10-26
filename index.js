const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.port || 5000;

app.use(cors());

const courseData = require('./data/course.json')
app.get('/', (req,res)=>{
    res.send('Course Data Running')
});
app.get('/course-data', (req,res)=>{
    res.send(courseData)
});

app.get('/course/:id', (req,res)=>{
    const id = req.params.id;
    const selectCourse = courseData.find(number=>number.id===id);
    res.send(selectCourse)
});

app.listen(port,()=>{
    console.log('Course Server Running on port',port)
})