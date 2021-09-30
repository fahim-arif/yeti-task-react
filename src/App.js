import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Routes from "./Routes/Routes";

import { ToastContainer, Slide } from "react-toastify";
import { Provider } from "react-redux";
import { store, persistedStore } from "./store";

import { history } from "./helpers/history";

import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <Router history={history}>
            <Layout>
              <Routes />
            </Layout>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
