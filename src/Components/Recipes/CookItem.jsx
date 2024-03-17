import PropTypes from 'prop-types';

const CookItem = ({item, index, color, status, handleTable}) => {
    const {recipe_name, preparing_time, calories} = item;
    let buttonClass = 'btn-success  px-3 py-2 text-[#150B2Bbd] text-sm font-medium rounded-full active:scale-95 ';
    return (
        <tr className="hover">
            <th>{index}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time} mins</td>
            <td>{calories} calories</td>
            <td><button onClick={()=>handleTable(item)} className={buttonClass+(color?'bg-green-500':'bg-red-400')} >{status}</button></td>
        </tr>
    );
};

CookItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number.isRequired,
    handleTable: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    color: PropTypes.bool.isRequired
};

export default CookItem;