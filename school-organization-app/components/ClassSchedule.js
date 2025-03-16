import React from 'react';

import { useEffect, useState } from 'react';
import { db } from '../services/firebaseConfig'; // Import Firebase configuration

const ClassSchedule = () => {
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const fetchSchedule = async () => {
            const scheduleData = [];
            const snapshot = await db.collection('classSchedule').get();
            snapshot.forEach(doc => {
                scheduleData.push({ id: doc.id, ...doc.data() });
            });
            setSchedule(scheduleData);
        };

        fetchSchedule();
    }, []);

    return (
        <div>
            <h2>Class Schedule</h2>
            {/* Class schedule will be displayed here */}
        </div>
    );
};

export default ClassSchedule;
