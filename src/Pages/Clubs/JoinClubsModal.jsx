import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { FiAlertCircle } from "react-icons/fi";
import { PiCodeLight } from "react-icons/pi";
import { Link } from "react-router-dom";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const JoinClubsModal = ({ onOpen, onClose }) => {
  return (
    <>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={onOpen}
        maxWidth={"md"}
      >
        <DialogTitle
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#000",
            textAlign: "center",
          }}
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          Join clubs you are intested in
          <div className="bg-[#eafcff] flex flex-col md:flex-row items-center gap-[15px] p-[20px] mt-[14px] rounded-[8px] border-[1px] border-[#00dbff] w-full text-[#00dbff] text-[14px] font-[400]">
            <FiAlertCircle size={18} color="#00dbff" />
            <p>
              We have selcted a few clubs based on your preferences on
              Intershala
            </p>
          </div>
        </DialogTitle>

        <DialogContent>
          <div className="bg-[#fafbff] mb-[43px] flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-[10px] rounded-[16px] py-[14px] px-[16px]">
            <div className="bg-[#fff] flex flex-col justify-center shadow-sm items-center w-[182px] h-[208px] rounded-[16px]">
              <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#fd7b01]">
                <PiCodeLight color="white" size={25} />
                <div className="text-white mt-[-15px]">---</div>
                <div className="text-white mt-[-19px]">---</div>
              </div>
              <p className="text-[18px] mt-[13px] font-[500]">Coding Club</p>
              <p className="text-[14px] font-[400] text-[#545454]">
                586381 members
              </p>
              <Link 
              to="/blank/JoinedClubs"
              className="bg-[#4234a2] flex items-center justify-center text-white rounded-[30px] w-[166px] h-[34px] mt-[33px] ">
                Joined
              </Link>
            </div>
            <div className="bg-[#fff] flex flex-col justify-center shadow-sm items-center w-[182px] h-[208px] rounded-[16px]">
              <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#460e89]">
                <img
                  src="/images/graph-chart-2-svgrepo-com 1.svg"
                  className="w-[27.43px] h-[27.43px]"
                  alt=""
                />
              </div>
              <p className="text-[18px] mt-[13px] font-[500]">Data & Al Club</p>
              <p className="text-[14px] font-[400] text-[#545454]">
                586381 members
              </p>
              <button className="bg-[#4234a2] text-white rounded-[30px] w-[166px] h-[34px] mt-[33px] ">
                Joined
              </button>
            </div>
            <div className="bg-[#fff] flex flex-col justify-center shadow-sm items-center w-[182px] h-[208px] rounded-[16px]">
              <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#005417]">
                <img
                  src="/images/pen-tool-2-svgrepo-com (2) 2.svg"
                  className="w-[27.43px] h-[27.43px]"
                  alt=""
                />
              </div>
              <p className="text-[18px] mt-[13px] font-[500]">Design Club</p>
              <p className="text-[14px] font-[400] text-[#545454]">
                586381 members
              </p>
              <button className="bg-[#4234a2] text-white rounded-[30px] w-[166px] h-[34px] mt-[33px] ">
                Joined
              </button>
            </div>
            <div className="bg-[#fff] flex flex-col justify-center shadow-sm items-center w-[182px] h-[208px] rounded-[16px]">
              <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#00752e]">
                <img
                  src="/images/writing-note-svgrepo-com 1.svg"
                  className="w-[27.43px] h-[27.43px]"
                  alt=""
                />
              </div>
              <p className="text-[18px] mt-[13px] font-[500]">Writing Club</p>
              <p className="text-[14px] font-[400] text-[#545454]">
                586381 members
              </p>
              <button className="bg-[#4234a2] text-white rounded-[30px] w-[166px] h-[34px] mt-[33px] ">
                Joined
              </button>
            </div>
            <div className="bg-[#fff] flex flex-col justify-center shadow-sm items-center w-[182px] h-[208px] rounded-[16px]">
              <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#7c0046]">
                <img
                  src="/images/graph-chart-2-svgrepo-com 1.svg"
                  className="w-[27.43px] h-[27.43px]"
                  alt=""
                />
              </div>
              <p className="text-[18px] mt-[13px] font-[500]">Business Club</p>
              <p className="text-[14px] font-[400] text-[#545454]">
                586381 members
              </p>
              <button className="bg-[#4234a2] text-white rounded-[30px] w-[166px] h-[34px] mt-[33px] ">
                Joined
              </button>
            </div>
            <div className="bg-[#fff] flex flex-col justify-center shadow-sm items-center w-[182px] h-[208px] rounded-[16px]">
              <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#00527c]">
                <div className=" flex items-center flex-col justify-center">
                  <img src="/images/briefTop.svg" className=" " alt="" />
                  <img src="/images/briefUpper.svg" className=" " alt="" />
                  <img
                    src="/images/briefLower.svg"
                    className=" mt-[-5px]"
                    alt=""
                  />
                  <img
                    src="/images/noteBlank.svg"
                    className=" mr-[-20px] mt-[-5px] "
                    alt=""
                  />
                </div>
              </div>
              <p className="text-[18px] mt-[13px] font-[500]">Placement Club</p>
              <p className="text-[14px] font-[400] text-[#545454]">
                586381 members
              </p>
              <button className="bg-[#4234a2] text-white rounded-[30px] w-[166px] h-[34px] mt-[33px] ">
                Joined
              </button>
            </div>
            <div className="bg-[#fff] flex flex-col justify-center shadow-sm items-center w-[182px] h-[208px] rounded-[16px]">
              <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#740683]">
                <img
                  src="/images/college-svgrepo-com 1.svg"
                  className="w-[27.43px] h-[27.43px]"
                  alt=""
                />
              </div>
              <p className="text-[18px] mt-[13px] font-[500]">College Life</p>
              <p className="text-[14px] font-[400] text-[#545454]">
                586381 members
              </p>
              <button className="bg-[#4234a2] text-white rounded-[30px] w-[166px] h-[34px] mt-[33px] ">
                Joined
              </button>
            </div>
            <div className="bg-[#fff] flex flex-col justify-center shadow-sm items-center w-[182px] h-[208px] rounded-[16px]">
              <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#f76800]">
                <img
                  src="/images/growth-svgrepo-com 1.svg"
                  className="w-[27.43px] h-[27.43px]"
                  alt=""
                />
              </div>
              <p className="text-[18px] mt-[13px] font-[500]">
                Personal Growth
              </p>
              <p className="text-[14px] font-[400] text-[#545454]">
                586381 members
              </p>
              <button className="bg-[#4234a2] text-white rounded-[30px] w-[166px] h-[34px] mt-[33px] ">
                Joined
              </button>
            </div>
            <div className="bg-[#fff] flex flex-col justify-center shadow-sm items-center w-[182px] h-[208px] rounded-[16px]">
              <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#2ba600]">
                <img
                  src="/images/finance-markting-money-coin-dollar-molecule-svgrepo-com 1.svg"
                  className="w-[27.43px] h-[27.43px]"
                  alt=""
                />
              </div>
              <p className="text-[18px] mt-[13px] font-[500]">
                Personal Finance
              </p>
              <p className="text-[14px] font-[400] text-[#545454]">
                586381 members
              </p>
              <button className="bg-[#4234a2] text-white rounded-[30px] w-[166px] h-[34px] mt-[33px] ">
                Joined
              </button>
            </div>
            <div className="bg-[#fff] flex flex-col justify-center shadow-sm items-center w-[182px] h-[208px] rounded-[16px]">
              <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#5f3eef]">
                <img
                  src="/images/degree-diploma-svgrepo-com 1.svg"
                  className="w-[27.43px] h-[27.43px]"
                  alt=""
                />
              </div>
              <p className="text-[18px] mt-[13px] font-[500]">
                Higher Studies Club
              </p>
              <p className="text-[14px] font-[400] text-[#545454]">
                586381 members
              </p>
              <button className="bg-[#4234a2] text-white rounded-[30px] w-[166px] h-[34px] mt-[33px] ">
                Joined
              </button>
            </div>
            <div className="bg-[#fff] flex flex-col justify-center shadow-sm items-center w-[182px] h-[208px] rounded-[16px]">
              <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#ed7300]">
                <img
                  src="/images/government.svg"
                  className="w-[27.43px] h-[27.43px]"
                  alt=""
                />
              </div>
              <p className="text-[18px] mt-[13px] font-[500]">
                Government Exams
              </p>
              <p className="text-[14px] font-[400] text-[#545454]">
                586381 members
              </p>
              <button className="bg-[#4234a2] text-white rounded-[30px] w-[166px] h-[34px] mt-[33px] ">
                Joined
              </button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div className="flex justify-center items-center w-full">
            <Button
              onClick={onClose}
              style={{
                background: "#4234a2",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "400",
                width: "133px",
                height: "41px",
                borderRadius: "30px",
                // marginBottom:"34px",
              }}
            >
              Done
            </Button>
          </div>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default JoinClubsModal;
