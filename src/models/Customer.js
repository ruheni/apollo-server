import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CustomerSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	contactName: {
		type: String,
		required: true,
		trim: true,
	},
	market: {
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
	agents: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Agent',
			required: true,
			array: true,
		},
	],
})

export const Customer = mongoose.model('Customer', CustomerSchema)
