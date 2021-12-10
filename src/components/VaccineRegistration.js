import React, { useState } from "react";
import Axios from "axios";

function VaccineRegistration() {
  const url = "http://192.168.88.136:51232/api/CovidVS/CreateProfile";
  const [data, setData] = useState({
    enrollmentID: 0,
    lastName: "",
    firstName: "",
    middleName: "",
    emailAddress: "",
    phoneNumber: "",
    exactDOB: "",
    approximateAge: "",
    identificationType: "",
    identificationNumber: "",
    sex: "",
    residentialAddress: "",
    healthSectorWorker: "",
    knownMedicalCondition: "",
    preferredHealthFacilityType: "",
    preferredStateForVacination: "",
    preferredLGAForVacination: "",
    preferredVacinationSite: "",
    preferredVacinationDateTime: "",
    firstDoseAdministered: ""
  });

  function submit(e) {
    e.preventDefault();

    Axios.post(url, {
        enrollmentID: data.enrollmentID,
        lastName: data.lastName,
        firstName: data.firstName,
        middleName: data.middleName,
        emailAddress: data.emailAddress,
        phoneNumber: data.phoneNumber,
        exactDOB: data.exactDOB,
        approximateAge: data.approximateAge,
        identificationType: data.identificationType,
        identificationNumber: data.identificationNumber,
        sex: data.sex,
        residentialAddress: data.residentialAddress,
        healthSectorWorker: data.healthSectorWorker,
        knownMedicalCondition: data.knownMedicalCondition,
        preferredHealthFacilityType: data.preferredHealthFacilityType,
        preferredStateForVacination: data.preferredStateForVacination,
        preferredLGAForVacination: data.preferredLGAForVacination,
        preferredVacinationSite: data.preferredVacinationSite,
        preferredVacinationDateTime: data.preferredVacinationDateTime,
        firstDoseAdministered: data.firstDoseAdministered
    })
    .then(res => {
        console.log(res.data)
        alert (res.data.message)
    });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  return (
    <div>
      <h1>Registration Form for COVID-19 Vaccination</h1>
      <form onSubmit={(e) => submit(e)}>
        <input onChange={(e) => handle(e)} placeholder="Last Name" id="lastName" value={data.lastName} type="text" />
        <input onChange={(e) => handle(e)} placeholder="First Name" id="firstName" value={data.firstName} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Middle Name" id="middleName" value={data.middleName} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Email address" id="emailAddress" value={data.emailAddress} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Phone Number" id="phoneNumber" value={data.phoneNumber} type="text" />
        <input onChange={(e) => handle(e)} placeholder="DOB known? (Yes/No)" id="exactDOB" value={data.exactDOB} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Approximate age" id="approximateAge" value={data.approximateAge} type="text" />
        <input onChange={(e) => handle(e)} placeholder="ID Type" id="identificationType" value={data.identificationType} type="text" />
        <input onChange={(e) => handle(e)} placeholder="ID No" id="identificationNumber" value={data.identificationNumber} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Gender (Male/Female)" id="sex" value={data.sex} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Residential Address" id="residentialAddress" value={data.residentialAddress} type="text" />
        <input onChange={(e) => handle(e)} placeholder="In Health Sector? (Yes/No)" id="healthSectorWorker" value={data.healthSectorWorker} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Med Condition (Yes/No)" id="knownMedicalCondition" value={data.knownMedicalCondition} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Public/Private Facility" id="preferredHealthFacilityType" value={data.preferredHealthFacilityType} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Vaccination State" id="preferredStateForVacination" value={data.preferredStateForVacination} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Vaccination LGA" id="preferredLGAForVacination" value={data.preferredLGAForVacination} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Vaccination site" id="preferredVacinationSite" value={data.preferredVacinationSite} type="text" />
        <input onChange={(e) => handle(e)} placeholder="Vaccination date" id="preferredVacinationDateTime" value={data.preferredVacinationDateTime} type="date" />
        <input onChange={(e) => handle(e)} placeholder="First Dose? (Yes/No)" id="firstDoseAdministered" value={data.firstDoseAdministered} type="text" />
        <button>Submit</button>
      </form>

      <div>
          <img src="" id="resultImg" alt=""/>
      </div>
    </div>
  );
}

export default VaccineRegistration;
