var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
    goodbye: String
  }
`);

var root = { 
    hello: () => 'Hello world!',
    goodbye: () => 'Goodbye world' 
};


graphql(schema, '{ goodbye, hello }', root).then((response) => {
  console.log(response);
});