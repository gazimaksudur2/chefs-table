import { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('Recipes.json')
        .then(res => res.json())
        .then(data => {
            setItems(data);
        });
    },[]);
    return (
        <div className="items w-7/12 mx-auto grid grid-cols-2 gap-6">
            {
                items.map((item,idx)=><Item item={item} key={idx}></Item>)
            }
        </div>
    );
};
export default Items;