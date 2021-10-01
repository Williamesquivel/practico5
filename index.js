const express = require('express');
const app = express();
const morgan = require('morgan');
require('./database')

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.get('/home', (req, res) => {
    res.send('"servidor express funcionando"')
})
app.use('/api', require('./routes/users.routes'))
app.use('/login', require('./routes/login.routes'));


//configuraciones
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log("servidor iniciado", app.get('port'))
})