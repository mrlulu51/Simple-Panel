const express = require('express')

const app = express()

app.set('view-engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('panel.ejs')
})
app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.listen(3000, () => console.log('[+] Server listening on *:3000'))