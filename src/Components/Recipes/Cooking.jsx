import PropTypes from 'prop-types';
import CookItem from './CookItem';

const Cooking = ({toPrepare, handleCooking}) => {
    let index = 0;
    const totalTime = toPrepare.reduce((accum,cur)=>{ return (parseInt(accum) + parseInt(cur.preparing_time))},0);
    const totalCalories = toPrepare.reduce((accum,cur)=>{return accum+=parseInt(cur.calories)},0);
    return (
        <div className='want-cook p-1 md:p-10 space-y-8 w-full text-center'>
            <h2 className='text-[#282828] md:w-[55%] mx-auto border-b-2 border-gray-400 pb-2 text-2xl font-semibold'>Currently Cooking: {toPrepare.length}</h2>
            <div className="overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    {
                        toPrepare.map((item, idx)=><CookItem item={item} handleTable={handleCooking} key={idx} status={'Preparing'} color={true} index={++index}></CookItem>)
                    }
                </tbody>
            </table>

            <h2 className='text-[#282828] my-6 md:w-[55%] mx-auto border-b-2 border-gray-400 pb-2 text-2xl font-semibold'>Calculations</h2>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Total Time</th>
                        <th>Total Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="hover">
                        <td>{totalTime} minutes</td>
                        <td>{totalCalories} calories</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

Cooking.propTypes = {
    handleCooking: PropTypes.func,
    toPrepare: PropTypes.array
};

export default Cooking;