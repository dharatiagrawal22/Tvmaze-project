const listReducer = (state = [], action) => {
  switch (action.type) {
    case "addList":
      return action.payload.map((item) => {
        if (item.show.image !== null) {
          return item;
        }
      });
    default:
      return state;
  }
};
export default listReducer;
