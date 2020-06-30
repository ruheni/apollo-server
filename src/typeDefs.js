import { gql } from 'apollo-server-express'

const typeDefs = gql`
	type Query {
		agentProfile(id: Int!): Agent!
		agents: [Agent!]!
		customerProfile(id: Int!): Customer!
		customers: [Customer!]!
		orderDetails(id: Int!): Order!
		orders: [Order!]!
		ordersByStatus(status: String!): [Order!]
		productDetails(id: Int!): Product!
		products: [Product!]!
		userProfile(id: Int!): User!
		users: [User!]!
	}

	type Product {
		color: Color!
		grade: Grade!
		id: Int
		length: Int
		quantity: Int
		variety: String
	}

	type Order {
		customer: Customer!
		finalQuantity: Int
		id: Int
		initialQuantity: Int
		products: [Product!]!
		status: OrderStatus!
		Date: DateTime!
	}

	type User {
		email: String
		firstName: String
		id: Int
		lastName: String
		password: String
		role: Role!
	}

	type Agent {
		customers: [Customer!]!
		email: String
		id: Int
		name: String
		phoneNumber: String
	}

	type Customer {
		agents: [Agent!]
		contactName: String
		email: String
		id: Int
		market: String
		name: String
		orders: [Order!]!
		phoneNumber: String
	}

	"""Flower colors"""
	enum Color {
		BI_COLOUR
		CERISE
		LILAC
		ORANGE
		PEACH
		PINK
		RED
		WHITE
		YELLOW
	}
	"""These are the different roles supported on the platform"""
	enum Role {
		ADMIN
		GENERAL_MANAGER
		SALES_EXEC
		STOCK_CLERK
	}

	"""Flower grades"""
	enum Grade {
		GRADED
		UNGRADED
	}

	"""Order statuses"""
	enum OrderStatus {
		CANCELLED
		PENDING
		REVIEWED
	}

	scalar DateTime
`
export default typeDefs
