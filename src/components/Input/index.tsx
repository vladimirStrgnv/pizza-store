import  { useState } from "react";
import './index.scss';

const Input = ({ validate, warn, placeholder, type }) => {
  const [isNameValid, setValid] = useState(true);
  const [name, setName] = useState("");
  const [isFocus, setFocus] = useState(false);

  function validateName(e) {
    setName(e.target.value);
    setValid(validate.test(e.target.value));
  }
  return (
    <>
      <input
        onChange={(e) => validateName(e)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type={type}
        className={`input
       ${
         isFocus && isNameValid
           ? "input--focus"
           : ""
       }
       ${!isNameValid ? "input--invalid" : ""}
       `}
      />
      <label
        className={`input-placeholder 
      ${
        name.length
          ? "input-placeholder--top"
          : ""
      }
      ${
        !isNameValid
          ? "input-placeholder--invalid"
          : ""
      }
      ${
        isFocus && isNameValid
          ? "input-placeholder--focus"
          : ""
      }
      `}
      >
        {placeholder}
      </label>
      <span
        className={`input-warn ${
          !isNameValid
            ? "input-warn--visible"
            : ""
        }`}
      >
        {warn}
      </span>
    </>
  );
};

export default Input;
