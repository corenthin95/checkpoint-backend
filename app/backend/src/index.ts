import {datasource} from "./db";
import {buildSchema} from "type-graphql";
import {CountriesResolver} from "./resolvers/Countries";
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

async function initialize(){
    await datasource.initialize()
    console.log("Datasource connected")

    const schema = await buildSchema({
        resolvers: [CountriesResolver]
    })

    const server = new ApolloServer({ schema })

    const { url } = await startStandaloneServer(server, {
        listen: { port: 5000 },
    })

    console.log(`GraphQL server ready ${url}`)
}

initialize()