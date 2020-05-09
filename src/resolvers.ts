const Resolvers = {
  Query: {
    greeting: () => {
      return { greet: "hi" };
    },
  },
};

export default Resolvers;
