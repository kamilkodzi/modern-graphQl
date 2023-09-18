"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const typeDefs = `#graphql
type Query {
	hello: [String!]!
	products: [Product!]!
}

type Product {
	name: String!
	description: String!
	quantity: Int!
	price: Float!
	onSale: Boolean!
}
`;
const resolvers = {
    Query: {
        hello: () => {
            return ['Hello', 'asa', 'Here'];
        },
        products: () => {
            return [
                {
                    name: 'Bike',
                    description: 'Mountain Bike',
                    quantity: 20,
                    price: 399.99,
                    onSale: true,
                },
            ];
        },
    },
};
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await (0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
