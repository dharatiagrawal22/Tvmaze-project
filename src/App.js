import "./styles.css";
import List from "./component/List";
import Store from "./component/Store";
import { Provider } from "react-redux";

import Actor from "./component/Actor";

function App() {
  return (
    <div>
      <Provider store={Store}>
        <List />
        <Actor />
      </Provider>
    </div>
  );
}
export default App;
