import { useState } from "react";
import { Modal, LinearProgress } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Import checkmark icon

const Sections = ({ loading, OnBoarding, updateOnboarding }) => {
  // console.log(OnBoarding);
  const [activeSection, setActiveSection] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    contactInformation: "",
    residentialAddress: "",
    email: "",
    emergencyName: "",
    emergencyRelationship: "",
    emergencyPhone: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    employmentContract: null,
    taxDocuments: null,
    aadharCard: null,
    panCard: null,
    salarySlip: null,
    bankStatement: null,
  });
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const triggerFileInput = (name) => {
    document.getElementById(name).click();
  };

  const handleSubmit = () => {
    console.log("Submitted Data: ", formData);
    closeModal();
  };

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-start min-h-[180vh] p-5 font-[poppins]">
        <div className="w-full max-w-5xl p-5">
          {/* <LinearProgress className="min-w-[100vw]"/> */}
          <h2 className="text-center mb-2 text-3xl">OnBoarding Process </h2>
          <h2 className="text-center mb-5 text-xl">
            Job : {OnBoarding?.JobId?.positionName} at:{" "}
            {OnBoarding?.JobId?.companyName}{" "}
          </h2>
          <div className="bg-white p-5 mb-5 rounded-lg shadow-md border-l-4 border-blue-200 transition duration-400 ease-in-out">
            <div
              className="flex items-center justify-between text-xl font-semibold text-blue-700 cursor-pointer transition duration-300 ease-in-out hover:text-blue-800"
              onClick={() => toggleSection("offerReview")}
            >
              <div>
                <i className="fas fa-file-alt mr-2"></i>Offer Review (Check &
                Chat)
              </div>
              <div className="w-1/5 h-1 bg-gray-300 relative ml-10">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div
              className={`mt-5 transition-all duration-500 ease-in-out overflow-hidden ${activeSection === "offerReview" ? "max-h-96" : "max-h-0"}`}
            >
              <p className="text-gray-700">
                "Review your offer letter. You can check the details and reach
                out via chat for any questions."
              </p>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition cursor-pointer"
                onClick={openModal}
              >
                View Offer Letter
              </button>
              <p className="mt-3 text-gray-600">
                <b>Status:</b> Offer Accepted / Pending
              </p>
              <p className="mt-3 text-gray-700">
                "If offer letter is acceptable, sign and upload it here."
              </p>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition"
                onClick={() => triggerFileInput("employmentContract")}
              >
                Upload
              </button>
              {OnBoarding?.employmentContract && (
                <CheckCircleIcon className="text-green-500 ml-2" />
              )}
              <input
                type="file"
                id="employmentContract"
                name="employmentContract"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Section 2: Personal Information */}
          <div className="bg-white p-5 mb-5 rounded-lg shadow-md border-l-4 border-blue-200 transition duration-300 ease-in">
            <div
              className="flex items-center justify-between text-xl font-semibold text-blue-700 cursor-pointer transition duration-300 ease-in-out hover:text-blue-800"
              onClick={() => toggleSection("personalInfo")}
            >
              <div>
                <i className="fas fa-user mr-2"></i>Personal Information
              </div>
              <div className="w-1/5 h-1 bg-gray-300 relative ml-10">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            {activeSection === "personalInfo" && (
              <div className="mt-5 transition-all duration-500 ease-in-out">
                <label className="text-gray-600">
                  <b>Full Name</b>
                </label>
                <p className="text-gray-500">
                  (Auto-filled from your application.)
                </p>
                <input
                  type="text"
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                  placeholder="John Doe"
                  name="fullName"
                  onChange={handleChange}
                />
                <label className="text-gray-600">
                  <b>contactInformation Information</b>
                </label>
                <p className="text-gray-500">
                  (Confirm your phone number and email.)
                </p>
                <input
                  type="text"
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                  placeholder="Phone Number"
                  name="contactInformationInfo"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Email residentialAddress"
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                />
                <b>Residential residentialAddress</b>
                <label className="text-gray-600"></label>
                (Provide your current residentialAddress for official
                <p className="text-gray-500">communication.)</p>
                <textarea
                  placeholder="Your residentialAddress here"
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                />
                <label className="text-gray-600">
                  <b>Emergency contactInformation</b>
                </label>
                <p className="text-gray-500">
                  (Enter emergency contactInformation information.)
                </p>
                <input
                  type="text"
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                  placeholder="Relationship"
                />
                <input
                  type="text"
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                  placeholder="Phone Number"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition">
                  Save & Continue
                </button>
              </div>
            )}
          </div>

          {/* Section 3: Upload Documents */}
          <div className="bg-white p-5 mb-5 rounded-lg shadow-md border-l-4 border-blue-200 transition duration-300 ease-in">
            <div
              className="flex items-center justify-between text-xl font-semibold text-blue-700 cursor-pointer transition duration-300 ease-in-out hover:text-blue-800"
              onClick={() => toggleSection("uploadDocuments")}
            >
              <div>
                <i className="fas fa-upload mr-2"></i>Upload Documents
              </div>
              <div className="w-1/5 h-1 bg-gray-300 relative ml-10">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            {activeSection === "uploadDocuments" && (
              <div className="mt-5 transition-all duration-500 ease-in-out">
                <label className="text-gray-600">
                  <b>Employment Contract</b>
                </label>
                <p className="text-gray-500">
                  (Please review and sign your employment contract.)
                </p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition"
                  onClick={() => triggerFileInput("employmentContract")}
                >
                  Sign Contract
                </button>
                {formData.employmentContract && (
                  <CheckCircleIcon className="text-green-500 ml-2" />
                )}
                <label className="mt-5 text-gray-600"></label>
                <p className="text-gray-500">
                  (Upload your completed tax documents.)
                </p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition"
                  onClick={() => triggerFileInput("aadharCard")}
                >
                  Upload
                </button>
                {formData.aadharCard && (
                  <CheckCircleIcon className="text-green-500 ml-2" />
                )}
                <label className="mt-5 text-gray-600"></label>
                <p className="text-gray-500">Upload your Aadhar Card.</p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition"
                  onClick={() => triggerFileInput("panCard")}
                >
                  Upload
                </button>
                {formData.panCard && (
                  <CheckCircleIcon className="text-green-500 ml-2" />
                )}
                <label className="mt-5 text-gray-600"></label>
                <p className="text-gray-500">Upload your Pan Card.</p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition"
                  onClick={() => triggerFileInput("bankStatement")}
                >
                  Upload
                </button>
                {formData.bankStatement && (
                  <CheckCircleIcon className="text-green-500 ml-2" />
                )}
                <label className="mt-5 text-gray-600"></label>
                <p className="text-gray-500">Upload your Bank Statement.</p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition"
                  onClick={() => triggerFileInput("salarySlip")}
                >
                  Upload
                </button>
                {formData.salarySlip && (
                  <CheckCircleIcon className="text-green-500 ml-2" />
                )}
                <label className="mt-5 text-gray-600"></label>
                <p className="text-gray-500">Upload your Salary Slip.</p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition"
                  onClick={() => triggerFileInput("bankDoc")}
                >
                  Upload
                </button>
                {formData.bankDoc && (
                  <CheckCircleIcon className="text-green-500 ml-2" />
                )}
                <label className="mt-5 text-gray-600"></label>
                <p className="text-gray-500">
                  (Provide your bank Passbook or cancel check for salary
                  deposits.)
                </p>
                <input
                  type="text"
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                  placeholder="Bank Name"
                />
                <input
                  type="text"
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                  placeholder="Account Number"
                />
                <input
                  type="text"
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                  placeholder="IFSC Code"
                />
                <input
                  type="file"
                  id="employmentContract"
                  name="employmentContract"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <input
                  type="file"
                  id="aadharCard"
                  name="aadharCard"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <input
                  type="file"
                  id="panCard"
                  name="panCard"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <input
                  type="file"
                  id="bankDoc"
                  name="bankDoc"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <input
                  type="file"
                  id="bankStatement"
                  name="bankStatement"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <input
                  type="file"
                  id="salarySlip"
                  name="salarySlip"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition">
                  Save & Continue
                </button>
              </div>
            )}
          </div>

          {/* Section 4: Training & Orientation */}
          <div className="bg-white p-5 mb-5 rounded-lg shadow-md border-l-4 border-blue-200">
            <div
              className="flex items-center justify-between text-xl font-semibold text-blue-700 cursor-pointer transition duration-300 ease-in-out hover:text-blue-800"
              onClick={() => toggleSection("trainingOrientation")}
            >
              <div>
                <i className="fas fa-chalkboard-teacher mr-2"></i>Training &
                Orientation
              </div>
              <div className="w-1/5 h-1 bg-gray-300 relative ml-10">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
            {activeSection === "trainingOrientation" && (
              <div className="mt-5">
                <label>
                  <b>Team Introduction</b>
                </label>
                <p>
                  "Meet your team! Get familiar with your reporting manager and
                  team members."
                </p>
                <button className="bg-blue-600 text-white p-2 rounded-lg">
                  View Team
                </button>
                <label className="mt-5">
                  <b>Orientation Videos</b>
                </label>
                <p>
                  "Watch these mandatory orientation videos before your start
                  date."
                </p>
                <ul>
                  <li>
                    Company Overview <span>(Progress: In Progress)</span>
                  </li>
                  <li>
                    Role Responsibilities <span>(Progress: Completed)</span>
                  </li>
                </ul>
                <label className="mt-5">
                  <b>Company Policies & Rules</b>
                </label>
                <p>"Download and review the company policies."</p>
                <button className="bg-blue-600 text-white p-2 rounded-lg">
                  View Policies
                </button>
                <div className="mt-3 flex items-center">
                  <label>
                    I have read and understood the company policies.
                  </label>
                  <input type="checkbox" className="ml-2" />
                </div>
                <button className="bg-blue-600 text-white p-2 rounded-lg mt-3">
                  Save & Continue
                </button>
              </div>
            )}
          </div>

          {/* Section 5: Final Review & Confirmation */}
          <div className="bg-white p-5 mb-5 rounded-lg shadow-md border-l-4 border-blue-200">
            <div
              className="flex items-center justify-between text-xl font-semibold text-blue-700 cursor-pointer transition duration-300 ease-in-out hover:text-blue-800"
              onClick={() => toggleSection("finalReview")}
            >
              <div>
                <i className="fas fa-check-circle mr-2"></i>Final Review &
                Confirmation
              </div>
              <div className="w-1/5 h-1 bg-gray-300 relative ml-10">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            {activeSection === "finalReview" && (
              <div className="mt-5">
                <p>
                  "Review all the sections above to ensure everything is
                  complete and accurate."
                </p>
                <button
                  className="bg-blue-600 text-white p-2 rounded-lg"
                  onClick={handleSubmit}
                >
                  Submit Onboarding Form
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal open={modalOpen} onClose={closeModal}>
        <div className="bg-white p-10 w-full max-w-md mx-auto mt-20 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Viewing {activeSection}</h2>
          <button
            className="bg-blue-600 text-white p-2 rounded-lg mt-3"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Sections;
