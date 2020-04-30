import React,{ useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiConstants';
import axios from 'axios'
function Home(props) {
    const [state , setState] = useState("Active Drafts")
    useEffect(() => {
        axios.get(API_BASE_URL+'/api/v1/users/drafts', { headers: { 'Authorization': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }
        })
        .catch(function (error) {
          if(error.response.status === 404) {
            setState("You Have No Active Drafts")
          } else {
            redirectToLogin()
          }
        });
      })
    function redirectToLogin() {
        props.history.push('/login');
    }
    return(
        <div className="mt-2">
            {state}
        </div>
    )
}

export default withRouter(Home);