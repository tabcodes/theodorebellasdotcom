import React from 'react';
import './greeting.styles.scss'


const Greeting = ({children}) => {
    return (
        <div className="greeting">
            {children}
        </div>
    );
};

export default Greeting;