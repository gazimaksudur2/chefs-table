import PropTypes from 'prop-types';

const CookItem = ({item, index, color, status, handleToPrepare}) => {
    const {recipe_name, preparing_time, calories} = item;
    let red = 'btn-success  px-3 py-2 bg-red-400 text-[#150B2Bbd] text-sm font-medium rounded-full active:scale-95';
    let green = 'btn-success  px-3 py-2 bg-green-500 text-[#150B2Bbd] text-sm font-medium rounded-full active:scale-95';
    return (
        <tr className="hover">
            <th>{index}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time} mins</td>
            <td>{calories} calories</td>
            <td><button onClick={()=>handleToPrepare(item)} className={color?green:red} >{status}</button></td>
        </tr>
    );
};

CookItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleToPrepare: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    color: PropTypes.bool.isRequired
};

export default CookItem;