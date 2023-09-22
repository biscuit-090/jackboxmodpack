import React, { useState, useEffect } from 'react';
import './Components.css';

interface NotificationProps {
    text: string;
}

const Notification: React.FC<NotificationProps> = ({ text }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        return () => {
            clearTimeout(timer);
            setIsVisible(true);
        };
    }, []);

    return isVisible ? 
    <div className="notification">
        <p>{text}</p>
    </div> 
    : null;
}

export default Notification;
