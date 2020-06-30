import mongoose from 'mongoose'

const Schema = mongoose.Schema

const OrderSchema = new Schema({
	initialQuantity: {
		type: Number,
		required: true,
	},
	finalQuantity: {
		type: Number,
		required: true,
	},
	date: {
		required: true,
		type: Date,
		default: Date.now,
	},
	status: {
		type: String,
		required: true,
		enum: ['PENDING', 'REVIEWED', 'CANCELLED'],
	},
	customer: {
		type: Schema.Types.ObjectId,
		ref: 'Customer',
		required: true,
	},
	products: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Customer',
			required: true,
		},
	],
})

export const Order = mongoose.model('Order', OrderSchema)
