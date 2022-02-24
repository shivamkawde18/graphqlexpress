const express=require("express");
const db=require("./db");
const mongoose=require("mongoose")
const { ApolloServer, gql } = require('apollo-server-express');
//import {makeExecutableSchema} from 'graphql-tools';
//import { typeDefs } from './typeDefs';
const typeDefs=require("./typeDefs");
//import { resolvers } from './resolver';
const resolvers=require("./resolver");
//import {graphqlExpress, graphiqlExpress} from 'graphql-server-express'
//const { ApolloServer, gql } = require('apollo-server-express');
//import {makeExecutableSchema} from 'graphql-tools'
const {makeExecutableSchema } =require('graphql-tools')
//const {graphqlExpress, graphiqlExpress } = require('apollo-server-express');
//const {graphqlExpress, graphiqlExpress } = require('graphql-server-express');
//const { makeExecutableSchema } = require('apollo-server');


const {graphqlHTTP} = require('express-graphql')
bodyParser = require('body-parser')
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  })
 const app=express();


app.use('/graphql', bodyParser.json(), graphqlHTTP({schema,
    graphiql:true
}))
// app.use('/graphiql', graphiqlExpress({
//   endpointURL: '/graphql'
// }))
app.get("/",(req,res)=>{
    res.send("runnin graphql");
})
app.listen(3000,()=>{
    console.log("server on");
})
mongoose
  .connect(
    "mongodb+srv://shivamkawde:uUPiaetAL8N1klr2@cluster0.asmcq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((dc) => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not");
  });

