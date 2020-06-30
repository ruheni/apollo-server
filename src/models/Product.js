import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProductSchema = new Schema({
	length: {
		type: Number,
		required: true,
		trim: true,
	},
	variety: {
		type: String,
		required: true,
		trim: true,
	},
	quantity: {
		type: Number,
		required: true,
		trim: true,
	},
	color: {
		type: String,
		required: true,
		enum: [
			'WHITE',
			'LILAC',
			'PINK',
			'CERISE',
			'RED',
			'ORANGE',
			'YELLOW',
			'PEACH',
			'BI_COLOUR',
		],
	},
	grade: {
		type: String,
		required: true,
		enum: ['GRADED', 'UNGRADED'],
	},
})

export const Product = mongoose.model('Product', ProductSchema)
