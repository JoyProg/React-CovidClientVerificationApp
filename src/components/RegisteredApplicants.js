import React from "react";
import Axios from "axios";

function RegisteredApplicants() {
  const url = "http://192.168.88.136:51232/api/CovidVS";

  function fetchApplicants() {
    Axios.get(url).then((res) => {
      console.log(res);
      if (res.data.status === "00")
        returnApplicants(res.data.data)
      else 
        alert(res.data.message)
    })
  }

  return (
      <div>
          <h1>Registered Applicants</h1>
          {fetchApplicants()}
      </div>
  )
}

function returnApplicants(data) {
    return (
        <div>
        <h1>check</h1>
          <div>
            <table class="table table-strip " id="listTable">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Full Name</th>
                  <th>Type of ID</th>
                  <th>ID Number</th>
                  <th>Vaccination State</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td></td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
    );
}

export default RegisteredApplicants;
