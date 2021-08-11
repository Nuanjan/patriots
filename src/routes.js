import React from "react";
import Layout from "./Hoc/Layout";
import { Switch } from "react-router-dom";

import Home from "./components/home";
import SignIn from "./components/signin";
import Dashboard from "./components/admin/Dashboard";
import PrivateRoutes from "./components/authRoutes/PrivateRoutes";
import PublicRoutes from "./components/authRoutes/PublicRoutes";
import AdminMatches from "./components/admin/matches";
import AddEditMatch from "./components/admin/matches/AddEditMatch";
import AdminPlayers from "./components/admin/players";
import AddEditPlayers from "./components/admin/players/AddEditPlayers";
import Theteam from "./components/team";
import NotFound from "./components/ui/not_found";
import TheMatches from "./components/theMatches";

const Routes = (props) => {
  console.log(props);
  return (
    <Layout>
      <Switch>
        <PrivateRoutes
          {...props}
          path="/admin_players/add_players"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoutes
          {...props}
          path="/admin_players/add_players/:id"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoutes
          {...props}
          path="/admin_players"
          exact
          component={AdminPlayers}
        />
        <PrivateRoutes
          {...props}
          path="/admin_matches/edit_match"
          exact
          component={AddEditMatch}
        />
        <PrivateRoutes
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatch}
        />
        <PrivateRoutes
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <PrivateRoutes
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PublicRoutes
          {...props}
          retricted={false}
          path="/"
          exact
          component={Home}
        />
        <PublicRoutes
          {...props}
          retricted={true}
          path="/sign_in"
          exact
          component={SignIn}
        />
        <PublicRoutes
          {...props}
          retricted={false}
          path="/the_team"
          exact
          component={Theteam}
        />
        <PublicRoutes
          {...props}
          retricted={false}
          path="/the_matches"
          exact
          component={TheMatches}
        />
        <PublicRoutes {...props} retricted={false} component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Routes;
