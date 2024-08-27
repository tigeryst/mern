import React from "react";

import { Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/records/:recordId/edit" component={Edit} />
      <Route path="/records/new">
        <Create />
      </Route>
    </div>
  );
};

export default App;
