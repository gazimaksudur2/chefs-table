import PropTypes from 'prop-types';
import { useState } from 'react';
import Cooking from './Cooking';
import WantCook from './WantCook';

const Accounts = ({toCook, removeFromCook, showToast}) => {
    const [toPrepare, setToPrepare] = useState([]);

    const handleToPrepare = (item)=>{
        // console.log("to prepare clicked"+item.recipe_id);
        // console.log(!(toPrepare.includes(item)))
        (toPrepare.includes(item)) && (showToast(true, 'Already Cooking'));
        (toPrepare.includes(item)) || setToPrepare([...toPrepare, item]);
        (toPrepare.includes(item)) || removeFromCook(item);
        console.log(toPrepare);
    }
      
    return (
        <div className="card accounts w-5/12 bg-base-100 shadow-2xl outline-2 outline-gray-400">
            <WantCook toCook={toCook} handleToPrepare={handleToPrepare}></WantCook>
            <Cooking toPrepare={toPrepare}></Cooking>
        </div>
    );
};

Accounts.propTypes = {
    toCook: PropTypes.array,
    removeFromCook: PropTypes.func,
    showToast: PropTypes.func
};

export default Accounts;