import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
		enum: ['SALES_EXECUTIVE', 'GENERAL_MANAGER', 'STOCK_CLERK', 'ADMIN'],
	},
})

export const User = mongoose.model('User', UserSchema)
