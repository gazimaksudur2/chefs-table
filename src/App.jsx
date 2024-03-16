import { useState } from "react"
import PropsType from 'prop-types'
import Banner from "./Components/Banner/Banner"
import OurRecipes from "./Components/Banner/OurRecipes"
import Navbar from "./Components/Navbar/Navbar"
import Accounts from "./Components/Recipes/Accounts"
import Items from "./Components/Recipes/Items"

function App() {
  const [toCook, setToCook] = useState([]);

  const handleToCook = (item)=>{
    // console.log('cook is clicked --> '+item.recipe_id)
    setToCook([...toCook, item]);
  };
  return (
    <>
      <div className="primary-cont my-10 max-w-[95%] mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <OurRecipes></OurRecipes>
      </div>
      <div className="recipes flex justify-center items-start gap-16 my-10 max-w-[90%] mx-auto">
        <Items handleToCook={handleToCook}></Items>
        <Accounts toCook={toCook}></Accounts>
      </div>
      <h1 className="text-3xl font-bold underline text-primary text-center">
      Hello world!
      </h1>
    </>
  )
}

App.propsType = {
  handleToCook: PropsType.func
}

export default App
