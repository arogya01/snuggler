const express = require('express'); 
const app = express(); 


const PORT = 3000; 

app.get('/', (req, res) => {
    console.log('the body is',req.body);
    res.send('Hello World');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});