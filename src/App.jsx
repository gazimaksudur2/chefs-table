import PropsType from 'prop-types';
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from "./Components/Banner/Banner";
import OurRecipes from "./Components/Banner/OurRecipes";
import Navbar from "./Components/Navbar/Navbar";
import Accounts from "./Components/Recipes/Accounts";
import { getFromLocal, removeFromLocal, setToLocal } from './Utilities/localManager';
import { showErrorToast, showWarningToast } from './Utilities/toastManager';
import scrollToSection from './Utilities/transition';
import Items from './Components/Recipes/Items';

function App() {
  const [toCook, setToCook] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [toPrepare, setToPrepare] = useState([]);
  const toServes = [];

  const handleToPrepare = (item)=>{
    console.log(toPrepare);
    if((toPrepare.includes(item))){
      (showWarningToast(true, 'Already Cooking'));
      return;
    }
    // (toPrepare.includes(item)) || 
    removeFromCook(item);
    setToPrepare([...toPrepare, item]);
    // console.log(toPrepare);
  }

  const handleCooking = (item)=>{
      setToPrepare(toPrepare.filter(element=>element!==item));
      removeFromLocal('recipeCooking',item.recipe_id);
      // (status==='Preparing') &&  
  }
    

  const handleToCook = (item)=>{
    if(toCook.find(element=>element===item)) {
      showErrorToast(true, "Already Selected!!", 2000);
      return;
    }
    // (toCook.find(element=>element===item)) || 
    (setToLocal('recipePending', item.recipe_id));
    (setToCook([...toCook, item]));
  };

  const removeFromCook = (item)=>{
    setToCook(toCook.filter((element)=>element!==item));
    removeFromLocal('recipePending',item.recipe_id);
    setToLocal('recipeCooking',item.recipe_id);
  }

  useEffect(()=>{
    fetch('Recipes.json')
    .then(res => res.json())
    .then(data => {
        setAllItems(data);
    });
},[]);
    
useEffect(()=>{
  const toCookID = getFromLocal('recipePending');
  const toServeID = getFromLocal('recipeCooking');
  const toCooks = [];
  for(const id of toCookID){
    // toCooks.push(allItems.filter((element)=>element.recipe_id===id));
    (allItems.find(item=>item.recipe_id===id) === undefined) || (toCooks.push(allItems.find(item=>item.recipe_id===id)));    
  }
  for(const id of toServeID){
    (allItems.find(item=>item.recipe_id===id) === undefined) || (toServes.push(allItems.find(item=>item.recipe_id===id)));
  }
  setToCook([...toCooks]);
  setToPrepare([...toServes]);
},[allItems]);

 return (
    <>
      <div className="primary-cont my-10 max-w-[95%] mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <OurRecipes></OurRecipes>
      </div>
      <div className="recipes flex flex-col-reverse md:flex-row justify-center items-start gap-10 md:gap-16 my-10 w-[97%] md:max-w-[90%] mx-auto">
        <Items handleToCook={handleToCook} scrollToSection={scrollToSection}></Items>
        <Accounts toCook={toCook} handleToPrepare={handleToPrepare} handleCooking={handleCooking} toPrepare={toPrepare}></Accounts>
      </div>
      <ToastContainer />
    </>
  )
}

App.propsType = {
  handleToCook: PropsType.func
}

export default App;
