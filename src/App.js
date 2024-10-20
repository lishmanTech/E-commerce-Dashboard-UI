import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> 
      <RouterProvider router={router} />
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
