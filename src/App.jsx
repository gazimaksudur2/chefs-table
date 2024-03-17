import PropsType from 'prop-types'
import { useState } from "react"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Banner from "./Components/Banner/Banner"
import OurRecipes from "./Components/Banner/OurRecipes"
import Navbar from "./Components/Navbar/Navbar"
import Accounts from "./Components/Recipes/Accounts"
import Items from "./Components/Recipes/Items"

function App() {
  const [toCook, setToCook] = useState([]);

  const handleToCook = (item)=>{
    (toCook.find(element=>element===item)) && showErrorToast(true, "Already Selected!!", 2000);
    (toCook.find(element=>element===item)) || (setToCook([...toCook, item]));
    // if((toCook.find(element=>element===item)){
    //   setToCook([...toCook, item]);
    //   showErrorToast(true, "Selected ", 1500);
    // }
  };

  const showErrorToast = (condition, message, time) => {
      if (condition) {
        toast.error(message, {
          position: 'top-center',
          autoClose: time
        });
      }
    };

    const showWarningToast = (condition, message, time) => {
      if (condition) {
        toast.warning(message, {
          position: 'top-center',
          autoClose: time
        });
      }
    };

  const removeFromCook = (item)=>{
    setToCook(toCook.filter((element)=>element!==item));
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="primary-cont my-10 max-w-[95%] mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <OurRecipes></OurRecipes>
      </div>
      <div className="recipes flex flex-col-reverse md:flex-row justify-center items-start gap-10 md:gap-16 my-10 w-[97%] md:max-w-[90%] mx-auto">
        <Items handleToCook={handleToCook} scrollToSection={scrollToSection}></Items>
        <Accounts toCook={toCook} removeFromCook={removeFromCook} showWarningToast={showWarningToast}></Accounts>
      </div>
      <ToastContainer />
    </>
  )
}

App.propsType = {
  handleToCook: PropsType.func
}

export default App
