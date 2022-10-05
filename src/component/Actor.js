import { useSelector } from "react-redux";

function Actor() {
  const actorData = useSelector((state) => state.actorData);

  return (
    <>
      <div className="data-style">
        {actorData.map((item, i) => {
          return (
            item && (
              <div className="details-style" key={i}>
                <h4 className="text"> {item.person.name} </h4>
                <img src={item.person.image.medium} alt="actor-show" />
              </div>
            )
          );
        })}
      </div>
    </>
  );
}
export default Actor;
