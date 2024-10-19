import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GetApi, putformdataApi } from "../utilis/Api_Calling";
import { toast } from "react-toastify";
import Sections from "./Sections";

const OnBoarding = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const studentId = localStorage.getItem("Studentid");
  const [OnBoarding, setOnBoarding] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getOnboarding = async () => {
    try {
      setLoading(true);
      let url = `api/onboardroutes/${location?.state?.jobId}/${studentId}`;
      const res = await GetApi(url);
      console.log(res)
      setOnBoarding(res?.data?.data);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err?.response);
    } finally {
      setLoading(false);
    }
  };

  const updateOnboarding = async (id, data) => {
    try {
      setLoading(true);
      await putformdataApi(`api/onboardroutes/update/${id}`, data);
      getOnboarding();
      toast.success("Onboarding Updated", { autoClose: 1000 });
    } catch (err) {
      toast.error("Onboarding Updating Failed", { autoClose: 1000 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!location.state || !studentId) {
      navigate("/"); // Redirect if there's no jobId or studentId
    } else {
      getOnboarding();
    }
  }, []);

  

  return (
    <Sections
      loading={loading}
      OnBoarding={OnBoarding}
      updateOnboarding={updateOnboarding}
    />
  );
};

export default OnBoarding;
