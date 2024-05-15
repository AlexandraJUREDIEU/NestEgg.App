
import React, { useState } from 'react';

import {Route, Switch} from 'react-router-dom';
import Profil from "./pages/myAccount/Profil.jsx";
import Compte from "./pages/myAccount/Compte.jsx";

function MyAccount() {
    return (
      <>
            <Switch>
              <Route path="/profil" component={Profil} />
              <Route path="/compte" component={Compte} />
            </Switch>
      </>
    )
  }
  
  export default MyAccount;