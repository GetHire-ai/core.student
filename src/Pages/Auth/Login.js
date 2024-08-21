import { Button } from "@mui/material";
import { PostApi } from "../utilis/Api_Calling";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [Email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [Number, setNumber] = useState("");
  const [NumberOtp, setNumberOtp] = useState(" ");
  const [ShowEmail, SetShowEmail] = useState(true);
  const [Showotp, setShowotp] = useState(false);
  const [ShowNumber, setShowNumber] = useState(true);
  const [ShowNumberotp, setShowNumberotp] = useState(false);
  const [activeTab, setActiveTab] = useState("email");
  const [orderId, setorderId] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const Sendotp = async () => {
    if (Email.trim() === "") {
      toast.error("Email is required", { autoClose: 1000 });
      return;
    }

    if (Email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(Email)) {
        toast.error("Invalid email format", { autoClose: 1000 });
        setLoading(false);
        return;
      }
    }

    const data = {
      Email: Email,
    };

    try {
      const responce = await PostApi("api/StudentRoutes/StudentLogin", data);
      console.log(responce?.data);
      toast.success(responce?.data?.message, { autoClose: 1000 });
      if (responce?.data?.status) {
        SetShowEmail(false);
        setShowotp(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Login = async () => {
    setLoading(true);
    const numberOtp = otp.join("");
    if (numberOtp.trim() === "") {
      toast.error("Email is required", { autoClose: 1000 });
      return;
    }
    let data = {
      Email: Email,
      otp: numberOtp,
    };

    try {
      const responce = await PostApi(
        "api/StudentRoutes/StudentEmailOtpLoginVerify",
        data
      );
      console.log(responce?.data);
      localStorage.setItem("StudentToken", responce?.data?.token);
      localStorage.setItem("Studentid", responce?.data?.Student?._id);
      localStorage.setItem("Studentdata", responce?.data?.Student);
      toast.success(responce?.data?.message, { autoClose: 1000 });
      window.location.reload();
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "") {
        if (element.nextSibling) {
          element.nextSibling.focus();
        }
      }
    }
  };
  const generateOrderId = () => {
    const timestamp = Date.now().toString();
    const randomString = Math.random().toString(36).substring(2, 15);
    return timestamp + randomString;
  };
  const SendOtptoNumber = async () => {
    if (Number.length !== 10 || isNaN(Number)) {
      toast.error("Phone number must be exactly 10 digits", {
        autoClose: 1000,
      });
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      if (Number.trim() === "") {
        toast.error("Number is required", { autoClose: 1000 });
        return;
      }
      const uniqueOrderId = generateOrderId();
      setorderId(uniqueOrderId);

      const data = {
        Number: "+91" + Number,
        orderId: uniqueOrderId,
      };
      const response = await PostApi(
        "api/StudentRoutes/CreateStudentOtp/SMS",
        data
      );
      if (response?.data?.success) {
        toast.success("Otp Send Successful", { autoClose: 1000 });
        setShowNumber(false);
        setShowNumberotp(true);
      }
    } catch (error) {
      console.log(error.response.data.message);
      if (
        error.response.data.message ===
        "No Account Exist with this Number Please Sign up First"
      ) {
        toast.error("No Account Exist with this Number Please Sign up First", {
          autoClose: 1000,
        });
        navigate("/signup");
      }
    } finally {
      setLoading(false);
    }
  };
  const verifyNumberOtp = async () => {
    try {
      setLoading(true);
      const numberOtp = otp.join("");
      if (numberOtp.trim() === "") {
        toast.error("Otp is required", { autoClose: 1000 });
        return;
      }
      const data = {
        Number: "+91" + Number,
        orderId: orderId,
        otp: numberOtp,
      };
      const response = await PostApi("api/StudentRoutes/verifyotp", data);
      console.log(response?.data.data);
      localStorage.setItem("StudentToken", response?.data?.token);
      localStorage.setItem("Studentid", response?.data?.data?._id);
      localStorage.setItem("Studentdata", response?.data?.data);
      toast.success("Login Successfull !", { autoClose: 1000 });
      window.location.reload();
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data.reason) {
        toast.error(error.response.data.reason, { autoClose: 1000 });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-10 z-50">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center bg-gray-100 min-h-[100vh]">
        <div className="bg-white p-1 rounded-[30px] shadow-md w-full max-w-[600px]">
          <div className="grid lg:grid-cols-1 mt-2 gap-3 lg:mx-10 overflow-y-auto">
            <>
              <div className="flex justify-center mt-2 w-1/2 mx-auto mb-4">
                <button
                  onClick={() => setActiveTab("email")}
                  className={`w-1/4 p-1 ${
                    activeTab === "email"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } rounded-l`}
                >
                  Email
                </button>
                <button
                  onClick={() => setActiveTab("number")}
                  className={`w-1/4 p-1 ${
                    activeTab === "number"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } rounded-r`}
                >
                  Phone
                </button>
              </div>
              <div className="justify-start ">
                <h2 className="text-[46px] text-gray-500 font-[600]">Login</h2>
                <p className="font-[600] text-[20px] text-gray-500 mb-8">
                  Enter {activeTab === "email" ? "email" : "mobile number"} to
                  continue
                </p>
              </div>
              {activeTab === "email" && (
                <>
                  {ShowEmail && (
                    <>
                      <div className="flex items-center  mb-4 px-2">
                        <input
                          type="Email"
                          placeholder="Email eg.john@doe.com"
                          className="rounded-lg border px-3 py-2 w-full"
                          value={Email}
                          onChange={(e) => setEmail(e.target.value)}
                          onKeyUp={(e) => {
                            if (e.key === "Enter") {
                              Sendotp();
                            }
                          }}
                        />
                      </div>
                      <div className="flex justify-between items-center my-8">
                        <button
                          onClick={() => {
                            navigate("/signup");
                          }}
                          className="w-[120px] h-[39px]  text-blue-600 text-[16px] font-[500] hover:text-undreline"
                        >
                          Register
                        </button>
                        <Button
                          onClick={Sendotp}
                          className="w-[120px] h-[39px] bg-gradient-to-tl from-[#216ccf] to-[#216ccf] text-[#fff] text-[16px] font-[500]"
                          style={{
                            color: "#fff",
                            fontWeight: "650",
                            fontSize: "16px",
                          }}
                        >
                          Send Otp
                        </Button>
                      </div>
                    </>
                  )}
                  {Showotp && (
                    <>
                      <div className="w-full flex justify-around">
                        {otp.map((data, index) => (
                          <input
                            key={index}
                            type="text"
                            maxLength="1"
                            autoFocus={index === 0}
                            className="border p-2 bg-gray-100 rounded h-[70px] w-[70px] text-center"
                            value={data}
                            onChange={(e) => handleOtpChange(e.target, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onKeyUp={(e) => {
                              if (
                                e.key === "Enter" &&
                                index + 1 == otp.length
                              ) {
                                Login();
                              }
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-end items-center my-8">
                        <Button
                          onClick={Login}
                          className="w-[200px] h-[49px] bg-gradient-to-tl from-[#216ccf] to-[#216ccf] text-[#fff] text-[16px] font-[500]"
                          style={{
                            color: "#fff",
                          }}
                        >
                          Verify Otp
                        </Button>
                      </div>
                    </>
                  )}
                </>
              )}
              {activeTab === "number" && (
                <>
                  {ShowNumber && (
                    <>
                      <div className="flex items-center border rounded mb-4 ">
                        <select className="bg-white  rounded-l-lg px-3 py-3">
                          <option value="IN">IN +91</option>
                        </select>
                        <input
                          type="number"
                          placeholder="Enter your contact number"
                          className=" rounded-r-lg px-3 py-2 w-full"
                          onKeyDown={handleKeyDown}
                          onKeyUp={(e) => {
                            if (e.key === "Enter") {
                              SendOtptoNumber();
                            }
                          }}
                          value={Number}
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-between items-center my-8">
                        <button
                          onClick={() => {
                            navigate("/signup");
                          }}
                          className="w-[120px] h-[39px]  text-blue-600 text-[16px] font-[500] hover:text-undreline"
                        >
                          Register
                        </button>
                        <Button
                          onClick={SendOtptoNumber}
                          className="w-[120px] h-[39px] bg-gradient-to-tl from-[#216ccf] to-[#216ccf] text-[#fff] text-[16px] font-[500]"
                          style={{
                            color: "#fff",
                            fontWeight: "650",
                            fontSize: "16px",
                          }}
                        >
                          Send Otp
                        </Button>
                      </div>
                    </>
                  )}
                  {ShowNumberotp && (
                    <>
                      <div className="w-full flex justify-around">
                        {otp.map((data, index) => (
                          <input
                            key={index}
                            type="text"
                            maxLength="1"
                            autoFocus={index === 0}
                            className="border p-2 bg-gray-100 rounded h-[70px] w-[70px] text-center"
                            value={data}
                            onChange={(e) => handleOtpChange(e.target, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onKeyUp={(e) => {
                              if (
                                e.key === "Enter" &&
                                index + 1 == otp.length
                              ) {
                                verifyNumberOtp();
                              }
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-end items-center my-8">
                        <button
                          onClick={verifyNumberOtp}
                          className="w-[120px] h-[39px] bg-gradient-to-tl from-[#216ccf] to-[#216ccf] text-[#fff] text-[16px] font-[500]"
                          style={{
                            color: "#fff",
                            fontWeight: "650",
                            fontSize: "16px",
                          }}
                        >
                          Continue
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
