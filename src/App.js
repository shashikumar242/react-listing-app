import TopBar from "./components/topbar/TopBar";
import CreateListing from "./pages/create-listing/CreateListing";
import Home from "./pages/homepage/Home";
import Detail from "./pages/listingdetail/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <TopBar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create" element={<CreateListing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
