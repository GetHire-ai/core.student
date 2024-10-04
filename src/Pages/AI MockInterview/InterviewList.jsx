import React, { useEffect, useState } from 'react';
import InterviewItemCard from './InterviewItemCard';

const dummyInterviewData = [
    {
        mockId: "1",
        jobPosition: "Full Stack Developer",
        jobExperience: "5",
        createdAt: "04-10-2024",
    },
    {
        mockId: "2",
        jobPosition: "Data Scientist",
        jobExperience: "3",
        createdAt: "01-09-2024",
    },
];

function InterviewList() {
    const [interviewList, setInterviewList] = useState([]);

    useEffect(() => {
        setInterviewList(dummyInterviewData); // Set dummy data
    }, []);

    return (
        <div>
            <h2 className='font-medium text-xl'>Previous AI Mock Interview</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
                {interviewList.map((interview, index) => (
                    <InterviewItemCard interview={interview} key={index} />
                ))}
            </div>
        </div>
    );
}

export default InterviewList;
