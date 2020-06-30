import mongoose from 'mongoose'

const Schema = mongoose.Schema

const AgentSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	phoneNumber: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
	},
})

export const Agent = mongoose.model('Agent', AgentSchema)
