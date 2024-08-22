import React, { useState } from 'react';
import InviteModal from './InviteModal';

import { FaCalendar } from "react-icons/fa";

const InviteCard = ({ performer }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

   // Conditional class for top performer
   const cardClass = performer.isTopPerformer 
   ? 'bg-gray-800 text-white'
   : 'bg-white text-black';

  return (
    <div className={`${cardClass} text-white rounded-lg p-4 w-80 m-4 shadow-lg relative hover:scale-105 duration-300`}>
      <div className="flex items-center">
        <img 
          src={performer.image} 
          alt={performer.name} 
          className="w-12 h-12 rounded-full mr-4" 
        />
        {performer.isTopPerformer ?  
        <div>
          <div className="text-lg font-semibold">{performer.name}</div>
          <div className=' flex gap-20'>
             <div className="text-sm text-gray-400">{performer.role}</div>
             <div className='text-sm text-gray-400 hover:cursor-pointer'>website ↗</div>
          </div>
        </div> :
          <div >
             <div className="text-lg text-black font-semibold">{performer.name}</div>
             <div className=' flex gap-20'>
                <div className="text-sm text-black text-gray-400">{performer.role}</div>
                <div className='text-sm text-gray-400 hover:cursor-pointer'>{performer.web}</div>
             </div>
        </div> 
        }
      </div>
      {performer.isTopPerformer ? 
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-full">
           🔥 HOT PERFORMER
        </div> :
        <div></div>
      }
      <div className="flex items-center space-x-2 my-4">
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${performer.availability === 'AVAILABLE' ? 'bg-green-600' : 'bg-gray-600'}`}>
          {performer.availability}
        </span>
        <span className="text-xs font-semibold bg-yellow-600 px-2 py-1 rounded-full">
          ⭐ {performer.rating}
        </span>
        <span className="text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">
          {performer.category}
        </span>
      </div>
      <p className="text-gray-400 text-sm">
        {performer.description}
      </p>
      <a 
        onClick={openModal}
        className="cursor-pointer text-blue-400 text-sm underline mt-2 block"
      >
        More Info ↗
      </a>
        
      <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 rounded-lg flex items-center justify-center space-x-2 shadow-lg transition duration-200">
        <FaCalendar className="w-4 h-4" />
        <span>Book</span>
     </button>
  

      <InviteModal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        performer={performer} 
      />
    </div>

  );
};

export default InviteCard;
