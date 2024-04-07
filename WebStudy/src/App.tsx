import { store } from "./state/store.ts";
import { Provider } from "react-redux";

import AppRouter from "./routes/AppRouters.tsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
      ,
    </>
  );
}

export default App;
