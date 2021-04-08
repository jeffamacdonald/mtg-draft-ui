import React, { useEffect, useState } from "react";
import UserService from "../../services/user.service";
import DraftInfoTable from "../DraftInfoTable/DraftInfoTable"
import { Redirect } from 'react-router'

function DraftsPage(props) {
  const [state , setState] = useState({active: [], inactive: [], pending: []})
  useEffect(() => {
    UserService.drafts().then((response) => {
      console.log(response.data)
      setState(response.data)
    }).catch((error) => {
      setState({redirect: true});
    })
  }, []);

  function renderActive() {
    if(state.active.length) {
      return (
        <DraftInfoTable
          title="Active Drafts"
          tableBody={state.active} />
      )
    }
  }

  function renderPending() {
    if(state.pending.length) {
      return (
        <DraftInfoTable
          title="Pending Drafts"
          tableBody={state.pending} />
      )
    }
  }

  function renderInactive() {
    if(state.inactive.length) {
      return (
        <DraftInfoTable
          title="Finished Drafts"
          tableBody={state.inactive} />
      )
    }
  }

  function renderNoDrafts() {
    if(!state.active.length && !state.pending.length && !state.inactive.length) {
      return (
        <h4>You have no drafts!</h4>
      )
    }
  }

  if (state.redirect) {
    return <Redirect to="/login" />
  }
  return (
    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}>
        <h3>My Drafts</h3>
        {renderActive()}
        {renderPending()}
        {renderInactive()}
        {renderNoDrafts()}
      </div>
    </div>
  );
}

export default DraftsPage;
