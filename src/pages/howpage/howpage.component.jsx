import React from 'react';
import { Greeting } from '../homepage/homepage.styles';
import HowContainer from '../../components/how-container/how-container.component';
const WhoPage = () => {
    return (
        <div className="how-container">
            <Greeting className="how" />
            <HowContainer />
        </div>
    );
};

export default WhoPage;