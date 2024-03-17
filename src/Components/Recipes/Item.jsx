import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { FaGripfire } from "react-icons/fa6";

const Item = ({item, handleToCook}) => {
    const {recipe_name, recipe_image, short_description: description, ingredients, preparing_time, calories} = item;
    return (
        <div className="items w-full md:w-7/12 mx-auto">
            <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={recipe_image} alt="RecipeImg" className="rounded-xl min-w-[95%] h-52 object-cover" />
                </figure>
                <div className="card-body items-start space-y-6 text-start">
                    <div className="title-description space-y-4">
                        <h2 className="card-title text-[#282828] text-xl font-semibold">{recipe_name}</h2>
                        <p className='fira-sans text-[#878787] text-lg font-normal'>{description}</p>
                    </div>
                    <div className="ingredients">
                        <h2 className='text-[#282828] font-medium text-xl'>Ingredients: {ingredients.length}</h2>
                        <ul className="list-disc px-4 py-4 fira-sans text-[#878787] font-normal text-lg">
                            {
                                ingredients.map((ingredient, idx)=><li key={idx}>{ingredient}</li>)
                            }
                        </ul>
                    </div>
                    <div className="card-actions w-full flex flex-col space-y-2">
                        <div className="status fira-sans text-[#282828bc] font-normal w-full flex justify-between">
                            <div className="time flex justify-between items-center gap-2">
                                <CiClock2 className='text-2xl'></CiClock2>
                                <p>{preparing_time} minutes</p>
                            </div>
                            <div className="calories flex justify-between items-center gap-2">
                                <FaGripfire className='text-2xl' />
                                <p>{calories} calories</p>
                            </div>
                        </div>
                        <button onClick={()=>handleToCook(item)} className="btn btn-primary bg-[#0BE58A] hover:bg-[#0BE58A70] text-[#150B2B] font-medium rounded-full">want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    handleToCook: PropTypes.func.isRequired
};

export default Item;