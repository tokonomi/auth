import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

import App from "./components/App/App"
import reducers from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers()
    )


createRoot(document.querySelector("#root")).render(
    <Provider store={store}>
        <App/>
    </Provider>
)