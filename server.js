const express = require('express');
const app = express();

//importing routes















    
//setings
app.set('port', process.env.PORT || 3000);
app.set('public', path.join(__dirname, 'public'));
//starting the server
app.listen(app.get('port'), () =>{
    console.log('server on port 3000');

});