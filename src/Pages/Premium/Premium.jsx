import React, { useState } from "react";
import Modal from "react-modal";
import QRCode from "qrcode.react";
import { PostApi } from "../utilis/Api_Calling";

// Dummy data for subscription plans
const subscriptionPlans = [
  {
    plan: "Silver",
    price: 10,
    services: [
      {
        title: "Resume Review",
        description:
          "Professional resume review and feedback to improve your chances of landing a job.",
      },
      {
        title: "Cover Letter Writing",
        description:
          "Customized cover letter writing services tailored to specific job applications.",
      },
      {
        title: "Job Alerts",
        description:
          "Personalized job alerts based on your preferences and skills.",
      },
    ],
    subscribed: false,
  },
  {
    plan: "Gold",
    price: 20,
    services: [
      {
        title: "Career Coaching",
        description:
          "One-on-one career coaching sessions to help you navigate your career path.",
      },
      {
        title: "LinkedIn Profile Optimization",
        description:
          "Optimization of your LinkedIn profile to attract recruiters and hiring managers.",
      },
      {
        title: "Exclusive Job Listings",
        description:
          "Access to exclusive job listings not available on public job boards.",
      },
    ],
    subscribed: true,
  },
  {
    plan: "Platinum",
    price: 30,
    services: [
      {
        title: "Interview Preparation",
        description:
          "Mock interviews and interview preparation sessions with industry experts.",
      },
      {
        title: "Salary Negotiation",
        description:
          "Guidance and strategies for effective salary negotiation.",
      },
      {
        title: "Priority Support",
        description:
          "Priority customer support with dedicated account managers.",
      },
    ],
    subscribed: false,
  },
];

const SubscriptionCard = ({
  plan,
  price,
  services,
  subscribed,
  onSubscribe,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 m-2">
      <div className="bg-blue-500 text-white text-sm font-bold p-4">{plan}</div>
      <div className="p-6">
        <p className="text-xl font-bold">${price}/month</p>
        <ul className="mt-4 space-y-4">
          {services.map((service, index) => (
            <li key={index} className="border border-gray-200 p-2 rounded-lg">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-700 mt-1 text-sm">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
        <button
          className={`mt-4 w-full text-white font-bold py-1 px-2 text-sm rounded ${
            subscribed ? "bg-green-500" : "bg-blue-500"
          }`}
          onClick={() => onSubscribe(plan)}
        >
          {subscribed ? "Renew" : "Subscribe"}
        </button>
      </div>
    </div>
  );
};

const subscribe = async () => {
  let data = {
    name: "123",
  };
  let res = await PostApi("api/subscriptionRoutes/student", data);
  console.log(res);
};

const Premium = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-2xl mb-8">Our Premium Subscription Plans</h1>
      <div className="flex flex-wrap justify-center w-full">
        {subscriptionPlans.map((plan, index) => (
          <SubscriptionCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            services={plan.services}
            subscribed={plan.subscribed}
            onSubscribe={openModal}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Payment Modal"
        className="flex justify-center items-center bg-white rounded-lg p-8 shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {selectedPlan && (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">
              Pay for {selectedPlan.plan} Plan
            </h2>
            <QRCode value={`Pay for ${selectedPlan.plan} Plan`} size={256} />
            <button
              className="mt-4 bg-blue-500 text-white font-bold  px-4 rounded"
              onClick={subscribe}
            >
              Done
            </button>
            <button
              className="mt-4 bg-red-500 text-white font-bold ml-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Premium;
