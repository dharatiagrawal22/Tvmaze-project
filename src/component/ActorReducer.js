const ActorReducer = (state = [], action) => {
  switch (action.type) {
    case "actor_data":
      console.log(action.payload);
      return action.payload.map((item) => {
        if (item.person.image != null) {
          return item;
        }
      });

    default:
      return state;
  }
};
export default ActorReducer;
