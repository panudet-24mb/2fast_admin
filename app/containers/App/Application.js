/* eslint-disable */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
  BlankPage,
  Error,
  NotFound,
  Form,
  Table,
  Parent,
  ManageUser,
  ManageTeam,
  TeamDetail,
  UserDetail,
  Testlib,
  ListProject,
  DetailProject,
  DashboardHome,
  DetailJob
} from '../pageListAsync';

class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    // console.log(this.props);
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          {/* Home */}
         {/* <Route exact path="/app" component={BlankPage} />
         <Route path="/app/dashboard" component={DashboardPage} />
          <Route path="/app/form" component={Form} />
          <Route path="/app/table" component={Table} />
          <Route path="/app/page-list" component={Parent} />
          <Route path="/app/pages/not-found" component={NotFound} />
          <Route path="/app/pages/error" component={Error} /> 
          {/* 2Fast Component */}
          <Route exact path="/app/Dashboard" component={DashboardHome} />
          <Route exact path="/app/manage-user" component={ManageUser} />
          <Route path="/app/manage-user/:userid" component={UserDetail} />
          <Route exact path="/app/manage-team" component={ManageTeam} />
          <Route path="/app/manage-team/:teamname" component={TeamDetail} />
          <Route path="/app/testlib" component={Testlib} />

          <Route exact path="/app/project" component={ListProject} />
          <Route exact path="/app/project/:projectid" component={DetailProject} />
          <Route path="/app/project/:projectid/:jobid" component={DetailJob} />
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Application.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Application;
