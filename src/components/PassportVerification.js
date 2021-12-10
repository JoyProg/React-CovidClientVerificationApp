import React, { useState } from "react";
import Axios from "axios";

function PassportVerification() {
  const url = "http://192.168.88.136:51232/api/CovidVS/VerifyPassport";
  const [data, setData] = useState({
    surname: "",
    docNo: "",
  });

  function submit(e) {
    e.preventDefault();
    document.getElementById("resultImg").src = ""

    Axios.post(url, {
      docno: data.docNo,
      surname: data.surname,
      apiReferenceNo: "2344834599",
      merchant: {
        bankID: 163,
        bankName: "Abuja",
        bankBranchID: 25917,
        operatorEntityID: 681,
        verifyReasonID: 5,
        verifyReasonText: "",
      },
      endUser: {
        organizationID: 1,
        organizationName: "NPHCDA",
        branchID: 34,
        branchName: "Apapa",
        endUserID: 897,
        endUserFullName: "Adelaide Chidinma",
      }
    })
    .then(res => {
        console.log(res.data)
        if(res.data.status === "00") {
            document.getElementById("resultImg").src = res.data.data.docimage
        } else {
            alert (res.data.message)
        }
    });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input onChange={(e) => handle(e)} placeholder="Surname" id="surname" value={data.name} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Passport Number" id="docNo" value={data.docNo} type="text" />
        <button>Submit</button>
      </form>

      <div>
          <img src="" id="resultImg" alt=""/>
      </div>
    </div>
  );
}

export default PassportVerification;
