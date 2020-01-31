import React from 'react';
import HowContainer from '../../components/how-container/how-container.component';
import Greeting from '../../components/greeting/greeting.component';


const WhoPage = () => {
    return (
        <div className="how-container">
            <Greeting>How?</Greeting>
            <HowContainer />
        </div>
    );
};

export default WhoPage;