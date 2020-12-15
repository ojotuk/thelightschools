import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/InputField.module.css";

const InputField = ({
  refer,
  inputs,
  setInputs,
  inputChangehandler,
  inputBlurHandler,
  inputFocusHandler,
  type,
  name,
  label,
  value,
}) => {
  return (
    <form className={styles.form}>
      <div className={styles.inputWrapper} ref={refer}>
        <input
          type={type}
          required
          onFocus={() => inputFocusHandler(name)}
          onBlur={() => inputBlurHandler(name)}
          name={name}
          value={value}
          onChange={(e) => inputChangehandler(e)}
          autoComplete="off"
        />
        <label>{label}</label>
      </div>
    </form>
  );
};

export default InputField;
