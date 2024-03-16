import PropTypes from 'prop-types';

const CookItem = ({item, index, handleToPrepare}) => {
    const {recipe_name, preparing_time, calories} = item;
    return (
        <tr className="hover">
            <th>{index}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time} mins</td>
            <td>{calories} calories</td>
            <td><button onClick={()=>handleToPrepare(item)} className="btn-success px-3 py-2 bg-green-500 text-[#150B2Bbd] text-sm font-medium rounded-full active:scale-95">Preparing</button></td>
        </tr>
    );
};

CookItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleToPrepare: PropTypes.func.isRequired
};

export default CookItem;