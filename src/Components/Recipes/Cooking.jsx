import PropTypes from 'prop-types';
import CookItem from './CookItem';

const Cooking = ({toPrepare}) => {
    let index = 0;
    return (
        <div className='want-cook p-10 space-y-8 w-full text-center'>
            <h2 className='text-[#282828] w-[55%] mx-auto border-b-2 border-gray-400 pb-2 text-2xl font-semibold'>Currently Cooking: {toPrepare.length}</h2>
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
                        toPrepare.map((item, idx)=><CookItem item={item} key={idx} status={'Preparing'} color={true} index={++index}></CookItem>)
                    }
                {/* row 1 */}
                <tr className="hover">
                    <th>1</th>
                    <td>Chicken Caesar Salad</td>
                    <td>20 mins</td>
                    <td>400 calories</td>
                    <td><button className="btn-success px-3 py-2 bg-green-500 text-[#150B2Bbd] text-sm font-medium rounded-full active:scale-95">Preparing</button></td>
                </tr>
                {/* row 1 */}
                <tr className="hover">
                    <th>1</th>
                    <td>Chicken Caesar Salad</td>
                    <td>20 mins</td>
                    <td>400 calories</td>
                    <td><button className="btn-success px-3 py-2 bg-green-500 text-[#150B2Bbd] text-sm font-medium rounded-full active:scale-95">Preparing</button></td>
                </tr>
                {/* row 1 */}
                <tr className="hover">
                    <th>1</th>
                    <td>Chicken Caesar Salad</td>
                    <td>20 mins</td>
                    <td>400 calories</td>
                    <td><button className="btn-success px-3 py-2 bg-green-500 text-[#150B2Bbd] text-sm font-medium rounded-full active:scale-95">Preparing</button></td>
                </tr>
                {/* row 1 */}
                <tr className="hover">
                    <th>1</th>
                    <td>Chicken Caesar Salad</td>
                    <td>20 mins</td>
                    <td>400 calories</td>
                    <td><button className="btn-success px-3 py-2 bg-green-500 text-[#150B2Bbd] text-sm font-medium rounded-full active:scale-95">Preparing</button></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

Cooking.propTypes = {
    handleToPrepare: PropTypes.func,
    toPrepare: PropTypes.array
};

export default Cooking;