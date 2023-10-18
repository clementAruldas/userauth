import React from "react";
import './style.scss'
function Input(props) {
  return (
    <div class="container">
      <div class="input-group">
        <label class="input-group__label" for="myInput">
          {props.label}
        </label>
        <input
          type={props.type}
          id="myInput"
          class="input-group__input"
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e)=>props.onChange(e)}
        />
      </div>
    </div>
  );
}

export default Input;
