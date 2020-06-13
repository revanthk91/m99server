const express = require("express")
const mg = require("mongoose")
const PORT = 8080

app = express()

//routes
m99 = require('./m99')

//server init
app.listen(PORT,() => {console.log(`listening of port ${PORT}`)})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//db init
mg.connect("mongodb://127.0.0.1:27017/test",{useUnifiedTopology: true,useNewUrlParser: true},() => {
	console.log(`mLabs connected`)
})


app.use('/m99',m99)

app.get('/',(req,res) => {
	res.json({
		status: 200,
		page: 'ROOT HOME'
	})
})