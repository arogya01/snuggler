const express = require('express'); 
const app = express(); 


const PORT = 3000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log('the body is',req.body);
    res.send('Hello World');
});

app.post('/message',(req,res)=>{
    console.log('/message body is');
    console.dir(req.body);
    res.json({
        messageRecieved: true
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});