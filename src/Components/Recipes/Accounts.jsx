import PropTypes from 'prop-types';
import Cooking from './Cooking';
import WantCook from './WantCook';

const Accounts = ({toCook, toPrepare, handleToPrepare, handleCooking}) => {
    // console.log(toCook);
    return (
        <div id='accounts' className="card accounts w-full md:w-5/12 bg-base-100 shadow-2xl outline-2 outline-gray-400">
            <WantCook toCook={toCook} handleToPrepare={handleToPrepare}></WantCook>
            <Cooking toPrepare={toPrepare} handleCooking={handleCooking}></Cooking>
        </div>
    );
};

Accounts.propTypes = {
    toCook: PropTypes.array,
    toPrepare: PropTypes.array,
    handleCooking: PropTypes.func,
    handleToPrepare: PropTypes.func
};

export default Accounts;