import { React, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth=getAuth()
      await sendPasswordResetEmail(auth,email)
      toast.success('Reset Link sent')
    } catch (error) {
      toast.error('Unable to reset Password')
    }
  };
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            className="emailInput"
            value={email}
            placeholder="Enter Email"
            onChange={handleChange}
          />
          <Link className="forgotPasswordLink" to="/sign-in">Sign In</Link>
          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>
            <button className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="33px" height="33px" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
