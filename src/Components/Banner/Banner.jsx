import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-cont relative my-10 h-[80vh] bg-img bg-cover rounded-3xl'>
            <div className="absolute inset-0 bg-gradient-to-t from-[#150B2Bad] to-[#150B2B10] rounded-3xl"></div>
            <div className="absolute z-20 w-full banner-tags text-center h-full space-y-10 flex flex-col justify-center items-center">
                <h2 className='text-white md:w-1/2 text-5xl font-bold'>Discover an exceptional cooking class tailored for you!</h2>
                <p className='text-white text-lg font-normal md:w-1/2'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className="buttons flex justify-between items-center gap-20">
                    <button className="btn-success px-8 py-5 bg-green-500 text-[#150B2B] text-xl font-semibold rounded-full active:scale-95">Explore Now</button>
                    <button className="outline px-8 py-4 bg-transparent text-white text-xl font-semibold rounded-full active:scale-95 active:bg-white active:text-black">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};


export default Banner;