import { useEffect, useState } from 'react';
import Item from './Item';
import PropsType from 'prop-types';

// eslint-disable-next-line react/prop-types
const Items = ({handleToCook, scrollToSection}) => {
    const [items, setItems] = useState([]);
    const [itemCountInfo, setItemCountInfo] = useState('Show All Items');

    const setItemsInfo = () => {
        setItemCountInfo((itemCountInfo==='Show All Items')?'Show Less Items':'Show All Items');
        // console.log('value in item count is : ',itemCountInfo);
    }

    useEffect(()=>{
        fetch('Recipes.json')
        .then(res => res.json())
        .then(data => {
            data = (itemCountInfo==='Show Less Items'? data : data.slice(0,2));
            setItems(data);
        });
    },[itemCountInfo]);
    return (
        <div className="items w-full md:w-7/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-6">
            {
                items.map((item,idx)=><Item item={item} key={idx} handleToCook={handleToCook}></Item>)
            }
            <div className="transition-btn w-full md:col-span-2 flex justify-center items-center my-10 gap-10">
                <button onClick={setItemsInfo} type="button" className='btn btn-active btn-accent'>{itemCountInfo}</button>
                <button onClick={()=>scrollToSection('accounts')} type="button" className='btn btn-active btn-accent'>Watch Status</button>
            </div>
        </div>
    );
};

Items.propsType = {
    handleToCook: PropsType.func.isRequired,
    scrollToSection: PropsType.func.isRequired
}
export default Items;