const express = require('express')
const User = require('./models/users')
const mg = require('mongoose')
const router = express.Router()


router.get('/',(req,res) => {
	res.json({
		status:200,
		page: 'M99 PAGE'
	})
})

//create user
router.post('/create',(req,res) => {
	const user = new User(req.body)
	user.save()

	.then(echo => {
		res.json({
			status: echo
		})
	})

	.catch(err => {
		res.json({
			status: err //NOT 200
		})
	})

})

//get users
router.get('/users',(req,res) => {
	User.find()
	.then(rows => {
		res.json({
			status: rows
		})
	})
	.catch(err => {
		res.json({
			status: err
		})
	})
})

//get Single
router.post('/userdata',(req,res) => {
	User.findOne({_id: req.body.id})
	.then(row => {
		res.json({
			status: row
		})
	})

	.catch(err => {
		res.json({
			status: err
		})
	})
})

//update
router.post('/update',(req,res) => {
	console.log(req.body)
	User.update({_id: req.body.id},{
		$set: {
			movies: req.body.movies
		}
	}).then(echo => {
		res.json({
			status: echo
		})
	}).catch(err => {
		res.json({
			status: err
		})
	})
})


module.exports = router