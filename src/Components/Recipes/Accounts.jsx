import React from 'react';
import PropTypes from 'prop-types';
import WantCook from './WantCook';
import Cooking from './Cooking';

const Accounts = props => {
    return (
        <div className="card accounts w-5/12 bg-base-100 shadow-2xl outline-2 outline-gray-400">
            <WantCook></WantCook>
            <Cooking></Cooking>
        </div>
    );
};

Accounts.propTypes = {
    
};

export default Accounts;