import PropTypes from 'prop-types';
import { useState } from 'react';
import Cooking from './Cooking';
import WantCook from './WantCook';

const Accounts = ({toCook, removeFromCook, showWarningToast}) => {
    const [toPrepare, setToPrepare] = useState([]);

    const handleToPrepare = (item)=>{
        // console.log("to prepare clicked"+item.recipe_id);
        // console.log(!(toPrepare.includes(item)))
        (toPrepare.includes(item)) && (showWarningToast(true, 'Already Cooking'));
        (toPrepare.includes(item)) || setToPrepare([...toPrepare, item]);
        (toPrepare.includes(item)) || removeFromCook(item);
        // console.log(toPrepare);
    }

    const handlePrepared = (item)=>{
        setToPrepare(toPrepare.filter(element=>element!==item));
    }
      
    return (
        <div id='accounts' className="card accounts w-full md:w-5/12 bg-base-100 shadow-2xl outline-2 outline-gray-400">
            <WantCook toCook={toCook} handleToPrepare={handleToPrepare}></WantCook>
            <Cooking toPrepare={toPrepare} handlePrepared={handlePrepared}></Cooking>
        </div>
    );
};

Accounts.propTypes = {
    toCook: PropTypes.array,
    removeFromCook: PropTypes.func,
    showWarningToast: PropTypes.func
};

export default Accounts;