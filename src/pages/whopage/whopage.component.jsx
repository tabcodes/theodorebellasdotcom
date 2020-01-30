import React from 'react';
import { Greeting } from '../homepage/homepage.styles';
import WhoContainer from '../../components/who-container/who-container.component';

const WhoPage = () => {
    return (
        <div className="who-container">
            <Greeting className="who"></Greeting>
            <WhoContainer />
        </div>
    );
};

export default WhoPage;