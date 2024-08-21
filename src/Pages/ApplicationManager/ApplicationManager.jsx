import React, { useEffect, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GetApi } from "../utilis/Api_Calling";

const ApplicationManager = () => {
  const navigate = useNavigate();

  const [allappiledjobs, setallappiledjobs] = useState([]);
  const [Loading, setLoading] = useState(true);

  const Getallappiledjob = async () => {
    try {
      const res = await GetApi(`api/StudentRoutes/GetAllAppiledJobsofaStudent`);
      setallappiledjobs(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    Getallappiledjob();
  }, []);

  return (
    <>
      <div className="px-[17px] py-[60px] flex flex-col gap-[60px] justify-center items-center">
        <p className="font-[Outfit] text-[32px] font-[400]">
          Application Manager
        </p>
        <div className="w-full font-[500]">
          <div className="overflow-x-auto">
            <table className="w-full rounded-[12px]">
              <thead className="bg-[#e3eff7] text-[14px] font-[400] font-[Outfit] h-[84px]">
                <tr>
                  <th className="text-left font-[500] pl-[25px] pr-[90px] pt-[37px] pb-[29px]">
                    COMPANY
                  </th>
                  <th className="text-left font-[500] pl-[25px] pr-[184px] pt-[37px] pb-[29px]">
                    PROFILE
                  </th>
                  <th className="text-left font-[500] pl-[25px] pr-[26px] pt-[37px] pb-[29px]">
                    APPLIED ON
                  </th>
                  <th className="text-left font-[500] pl-[25px] pr-[86px] pt-[37px] pb-[29px]">
                    APPLICATION STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="text-[16px] bg-[#fff] font-[400] font-[Outfit] text-center">
                {allappiledjobs.map((Application, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      navigate(`/blank/allrounds/${Application.JobId._id}`);
                    }}
                    className="cursor-pointer"
                  >
                    <td className="px-[25px] py-[30px] text-black text-opacity-[50%] text-left">
                      {Application?.CompanyId?.Name}
                    </td>
                    <td className="px-[25px] flex gap-[29px] py-[30px] text-black text-opacity-[50%] text-left">
                      {Application.JobId?.positionName}
                    </td>
                    <td className="px-[25px] py-[30px] text-black text-opacity-[50%] text-left ">
                      {Application.createdAt}
                    </td>
                    <td className="px-[25px] py-[30px] text-left">
                      <div className="bg-[#e3eff7] px-[19px] py-[7px] flex  justify-center items-center rounded-[5px]">
                        <p className="text-[#4234a2]">{Application.status}</p>
                        <p className="text-[#97969d] text-[14.52px] ml-[17px]">
                          {Application.applicationStatusB}
                        </p>
                        {Application.applicationStatusC === "2" && (
                          <p className="text-[#97969d] ml-[5px] border-[0.85px] border-[#97969d] rounded-[50%] w-[18.67px] h-[18.67px] flex justify-center items-center">
                            {Application.applicationStatusC}
                          </p>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {Loading && (
              <div className="flex justify-center items-center text-2xl">
                Loading...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationManager;
