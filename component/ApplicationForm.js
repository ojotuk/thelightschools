import React, { useEffect, useRef, useState } from "react";

import stylesA from "../styles/admissions.module.css";
import styles from "../styles/InputField.module.css";
import InputField from "./CustumInput/InputField";

const Admission = () => {
  const [inputs, setInputs] = useState({
    email: "",
    surname: "",
    firstName: "",
    middleName: "",
    dob: "",
    parent: "",
    address: "",
    phone: "",
    campus: "",
  });
  let inputEmailContainer = useRef(null);
  let inputSurnameContainer = useRef(null);
  let inputFirstnameContainer = useRef(null);
  let inputMiddlenameContainer = useRef(null);
  let inputDobContainer = useRef(null);
  let inputParentContainer = useRef(null);
  let inputAddressContainer = useRef(null);
  let inputPhoneContainer = useRef(null);
  const inputChangehandler = (e) => {
    if (e.target.name === "phone" && isNaN(e.target.value)) return null;
    inputs[e.target.name] = e.target.value;
    setInputs({ ...inputs });
  };
  const inputRadioChangehandler = (e) => {
    let checked = e.target.checked;
    if (checked) {
      inputs[e.target.name] = e.target.value;
      setInputs({ ...inputs });
    }
  };
  useEffect(() => {
    inputDobContainer.current.classList.add(styles.labelUpAlways);
  }, []);
  //validate email
  const validReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let validEmail = inputs.email.match(validReg);

  const inputFocusHandler = (type) => {
    switch (type) {
      case "email":
        inputEmailContainer.current.classList.add(styles.slider);
        break;
      case "surname":
        inputSurnameContainer.current.classList.add(styles.slider);
        break;
      case "firstName":
        inputFirstnameContainer.current.classList.add(styles.slider);
        break;
      case "middleName":
        inputMiddlenameContainer.current.classList.add(styles.slider);
        break;
      case "dob":
        inputDobContainer.current.classList.add(styles.slider);
        break;
      case "parent":
        inputParentContainer.current.classList.add(styles.slider);
        break;
      case "address":
        inputAddressContainer.current.classList.add(styles.slider);
        break;
      case "phone":
        inputPhoneContainer.current.classList.add(styles.slider);
        break;

      default:
        break;
    }
  };
  const inputBlurHandler = (type) => {
    switch (type) {
      case "email":
        if (!inputs.email)
          return inputEmailContainer.current.classList.remove(styles.slider);
        if (!validEmail) {
          setInputs({ ...inputs, email: "" });
          return inputEmailContainer.current.classList.remove(styles.slider);
        }
        break;
      case "surname":
        if (!inputs.surname)
          return inputSurnameContainer.current.classList.remove(styles.slider);
        break;
      case "firstName":
        if (!inputs.firstName)
          return inputFirstnameContainer.current.classList.remove(
            styles.slider
          );
        break;
      case "middleName":
        if (!inputs.middleName)
          return inputMiddlenameContainer.current.classList.remove(
            styles.slider
          );
        break;
      case "dob":
        if (!inputs.dob)
          return inputDobContainer.current.classList.remove(styles.slider);
        break;
      case "address":
        if (!inputs.address)
          return inputAddressContainer.current.classList.remove(styles.slider);
        break;
      case "parent":
        if (!inputs.parent)
          return inputParentContainer.current.classList.remove(styles.slider);
        break;
      case "phone":
        if (!inputs.phone)
          return inputPhoneContainer.current.classList.remove(styles.slider);
        break;

      default:
        break;
    }
  };
  const parent = [
    {
      refer: inputParentContainer,
      type: "text",
      name: "parent",
      label: "Fullname",
      value: inputs.parent,
    },
    {
      refer: inputPhoneContainer,
      type: "text",
      name: "phone",
      label: "Phone Number",
      value: inputs.phone,
    },
    {
      refer: inputAddressContainer,
      type: "text",
      name: "address",
      label: "Address",
      value: inputs.address,
    },
    {
      refer: inputEmailContainer,
      type: "email",
      name: "email",
      label: "Email(optional)",
      value: inputs.email,
    },
  ];
  const params = [
    {
      refer: inputSurnameContainer,
      type: "text",
      name: "surname",
      label: "Surname",
      value: inputs.surname,
    },
    {
      refer: inputFirstnameContainer,
      type: "text",
      name: "firstName",
      label: "First Names",
      value: inputs.firstName,
    },
    {
      refer: inputMiddlenameContainer,
      type: "text",
      name: "middleName",
      label: "Other Names",
      value: inputs.middleName,
    },
    {
      refer: inputDobContainer,
      type: "date",
      name: "dob",
      label: "Date of Birth",
      value: inputs.dob,
    },
  ];

  return (
    <>
      <div className={stylesA.candidateWrapper}>
        <div className={stylesA.sectionTitle}>Applicant Details</div>
        <div className={stylesA.choiceTitle}>Select Campus</div>
        <div className={stylesA.candidateChoice}>
          <div className={stylesA.choice}>
            <label>Day</label>
            <input
              name="campus"
              value={"day"}
              type="radio"
              onChange={inputRadioChangehandler}
            />
            <div></div>
          </div>
          <div className={stylesA.choice}>
            <label className="ml-4">Boarding</label>
            <input
              name="campus"
              value={"boarding"}
              type="radio"
              onChange={inputRadioChangehandler}
            />
            <div></div>
          </div>
        </div>
        <div className={stylesA.candidateArea}>
          {params.map((field, index) => (
            <InputField
              refer={field.refer}
              inputs={inputs}
              setInputs={setInputs}
              inputChangehandler={inputChangehandler}
              inputFocusHandler={inputFocusHandler}
              inputBlurHandler={inputBlurHandler}
              type={field.type}
              name={field.name}
              label={field.label}
              value={field.value}
              key={index}
            />
          ))}
          <div className={stylesA.selectClass}>
            <label>Present Class</label>
            <select>
              <option>Jss 1</option>
              <option>Jss 2</option>
              <option>Jss 3</option>
              <option>Sss 1</option>
              <option>Sss 2</option>
              <option>Sss 3</option>
            </select>
          </div>
          <div className={stylesA.selectClass}>
            <label>Preferred Class of Entry</label>
            <select>
              <option>Jss 1</option>
              <option>Jss 2</option>
              <option>Jss 3</option>
              <option>Sss 1</option>
              <option>Sss 2</option>
              <option>Sss 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className={stylesA.parentWrapper}>
        <div className={stylesA.sectionTitle}>Parent/Guardian Details</div>
        <div className={stylesA.parentArea}>
          {parent.map((field, index) => (
            <InputField
              refer={field.refer}
              inputs={inputs}
              setInputs={setInputs}
              inputChangehandler={inputChangehandler}
              inputFocusHandler={inputFocusHandler}
              inputBlurHandler={inputBlurHandler}
              type={field.type}
              name={field.name}
              label={field.label}
              value={field.value}
              key={index}
            />
          ))}
        </div>
      </div>
      <button className={stylesA.cta} onClick={() => console.log(inputs)}>
        Apply
      </button>
    </>
  );
};

export default Admission;
