import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CustomerSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	contactName: {
		type: String,
		required: true,
	},
	market: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
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
