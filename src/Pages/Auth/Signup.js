import { Button } from "@mui/material";
import { PostApi } from "../utilis/Api_Calling";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddDetails from "./AddDetails";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [intialotp, setintialotp] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [ShowEmail, SetShowEmail] = useState(true);
  const [Showotp, setShowotp] = useState(false);
  const [ShowDetail, setShowDetail] = useState(false);
  const [useEmail, setUseEmail] = useState(true);
  const [orderId, setorderId] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
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

  const SendotpEmail = async () => {
    setLoading(true);
    const contact = useEmail ? Email : Number;

    // Validate contact input
    if (contact.trim() === "") {
      toast.error(`${useEmail ? "Email" : "Phone number"} is required`, {
        autoClose: 1000,
      });
      setLoading(false);
      return;
    }

    if (useEmail) {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contact)) {
        toast.error("Invalid email format", { autoClose: 1000 });
        setLoading(false);
        return;
      }
    }
    try {
      const uniqueOrderId = generateOrderId();
      setorderId(uniqueOrderId);

      const data = {
        Email: useEmail ? Email : "",
        Number: !useEmail ? Number : "",
        orderId: uniqueOrderId,
      };

      const response = await PostApi(
        "api/StudentRoutes/CreateStudentOtp/signup/EMAIL",
        data
      );

      if (response?.data?.success) {
        toast.success("Otp Send Successful", { autoClose: 1000 });
        SetShowEmail(false);
        setShowotp(true);
      }
    } catch (error) {
      if (
        error.response.data.message ===
        "Account Exist with this Credentials Please Login"
      ) {
        toast.error("Account Exist with this Credentials Please Login", {
          autoClose: 1000,
        });
        navigate("/signup");
      }
    } finally {
      setLoading(false);
    }
  };

  const SendOtptoNumber = async () => {
    try {
      setLoading(true);
      if (Number.trim() === "") {
        toast.error("Number is required", { autoClose: 1000 });
        return;
      }

      if (Number.length !== 10 || isNaN(Number)) {
        toast.error("Phone number must be exactly 10 digits", {
          autoClose: 1000,
        });
        setLoading(false);
        return;
      }
      const uniqueOrderId = generateOrderId();
      setorderId(uniqueOrderId);

      const data = {
        Number: "+91" + Number,
        orderId: uniqueOrderId,
      };
      const response = await PostApi(
        "api/StudentRoutes/CreateStudentOtp/signup/SMS",
        data
      );
      if (response?.data?.success) {
        toast.success("Otp Send Successful", { autoClose: 1000 });
        SetShowEmail(false);
        setShowotp(true);
      }
    } catch (error) {
      if (
        error.response.data.message ===
        "Account Exist with this Credentials Please Login"
      ) {
        toast.error("Account Exist with this Credentials Please Login", {
          autoClose: 1000,
        });
        navigate("/signup");
      }
    } finally {
      setLoading(false);
    }
  };

  const Verifyotp = async () => {
    try {
      setLoading(true);
      const numberOtp = otp.join("");
      if (numberOtp.trim() === "") {
        toast.error("Otp is required", { autoClose: 1000 });
        return;
      }
      let data = {};

      if (Email) {
        data = {
          Email,
          orderId: orderId,
          otp: numberOtp,
        };
      }
      if (Number) {
        data = {
          Number: "+91" + Number,
          orderId: orderId,
          otp: numberOtp,
        };
      }

      const response = await PostApi(
        "api/StudentRoutes/verifyotp/signup",
        data
      );
      toast.success("OTP Verified !", { autoClose: 1000 });
      setShowDetail(true);
    } catch (error) {
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
      <>
        {!ShowDetail && (
          <div className="flex justify-center items-center bg-gray-100 min-h-[100vh]">
            <div className="bg-white p-1 rounded-[30px] shadow-md w-full max-w-[600px]">
              <div className="grid lg:grid-cols-1 mt-2 gap-3 lg:mx-10 overflow-y-auto">
                <>
                  {ShowEmail && (
                    <>
                      <div className="flex justify-center mt-2 mx-auto w-1/2 mb-4">
                        <button
                          onClick={() => setUseEmail(true)}
                          className={`w-1/4 p-1 font-semibold ${
                            useEmail
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          } rounded-l`}
                        >
                          Email
                        </button>
                        <button
                          onClick={() => setUseEmail(false)}
                          className={`w-1/4 p-1 font-semibold ${
                            !useEmail
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          } rounded-r`}
                        >
                          Phone
                        </button>
                      </div>

                      <div className="justify-start">
                        <h2 className="text-[46px] text-gray-500 font-[600]">
                          Register
                        </h2>
                        <p className="font-[600] text-[20px] text-gray-500 mb-8">
                          Enter {useEmail ? "Email" : "Phone number"} to
                          continue
                        </p>
                        <div className="flex items-center rounded mb-4 px-2">
                          <input
                            type={useEmail ? "email" : "text"}
                            placeholder={`Enter ${
                              useEmail ? "Email" : "Phone number"
                            } eg. ${useEmail ? "john@doe.com" : "1234567890"}`}
                            value={useEmail ? Email : Number}
                            onChange={(e) =>
                              useEmail
                                ? setEmail(e.target.value)
                                : setNumber(e.target.value)
                            }
                            onKeyUp={(e) => {
                              if (e.key === "Enter") {
                                {
                                  useEmail ? SendotpEmail() : SendOtptoNumber();
                                }
                              }
                            }}
                            className="rounded-lg border px-3 py-2 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center my-8">
                        <button
                          onClick={() => {
                            navigate("/login");
                          }}
                          className="w-[120px] h-[39px]  text-blue-600 text-[16px] font-[500] hover:text-undreline"
                        >
                          Login
                        </button>
                        <Button
                          onClick={useEmail ? SendotpEmail : SendOtptoNumber}
                          // onClick={() => setShowDetail(true)}
                          className="w-[120px] h-[39px] bg-gradient-to-tl from-[#216ccf] to-[#216ccf] text-[#fff] text-[16px] font-[500]"
                          style={{
                            color: "#fff",
                            fontWeight: "650",
                            fontSize: "16px",
                          }}
                        >
                          Send OTP
                        </Button>
                      </div>
                    </>
                  )}

                  {Showotp && (
                    <>
                      <>
                        <p className="text-[16px] font-[600]">Verify OTP</p>
                        <div className="w-full flex justify-between p-2">
                          {otp.map((data, index) => (
                            <input
                              key={index}
                              type="text"
                              maxLength="1"
                              autoFocus={index === 0}
                              className="border p-1 bg-gray-100 rounded h-[70px] w-[70px] text-center font-semibold"
                              value={data}
                              onChange={(e) => handleOtpChange(e.target, index)}
                              onKeyDown={(e) => handleKeyDown(e, index)}
                              onKeyUp={(e) => {
                                if (
                                  e.key === "Enter" &&
                                  index + 1 == otp.length
                                ) {
                                  Verifyotp();
                                }
                              }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-end items-center my-8">
                          <button
                            onClick={Verifyotp}
                            className="w-[200px] h-[49px] bg-gradient-to-tl from-[#0f87b3] to-[#462da1] text-[#fff] text-[16px] font-[500]"
                            style={{
                              color: "#fff",
                            }}
                          >
                            Continue
                          </button>
                        </div>
                      </>
                    </>
                  )}
                </>
              </div>
            </div>
          </div>
        )}

        {ShowDetail && (
          <>
            <AddDetails
              Email={useEmail ? Email : ""}
              Number={!useEmail ? Number : ""}
              handleKeyDown={handleKeyDown}
            />
          </>
        )}
      </>
    </div>
  );
}

export default Signup;
