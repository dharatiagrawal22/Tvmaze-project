import axios from "axios";

const ActorAction = (user) => {
  return (dispatch) => {
    axios
      .get(`https://api.tvmaze.com/search/people?q=${user}`)
      .then((response) => {
        dispatch(ActorActionUser(response.data));
      })
      .catch((err) => console.log(err));
  };
};
const ActorActionUser = (data) => {
  return {
    type: "actor_data",
    payload: data
  };
};
export { ActorAction, ActorActionUser };
