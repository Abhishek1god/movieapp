import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import WatchMovie from "./pages/WatchMovie";

import "./App.css";
import { SideLayout } from "./layout/SideLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<SideLayout />}>
        <Route index element={<Home />} />
        <Route path="/movie/:id" element={<WatchMovie />} />
      </Route>
    </Route>
  ),
  { basename: "/movieapp" }
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
