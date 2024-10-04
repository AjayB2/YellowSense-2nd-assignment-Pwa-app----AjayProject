import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { JobProvider } from "./context/JobContext";
import JobsPage from "./pages/JobsPage";
import BookmarkedJobs from "./pages/BookmarkedJobs";

const App = () => {
  return (
    <JobProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={JobsPage} />
          <Route path="/bookmarked" component={BookmarkedJobs} />
        </Switch>
      </Router>
    </JobProvider>
  );
};

export default App;
