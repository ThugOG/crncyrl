import Header from "./components/Header";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import store from "./utils/store";
import {Outlet} from "react-router-dom"
const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet/>
      <Footer />
    </Provider>
  );
};
export default App;
