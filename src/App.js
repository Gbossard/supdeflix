import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  pathMovies,
  pathFavorites
} from "./utils/constants/constants-navigation";
import Movies from "./screens/Movies";
import Favorites from "./screens/Favorites";


function App() {
  return (
    <AnimateSharedLayout type="crossfade">
      <Router>
        <Switch>
          <Route exact path={'/'} component={Movies}/>
          <Route exact path={pathMovies} component={Movies}/>
          <Route exact path={pathFavorites} component={Favorites}/>
          
        </Switch>
      </Router>
    </AnimateSharedLayout>
  );  
}

export default App;
