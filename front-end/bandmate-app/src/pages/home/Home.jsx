import React from "react";
import Navbar from "../../components/navbar/Navbar";
import {} from "./home.css";
import { Rating } from "primereact/rating";
import "primeicons/primeicons.css";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate= useNavigate();

  const handleClick =() =>{
    navigate('/register');
  }
  
  return (
    <div>

      
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('../../src/assests/band-7014354_1280.jpg')] bg-cover bg-center filter blur-sm"></div>
        <div className="relative flex-col items-center justify-center  h-full p-28">
          <h1 className="text-white text-6xl font-bold text-center">
            Welcome to Guitarist Connect
          </h1>
          <h1 className="text-white text-6xl font-bold text-center">
            Find Your Sound!
          </h1>
          <h1 className="text-white text-2xl font-bold text-center p-5">
            Discover the Perfect Guitarist for Every Occasion
          </h1>
          <div className="flex justify-center">
            <button onClick={handleClick} className="text-gray-700 font-semibold text-lg text-center flex bg-navItem-active rounded-lg p-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-background padding1">
        <div className="relative bg-white flex flex-col items-center h-full m-3 p-7 rounded-xl shadow-md">
          <h1 className="text-5xl p-4 text-gray-700 font-bold">Through Ours</h1>

          <div className="mx-1 p-2">
            <div className="grid grid-cols-2 gap-10">
              <div className="bg-background text-white p-4 rounded-lg flex flex-col items-center justify-center ">
                <div className="flex justify-center mb-3">
                  <img
                    src="../../src/assests/jazz_band_team_generated.jpg"
                    alt=""
                    className="size-full transform transition-transform duration-200 hover:scale-110"
                  />
                </div>
                <h4 className="text-2xl text-gray-700 font-semibold mb-2">Hire Muscians</h4>
                <p className="text-gray-700 text-lg p-2">Connect with skilled guitarists easily. Our platform brings top talent together, simplifying hiring for your music projects. Start now!</p>
              </div>

              <div className="bg-background text-white p-4 rounded-lg flex flex-col items-center justify-center">
                <div className="flex justify-center mb-3">
                  <img
                    src="../../src/assests/7685557.jpg"
                    alt=""
                    className="size-full transform transition-transform duration-200 hover:scale-110"
                  />
                </div>
                <h4 className="text-2xl text-gray-700 font-semibold mb-2">Trusted Partners</h4>
                <p className="text-gray-700 text-lg p-2">Connect with skilled guitarists easily. Our platform brings top talent together, simplifying hiring for your music projects. Start now!</p>
              </div>
            </div>

            <div className="w-full p-3 m-4 border-t-2 border-gray-300 text-center">
              ads here
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-5 bg-background ">
        <div className="size-2/4 shadow-md  bg-slate-50">
          <img className="" src="../../src/assests/men-7484239_1280.jpg" alt="" />
        </div>
        <div className="lg:p-6 sm:p-0 padding size-1/2">
          <h1 className="lg:text-5xl sm:text-3xl text-gray-700 font-bold"> How It Works</h1>
          <p className="lg:pt-3 sm:pt-1 lg:text-lg sm:text-xs text-gray-700  pb-4">
          With Guitarist Connect, finding the right guitarist is a breeze. Browse profiles, watch videos, and listen to audio samples to discover skilled musicians. Instantly connect through messaging, set up interviews, and schedule sessions all within our intuitive platform. Book confidently using verified reviews and streamlined booking tools to complete your project effortlessly.          </p>
          <div className="flex justify-center sm:pb-2">
            <button onClick={handleClick} className="bg-orange-400 text-gray-700 font-semibold text-lg rounded-md p-3">Hire Now</button>
          </div>
        </div>
      </div>
      <div className="p-3 m-4  flex justify-center">
        <h1 className="text-5xl text-gray-700 font-bold mt-6">Experts Of Sounds</h1>
      </div>
      <div class="container mx-auto p-10 bg-background">
        <div class="grid grid-cols-4 gap-4">
          <div class="bg-white text-black p-6 rounded-lg flex items-center justify-center flex-col shadow-lg transform transition-transform duration-200 hover:scale-110">
            <div className="rounded-full round">
              <img className="object-cover w-full h-full rounded-full" src="../../src/assests/colours-7402147_1280.jpg" alt="" />
            </div>
            <h1 className="p-1 text-2xl text-gray-700 font-semibold">Shen Max</h1>
            <p className="text-lg text-gray-700">Guitarist</p>
            <Rating className=" text-yellow-300" value={5} readOnly cancel={false} />
          </div>
          <div class="bg-white text-black p-6 rounded-lg flex items-center justify-center flex-col shadow-lg transform transition-transform duration-200 hover:scale-110">
            <div className="bg-black p-4 rounded-full round">
            <img className="object-cover w-full h-full rounded-full" src="../../src/assests/saxophone-4473023_1280.jpg" alt="" />

            </div>
            <h1 className="p-1 text-2xl text-gray-700 font-semibold">Guwen Charu</h1>
            <p className="text-lg text-gray-700"> saxophonist</p>
            <Rating className=" text-yellow-300" value={4} readOnly cancel={false} />
          </div>

          <div class="bg-white text-black p-6 rounded-lg flex items-center justify-center flex-col shadow-lg transform transition-transform duration-200 hover:scale-110">
            <div className="rounded-full round">
            <img className="object-cover w-full h-full rounded-full" src="../../src/assests/man-5979081_1280.jpg" alt="" />

            </div>
            <h1 className="p-1 text-2xl text-gray-700 font-semibold">Mark David</h1>
            <p className="text-lg text-gray-700">Drummer</p>
            <Rating className=" text-yellow-300" value={4} readOnly cancel={false} />
          </div>
          <div class="bg-white text-black p-6 rounded-lg flex items-center justify-center flex-col shadow-lg transform transition-transform duration-200 hover:scale-110">
            <div className=" rounded-full round">
            <img className="object-cover w-full h-full rounded-full" src="../../src/assests/people-2591943_1280.jpg" alt="" />

            </div>
            <h1 className="p-1 text-2xl text-gray-700 font-semibold">Rubi Shey</h1>
            <p className="text-lg text-gray-700">Violinist</p>
            <Rating className=" text-yellow-300" value={5} readOnly cancel={false} />
          </div>
        </div>
      </div>
      <div className="flex py-6 px-8">
        <div className="size-full py-4">
          <h1 className="text-3xl text-gray-700 font-bold p-4">Why Hire Musicians Through US?</h1>
          <div className="flex px-3 py-2">
            <i
              className="pi pi-verified "
              style={{ fontSize: "1.25rem", color: "#ADD8E6" }}
            ></i>
            <p className="px-3 lg:text-xl sm:text-base text-gray-700">
              Over 20 Years experience in the events industry
            </p>
          </div>
          <div className="flex py-2 px-3">
            <i
              className="pi pi-verified"
              style={{ fontSize: "1.25rem",color: "#ADD8E6" }}
            ></i>
            <p className="px-3 lg:text-xl sm:text-base text-gray-700">All bands hand-picked by our team of experts</p>
          </div>
          <div className="flex py-2 px-3">
            <i
              className="pi pi-verified"
              style={{ fontSize: "1.25rem",color: "#ADD8E6" }}
            ></i>
            <p className="px-3 lg:text-xl sm:text-base text-gray-700">
              Dedicated member of our team assigned to your event
            </p>
          </div>
          <div className="flex py-2 px-3">
            <i
              className="pi pi-verified"
              style={{ fontSize: "1.25rem",color: "#ADD8E6" }}
            ></i>
            <p className="px-3 lg:text-xl sm:text-base text-gray-700">
              Professional contracts for your peace of mind
            </p>
          </div>
        </div>
        <div className="relative size-full h-64 p-4 m-8 mt-14 justify-center items-center bg-background rounded-xl shadow-lg">
          <div className="absolute top rounded-full">
          <img className="object-cover w-full h-full rounded-full" src="../../src/assests/girls-1741925_1280.jpg" alt="" />

          </div>
          <Rating
            className=" px-4 my-8 text-yellow-300"
            value={5}
            readOnly
            cancel={false}
          />
          <p className="px-4 text-xl text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            molestias consectetur a, magnam hic voluptas quos numquam iure esse
            odit, libero est natus mollitia provident non voluptate in ratione
            unde.
          </p>
        </div>
      </div>
      <Footer />

     

    </div>
  );
};

export default Home;
