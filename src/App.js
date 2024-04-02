import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Record from "./components/Record";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="alpha-telecom">
        <Route index element={<Home />} />
        <Route path=":id" element={<Record />} />
        {/* ... etc. */}
      </Route>
    )
  );

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="alpha-telecom" element={<Home />}>
    //       <Route path=":id" element={<Record />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
