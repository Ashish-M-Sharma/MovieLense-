import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);

  return (
    <Router>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setTriggerSearch={setTriggerSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              searchQuery={searchQuery}
              triggerSearch={triggerSearch}
              setTriggerSearch={setTriggerSearch}
            />
          }
        />
        <Route
          path="/Movies"
          element={
            <Movies
              searchQuery={searchQuery}
              triggerSearch={triggerSearch}
              setTriggerSearch={setTriggerSearch}
            />
          }
        />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
