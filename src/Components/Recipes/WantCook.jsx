import PropTypes from 'prop-types';
import CookItem from './CookItem';

const WantCook = ({toCook, handleToPrepare}) => {
    let index = 0;
    return (
        <div className='want-cook p-1 md:p-10 space-y-8 w-full text-center'>
            <h2 className='text-[#282828] md:w-[55%] mx-auto border-b-2 border-gray-400 pb-2 text-2xl font-semibold'>Want to cook: {toCook.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
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
                            toCook.map((item, idx)=><CookItem item={item} index={++index} color={false} key={idx} status={'pending'} handleToPrepare={handleToPrepare}></CookItem>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

WantCook.propTypes = {
    toCook: PropTypes.array,
    handleToPrepare: PropTypes.func
};

export default WantCook;