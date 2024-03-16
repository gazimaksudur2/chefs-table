import PropTypes from 'prop-types';
import WantCook from './WantCook';
import Cooking from './Cooking';
import { useState } from 'react';

const Accounts = ({toCook}) => {
    const [toPrepare, setToPrepare] = useState([]);

    const handleToPrepare = (item)=>{
        console.log("to prepare clicked");
        setToPrepare([...toPrepare, item]);
    }
    return (
        <div className="card accounts w-5/12 bg-base-100 shadow-2xl outline-2 outline-gray-400">
            <WantCook toCook={toCook} handleToPrepare={handleToPrepare}></WantCook>
            <Cooking ></Cooking>
        </div>
    );
};

Accounts.propTypes = {
    toCook: PropTypes.array
};

export default Accounts;