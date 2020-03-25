import React from 'react'
import { Home, Objectives, Objective, Feedback, MyTeam, MyTeamDetail, SignIn  } from "../containers"
import { Route } from "react-router-dom"

import PrivateRoute from "../components/PrivateRoute"

const Routes = () => (
    <div className="main-content">
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/objectives" component={Objectives} />
        <PrivateRoute path="/objectives/:objectiveId" component={Objective} />
        <PrivateRoute exact path="/feedback" component={Feedback} />
        <PrivateRoute exact path="/my-team" component={MyTeam} />
        <PrivateRoute path="/my-team/:userId" component={MyTeamDetail}/>
        <Route path="/signin/" component={SignIn}/>
    </div>
)

export default Routes