import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListAction } from "./Action";
import { ActorAction } from "./ActorAction";
import Heading from "./Heading";

function List() {
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const [placeholder, setPlaceholder] = useState("ex.friends");
  const [chacked, setChacked] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  //console.log(userData);

  console.log(chacked);

  const dataOutput = (e) => {
    e.preventDefault();

    if (user === "") {
      setText("enter vaild name");
    }

    if (chacked === "btn2") {
      dispatch(ActorAction(user));
      console.log("second is fetched");
    }
    if (chacked === "btn1") {
      dispatch(ListAction(user));
    }
  };

  const handler = (e) => {
    setChacked(e.target.id);
    setPlaceholder("ex.Denimal redcliff");
  };

  return (
    <>
      <div className="button">
        <div className="container">
          <Heading />
          <div className="main">
            <label className="lable">
              <input
                className="show"
                type="radio"
                name="container"
                placeholder={placeholder}
                id="btn1"
                value={chacked}
                onClick={handler}
              />
              Shows
            </label>
            <label className="lable">
              <input
                type="radio"
                id="btn2"
                placeholder={placeholder}
                name="container"
                onClick={handler}
                value={chacked}
              />
              Actors
            </label>
          </div>
          <div className="inputArea">
            <form onSubmit={dataOutput}>
              <input
                type="text"
                placeholder={placeholder}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
              <p> {text} </p>
            </form>
          </div>
        </div>
      </div>
      <div className="data-style">
        {userData.map((item, i) => {
          console.log(item);
          //const image = item.show;
          return (
            item && (
              <div className="details-style" key={i}>
                <img src={item.show.image.medium} alt="episode" />

                <h4 className="text"> {item.show.name} </h4>
                <p className="summary"> {item.show.summary} </p>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

export default List;
