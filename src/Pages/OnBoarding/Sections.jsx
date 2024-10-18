import { useState } from "react";
import { LinearProgress } from "@mui/material";

const Sections = ({ loading, OnBoarding, updateOnboarding }) => {
  const [activeSection, setActiveSection] = useState(null);
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen  flex justify-center items-start p-5">
        <div className="w-full max-w-5xl p-5">
          {/* <LinearProgress className="min-w-[100vw]"/> */}
          {/* Section 1: Offer Review */}
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
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition">
                View Offer Letter
              </button>
              <p className="mt-3 text-gray-600">
                <b>Status:</b> Offer Accepted / Pending
              </p>
              <p className="mt-3 text-gray-700">
                "If offer letter is acceptable, sign and upload it here."
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition">
                Upload
              </button>
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
                  value="John Doe"
                  disabled
                />
                <label className="text-gray-600">
                  <b>Contact Information</b>
                </label>
                <p className="text-gray-500">
                  (Confirm your phone number and email.)
                </p>
                <input
                  type="text"
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                  placeholder="Email Address"
                />
                <label className="text-gray-600">
                  <b>Residential Address</b>
                </label>
                <p className="text-gray-500">
                  (Provide your current address for official communication.)
                </p>
                <textarea
                  className="w-full p-3 mb-3 rounded-md border border-gray-300"
                  placeholder="Your address here"
                />
                <label className="text-gray-600">
                  <b>Emergency Contact</b>
                </label>
                <p className="text-gray-500">
                  (Enter emergency contact information.)
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
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition">
                  Sign Contract
                </button>
                <label className="mt-5 text-gray-600">
                  <b>Tax Documents</b>
                </label>
                <p className="text-gray-500">
                  (Upload your completed tax documents.)
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition">
                  Upload
                </button>
                <label className="mt-5 text-gray-600">
                  <b>ID Proof</b>
                </label>
                <p className="text-gray-500">
                  (Upload your ID proof (e.g., Passport, Driver's License).)
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700 transition">
                  Upload
                </button>
                <label className="mt-5 text-gray-600">
                  <b>Bank Details</b>
                </label>
                <p className="text-gray-500">
                  (Provide your bank details for salary deposits.)
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
                <button className="bg-blue-600 text-white p-2 rounded-lg">
                  Submit Onboarding Form
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections;
