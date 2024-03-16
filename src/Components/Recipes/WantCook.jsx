import PropTypes from 'prop-types';
import CookItem from './CookItem';

const WantCook = ({toCook, handleToPrepare}) => {
    let index = 0;
    return (
        <div className='want-cook p-10 space-y-8 w-full text-center'>
            <h2 className='text-[#282828] w-[55%] mx-auto border-b-2 border-gray-400 pb-2 text-2xl font-semibold'>Want to cook: 01</h2>
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
                            toCook.map((item, idx)=><CookItem item={item} index={++index} key={idx} handleToPrepare={handleToPrepare}></CookItem>)
                        }
                    </tbody>
                        {/* <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item}</td>
                            </tr>
                        ))}
                        </tbody> */}
                </table>
            </div>
        </div>
    );
};

WantCook.propTypes = {
    toCook: PropTypes.func,
    handleToPrepare: PropTypes.func
};

export default WantCook;