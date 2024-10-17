import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GetApi } from "../utilis/Api_Calling";
import { toast } from "react-toastify";
import Dummy from "./Dummy";

const OnBoarding = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [OnBoarding, setOnBoarding] = useState(null);
  const getOnboard = async () => {
    try {
      let res = await GetApi(
        `api/studentroutes/onboard/${location?.state?.jobId}`
      );
      console.log(res?.data);
      setOnBoarding(res?.data?.data);
    } catch (error) {
      console.error(error.response);
      toast.error("unable to fetch onboard details", { autoClose: 1000 });
      navigate("/");
    }
  };
  useEffect(() => {
    // getOnboard();
    if (!location.state) navigate("/");
  }, []);

  return (
    <div>
      <Dummy />
    </div>
  );
};

export default OnBoarding;
