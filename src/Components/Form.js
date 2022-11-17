import React from "react";

function Form() {
  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form>
          <input type="text" name="firstName" placeholder="First Name..." />
          <input type="text" name="lastName" placeholder="Last Name..." />
          <input type="text" name="email" placeholder="Email..." />
          <input type="text" name="age" placeholder="Age..." />
          <input type="text" name="password" placeholder="Password..." />
          <input
            type="text"
            name="confirmPassword"
            placeholder="Confirm Password..."
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
