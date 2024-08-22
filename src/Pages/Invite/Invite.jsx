import React from 'react';
import InviteCard from './InviteCard';

  

const Invite = () => {

    const performers = [
        {
            id: 1,
            name: 'Mark S.',
            role: 'Comedian',
            availability: 'AVAILABLE',
            rating: 5.0,
            category: 'STAND-UP COMEDY',
            description: 'Winner of prestigious comedy competitions...',
            image: 'path_to_image1.jpg',
            isTopPerformer: true,
            web:'www.google.com'
          },
          {
            id: 2,
            name: 'Lisa J.',
            role: 'Musician',
            availability: 'BUSY',
            rating: 4.7,
            category: 'JAZZ',
            description: 'Award-winning jazz musician...',
            image: 'path_to_image2.jpg',
            isTopPerformer: false,
            web:'www.google.com'
          },
          {
            id: 3,
            name: 'Mark S.',
            role: 'Comedian',
            availability: 'AVAILABLE',
            rating: 5.0,
            category: 'STAND-UP COMEDY',
            description: 'Winner of prestigious comedy competitions...',
            image: 'path_to_image1.jpg',
            isTopPerformer: false,
            web:'www.google.com'
          },
          {
            id: 4,
            name: 'Lisa J.',
            role: 'Musician',
            availability: 'BUSY',
            rating: 4.7,
            category: 'JAZZ',
            description: 'Award-winning jazz musician...',
            image: 'path_to_image2.jpg',
            isTopPerformer: true,
            web:'www.google.com'
          },
          {
            id: 5,
            name: ' J.',
            role: 'Musician',
            availability: 'BUSY',
            rating: 4.7,
            category: 'JAZZ',
            description: 'Award-winning jazz musician...',
            image: 'path_to_image2.jpg',
            isTopPerformer: true,
            web:'www.google.com'
          },
          {
            id: 6,
            name: 'isa .',
            role: 'Musician',
            availability: 'BUSY',
            rating: 4.7,
            category: 'JAZZ',
            description: 'Award-winning jazz musician...',
            image: 'path_to_image2.jpg',
            isTopPerformer: false,
            web:'www.google.com'
          },
          {
            id: 7,
            name: 'Lia J.',
            role: 'Musician',
            availability: 'BUSY',
            rating: 4.7,
            category: 'JAZZ',
            description: 'Award-winning jazz musician...',
            image: 'path_to_image2.jpg',
            isTopPerformer: true,
            web:'www.google.com'
          },
          {
            id: 8,
            name: 'a J.',
            role: 'Musician',
            availability: 'BUSY',
            rating: 4.7,
            category: 'JAZZ',
            description: 'Award-winning jazz musician...',
            image: 'path_to_image2.jpg',
            isTopPerformer: false,
            web:'www.google.com'
          },
        // {
        //   id: 5,
        //   name: 'Lisa Jask',
        //   role: 'Musician',
        //   availability: 'BUSY',
        //   rating: 4.7,
        //   category: 'JAZZ',
        //   description: 'Award-winning jazz musician with a reputation for soulful performances.',
        //   image: 'path_to_image2.jpg'
        // },  
        // Add more performer objects here
      ];
    
      return (
        <div className=' bg-gray-100 min-h-screen'>
            <div className='flex flex-row justify-between ml-4 mt-2'>
                <div>
                    <p className=' text-2xl font-semibold'>Talent Booking</p>
                    <p>Find comedians by availability, ratings, and past performance success .</p>
                </div>
                <div className='flex gap-4 mr-4 items-center'>
                    <button className=' p-2 h-10 items-center border-[1.5px] border-black'>Contract</button>
                    <button className=' p-2 h-10 items-center border-[1.5px] border-black'>Book</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-start  p-4">
                {performers.map((performer) => (
                    <InviteCard key={performer.id} performer={performer} />
                ))}
            </div>
        </div>
      );
    };

export default Invite;
