import axios from "axios";

function ListAction(user) {
  return (dispatch) => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${user}`)
      .then((response) => {
        dispatch(ListActionUser(response.data));
      })
      .catch((err) => console.log(err));
  };
}

const ListActionUser = (data) => {
  return {
    type: "addList",
    payload: data
  };
};
export { ListAction, ListActionUser };
