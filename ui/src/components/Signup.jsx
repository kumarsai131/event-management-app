import { useState } from "react";
import { signupAPI, verifyOtpAPI } from "../utils/apis";

export default function Signup() {
  const [signupData, setSignupData] = useState({});
  const [displayOtp, setDisplayOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);

  function selectRole(e) {
    setSignupData({
      ...signupData,
      role: e.target.name,
    });
  }

  function signup() {
    setError(null);
    if (displayOtp) {
      verifyOtpAPI({ ...signupData, otp })
        .then((res) => {
          if (res.data.success) {
          }
        })
        .catch((err) => {
          setError(err);
        });
    } else {
      signupAPI(signupData)
        .then((res) => {
          if (res.data.success) {
            setDisplayOtp(res.data.message);
          }
        })
        .catch((err) => {
          setError(err);
        });
    }
  }

  function checkAllFields() {
    let flag = true;
    if (
      signupData &&
      signupData.username &&
      signupData.email &&
      signupData.role &&
      signupData.password
    ) {
      flag = false;
    } else {
      flag = true;
    }
    return flag;
  }

  return (
    <div className="text-center mt-5">
      <div className="row">
        <div className="col-md-10">
          <div className="col-md-4">
            <label for="username">Username - </label>
            <input
              type="text"
              id="username"
              value={signupData.username}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  username: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-4">
            <label for="email">Email - </label>
            <input
              type="email"
              id="email"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-4">
            <label for="password">Password - </label>
            <input
              type="password"
              id="password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  password: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-4">
            <label>Role - </label>
            <input
              type="radio"
              name="ADMIN"
              id="ADMIN"
              value={signupData.role}
              onChange={selectRole}
              checked={signupData.role === "ADMIN"}
            />{" "}
            <label for="admin">ADMIN</label>
            <input
              type="radio"
              name="USER"
              id="USER"
              value={signupData.role}
              onChange={selectRole}
              checked={signupData.role === "USER"}
            />
            <label for="user">USER</label>
          </div>
        </div>

        {displayOtp && (
          <div className="my-3">
            <label>{displayOtp}</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        )}

        <div className="mt-3">
          <button onClick={signup} disabled={checkAllFields()}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
