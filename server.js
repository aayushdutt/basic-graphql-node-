const express = require('express')
const app = express()
const expressGraphQL = require('express-graphql')
const schema = require('./schema')

app.use('/graphql', expressGraphQL ({
    schema:schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("Server is running on localhost:4000/")
})