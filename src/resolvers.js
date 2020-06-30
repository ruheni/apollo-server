import { User } from './models/User'
import { Agent } from './models/Agent'
import { Customer } from './models/Customer'
import { Product } from './models/Product'
import { Order } from './models/Order'

const resolvers = {
	Query: {
		agentProfile: () => {},
		agents: () => [],
		customerProfile: () => {},
		customers: () => [],
		orderDetails: () => {},
		orders: () => {},
		ordersByStatus: () => {},
		productDetails: () => {},
		products: () => {},
		userProfile: () => [],
		users: () => {},
	},
}

export default resolvers
