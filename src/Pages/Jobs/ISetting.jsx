import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ISetting = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [permissionsGranted, setPermissionsGranted] = useState(false);
  const [checkboxState, setCheckboxState] = useState({
    deviceReady: false,
    lookGood: false,
    environmentReady: false,
  });

  // Handle permission request for video and audio
  const handlePermissionRequest = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setPermissionsGranted(true);
      setCheckboxState((prev) => ({ ...prev, deviceReady: true }));
      stream.getTracks().forEach((track) => track.stop()); // Stop stream after permission
    } catch (error) {
      console.error("Permission denied or error:", error);
      setPermissionsGranted(false);
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxState((prev) => ({ ...prev, [name]: checked }));
  };

  // Check if all checkboxes are checked
  const isStartInterviewEnabled =
    permissionsGranted &&
    checkboxState.deviceReady &&
    checkboxState.lookGood &&
    checkboxState.environmentReady;

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="p-[28px] font-[Outfit] flex flex-col justify-center sm:mt-[50px] mt-0 items-center w-full">
          <div className="w-full flex flex-col items-center justify-center m-auto py-[26px] px-[24px]">
            <img src="/images/start/item7.svg" alt="" />
            <p className="font-[400] text-[24px] leading-[30.24px] text-[#000000]">
              The system and settings check has been successfully completed!
            </p>
            <div className="flex mt-[46px] flex-col gap-[20px]">
              <div className="flex items-center gap-[16px]">
                <input
                  type="checkbox"
                  name="deviceReady"
                  checked={checkboxState.deviceReady}
                  onChange={(e) => {
                    if (!permissionsGranted) handlePermissionRequest();
                  }}
                />
                <p className="font-[400] text-[16px] leading-[20.16px] text-[#000000]">
                  Your video and audio devices are ready
                </p>
              </div>
              <div className="flex items-center gap-[16px]">
                <input
                  type="checkbox"
                  name="lookGood"
                  checked={checkboxState.lookGood}
                  onChange={handleCheckboxChange}
                  disabled={!permissionsGranted}
                />
                <p className="font-[400] text-[16px] leading-[20.16px] text-[#000000]">
                  Make sure you look good and tidy,
                </p>
              </div>
              <div className="flex items-center gap-[16px]">
                <input
                  type="checkbox"
                  name="environmentReady"
                  checked={checkboxState.environmentReady}
                  onChange={handleCheckboxChange}
                  disabled={!permissionsGranted}
                />
                <p className="font-[400] text-[16px] leading-[20.16px] text-[#000000]">
                  Make sure you choose the right environment.
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col gap-[16px] justify-center mt-[82px] ">
              <button
                onClick={() => navigate(`/blank/start-interview/${id}`)}
                className={`w-[294px] h-[54px] flex items-center gap-[12px] text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] rounded-[5px] justify-center ${
                  isStartInterviewEnabled ? "" : "opacity-50 cursor-not-allowed"
                }`}
                disabled={!isStartInterviewEnabled}
              >
                Start interview <img src="/images/start/item8.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ISetting;
