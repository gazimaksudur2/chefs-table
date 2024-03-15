import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar/Navbar"

function App() {

  return (
    <>
      <div className="primary-cont my-10 max-w-[95%] mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <h1 className="text-3xl font-bold underline text-primary text-center">
      Hello world!
      </h1>
    </>
  )
}

export default App
