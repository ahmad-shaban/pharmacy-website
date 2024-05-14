import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	old_price: {
		type: Number,
		required: true
	},
	new_price: {
		type: Number,
		required: true
	}
});

export const Product = mongoose.model('Product', productSchema);
