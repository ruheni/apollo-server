require('dotenv').config({ path: './.env' })
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import connectDB from './src/util/db'
import resolvers from './src/resolvers'
import typeDefs from './src/typeDefs'

const startServer = async () => {
  const app = express()

  connectDB()

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () =>
    console.log(`🚀  Server ready at localhost:4000/${server.graphqlPath}`)
  )
}

startServer()
