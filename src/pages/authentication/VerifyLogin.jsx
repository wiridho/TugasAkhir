import { useEffect, useState } from "react";
import Card from "../../components/FormRegistration/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { resendLoginOtp, verifyLoginOtp } from "../../features/auth/authSlice";
import { verifyLoginOtp } from "../../service/authService";

const VerifyLogin = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.auth.data);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = { email: data.email, otp: otp };
    dispatch(verifyLoginOtp({ form, navigate }));
  };

  // const handleResend = () => {
  //   console.log("button resend click");
  //   dispatch(resendLoginOtp({ email: data.email }));
  // };

  return (
    <div className="">
      <div>
        <Card
          setOtp={setOtp}
          otp={otp}
          handleSubmit={onSubmit}
          // handleResend={handleResend}
        />
      </div>
    </div>
  );
};

export default VerifyLogin;
