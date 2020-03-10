import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from "./home/Home"
import OrgChartComponent from "./home/OrgChart"

class ApplicationViews extends Component {
    render() {
        return (
            <>
                <Route exact path="/" render={() => {
                    return <Home />
                }} />
                <Route path="/org" render={() => {
                    return <OrgChartComponent />
                }} />
            </>
        )
    }
}

export default ApplicationViews