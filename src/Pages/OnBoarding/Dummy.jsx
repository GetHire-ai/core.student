import React from "react";

const Dummy = () => {
  return (
    <div className="w-full max-w-screen-lg p-5">
      <div
        className="bg-white p-5 mb-5 rounded-lg shadow-lg border-l-4 border-blue-200 accordion"
        id="offerReviewAccordion"
      >
        <div
          className="flex items-center justify-between text-lg font-bold text-blue-600 cursor-pointer"
          data-bs-toggle="collapse"
          data-bs-target="#offerReview"
          aria-expanded="true"
          aria-controls="offerReview"
        >
          <i className="fas fa-file-alt mr-2 text-2xl"></i>
          Offer Review (Check & Chat)
          <div className="w-1/5 h-1 bg-gray-300 rounded ml-20 relative">
            <div className="w-2/5 h-full bg-green-500 rounded"></div>
          </div>
        </div>
        <div
          id="offerReview"
          className="accordion-collapse collapse show"
          data-bs-parent="#offerReviewAccordion"
        >
          <br />
          <label htmlFor="offerLetterReview" className="font-bold">
            Offer Letter Review
          </label>
          <p>
            "Review your offer letter. You can check the details and reach out
            via chat for any questions."
          </p>
          <button
            type="button"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-400"
          >
            View Offer Letter
          </button>
          <p className="mt-2 font-bold">Status: Offer Accepted / Pending</p>
        </div>
        <label htmlFor="offerLetterReview" className="font-bold">
          Offer Letter Acceptance
        </label>
        <p>"If offer letter is acceptable, sign and upload it here."</p>
        <button
          type="button"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-400"
        >
          Upload
        </button>
      </div>

      <div
        className="bg-white p-5 mb-5 rounded-lg shadow-lg border-l-4 border-blue-200 accordion"
        id="personalInfoAccordion"
      >
        <div
          className="flex items-center justify-between text-lg font-bold text-blue-600 cursor-pointer"
          data-bs-toggle="collapse"
          data-bs-target="#personalInfo"
          aria-expanded="true"
          aria-controls="personalInfo"
        >
          <i className="fas fa-user mr-2 text-2xl"></i>
          Personal Information
          <div className="w-1/5 h-1 bg-gray-300 rounded ml-20 relative">
            <div className="w-2/5 h-full bg-green-500 rounded"></div>
          </div>
        </div>
        <div
          id="personalInfo"
          className="accordion-collapse collapse"
          data-bs-parent="#personalInfoAccordion"
        >
          <br />
          <label htmlFor="fullName" className="font-bold">
            Full Name
          </label>
          <p>(Auto-filled from your application.)</p>
          <input
            type="text"
            id="fullName"
            value="John Doe"
            disabled
            className="rounded border border-gray-300 p-2 mb-3 text-lg w-1/2"
          />
          <br />
          <label htmlFor="contactInfo" className="font-bold">
            Contact Information
          </label>
          <p>(Confirm your phone number and email.)</p>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Phone Number"
            className="rounded border border-gray-300 p-2 mb-3 text-lg w-1/2"
          />
          <input
            type="text"
            id="emailAddress"
            placeholder="Email Address"
            className="rounded border border-gray-300 p-2 mb-3 text-lg w-1/2"
          />
          <br />

          <label htmlFor="address" className="font-bold">
            Residential Address
          </label>
          <p>(Provide your current address for official communication.)</p>
          <textarea
            id="address"
            placeholder="Your address here"
            className="rounded border border-gray-300 p-2 mb-3 text-lg w-1/2"
          ></textarea>
          <br />

          <label htmlFor="emergencyContact" className="font-bold">
            Emergency Contact
          </label>
          <p>(Enter emergency contact information.)</p>
          <input
            type="text"
            id="emergencyContactName"
            placeholder="Name"
            className="rounded border border-gray-300 p-2 mb-3 text-lg w-1/2"
          />
          <input
            type="text"
            id="emergencyContactRelationship"
            placeholder="Relationship"
            className="rounded border border-gray-300 p-2 mb-3 text-lg w-1/2"
          />
          <input
            type="text"
            id="emergencyContactPhone"
            placeholder="Phone Number"
            className="rounded border border-gray-300 p-2 mb-3 text-lg w-1/2"
          />
          <br />
          <a href="#">
            <button
              type="button"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-400"
            >
              Save & Continue
            </button>
          </a>
        </div>
      </div>

      {/* Similar changes for the rest of the sections */}
    </div>
  );
};

export default Dummy;
