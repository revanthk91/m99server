const mg = require('mongoose')

const userSchema = mg.Schema({
	username: {
		type: String,
		required: true
	},
	movies: [],
	color: {
		type: String,
		default: "8B0000"
	}

})

//creates 'users' collection
module.exports = mg.model('users',userSchema)

