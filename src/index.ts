import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { products,reviews,categories } from './initial-data';

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

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
