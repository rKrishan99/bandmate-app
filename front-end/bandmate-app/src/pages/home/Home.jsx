import React from "react";
import Navbar from "../../components/navbar/Navbar";
import {} from "./home.css";
import { Rating } from "primereact/rating";
import "primeicons/primeicons.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen overflow-hidden">
        {/* Background layer with blur effect */}
        <div className="absolute inset-0 bg-[url('./band-7014354_1280.jpg')] bg-cover bg-center filter blur-sm"></div>

        {/* Content layer */}
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
            <button className="text-white text-center flex bg-navItem-active rounded-lg p-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-background px-cusPadding">
        <div className="relative bg-white flex flex-col items-center  h-full m-3 p-7 rounded-xl shadow-md">
          <h1 className="text-4xl p-4">Why are you choose for us</h1>

          <div class=" mx-1 p-2">
            <div class="grid grid-cols-2 gap-2">
              <div class="bg-slate-400 flex-col text-white p-2 rounded-lg flex items-center justify-center">
                <div className="flex justify-center p-3">
                  <img
                    src="./jazz_band_team_generated.jpg"
                    alt=""
                    className="size-52"
                  />
                </div>
                <h4 className="text-2xl p-2"> Wide Range of Talents</h4>
                <p className=""> Wide Range of Talents</p>
              </div>
              <div class="bg-slate-400 flex-col text-white p-2 rounded-lg flex">
                <div className="flex justify-center p-3">
                  <img
                    src="./jazz_band_team_generated.jpg"
                    alt=""
                    className="size-52"
                  />
                </div>

                <h4 className="text-2xl p-2"> Trusted Musicians</h4>
                <p className=""> Wide Range of Talents</p>
              </div>

              <div class="bg-slate-400 flex-col text-white p-1 rounded-lg flex items-center justify-center">
                <div className="flex justify-center p-3">
                  <img
                    src="./jazz_band_team_generated.jpg"
                    alt=""
                    className="size-52"
                  />
                </div>
                <h4 className="text-2xl p-2"> Quick and Easy Search</h4>
                <p className=""> Wide Range of Talents</p>
              </div>
              <div class="bg-slate-400 flex-col text-white p-6 rounded-lg flex items-center justify-center">
                <div className="flex justify-center p-3">
                  <img
                    src="./jazz_band_team_generated.jpg"
                    alt=""
                    className="size-52"
                  />
                </div>
                <h4 className="text-2xl p-2"> Quick and Easy Search </h4>
                <p className=""> Wide Range of Talents</p>
              </div>
              <div className="size-full p-3 m-4 border-x-2">ads here</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-5 bg-background ">
        <div className="size-2/4 p-6 shadow-md bg-slate-50">
          <img src="./men-7484239_1280.jpg" alt="" />
        </div>
        <div className="p-6 size-1/2">
          <h1 className="text-4xl"> How It Works</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            nesciunt deserunt vel modi tempora nihil facere sit delectus
            laudantium quo. Odit nam eveniet quasi quisquam suscipit quod
            recusandae sint ducimus!
          </p>
          <div className="flex justify-center">
            <button className="bg-orange-400 rounded-md p-3">Hire Now</button>
          </div>
        </div>
      </div>
      <div className="p-3 m-4 flex justify-center">
        <h1 className="text-4xl">Experts Of Sounds</h1>
      </div>
      <div class="container mx-auto p-10 bg-background">
        <div class="grid grid-cols-4 gap-4">
          <div class="bg-white text-black p-6 rounded-lg flex items-center justify-center flex-col shadow-lg">
            <div className="bg-black p-4 rounded-full round"></div>
            <h1 className="p-1 text-3xl">Shen Max</h1>
            <p>Guitarist</p>
            <Rating value={5} readOnly cancel={false} />
          </div>
          <div class="bg-white text-black p-6 rounded-lg flex items-center justify-center flex-col shadow-lg">
            <div className="bg-black p-4 rounded-full round"></div>
            <h1 className="p-1 text-3xl">Shen Max</h1>
            <p>Guitarist</p>
            <Rating value={5} readOnly cancel={false} />
          </div>

          <div class="bg-white text-black p-6 rounded-lg flex items-center justify-center flex-col shadow-lg">
            <div className="bg-black p-4 rounded-full round"></div>
            <h1 className="p-1 text-3xl">Shen Max</h1>
            <p>Guitarist</p>
            <Rating value={5} readOnly cancel={false} />
          </div>
          <div class="bg-white text-black p-6 rounded-lg flex items-center justify-center flex-col shadow-lg">
            <div className="bg-black p-4 rounded-full round"></div>
            <h1 className="p-1 text-3xl">Shen Max</h1>
            <p>Guitarist</p>
            <Rating value={5} readOnly cancel={false} />
          </div>
        </div>
      </div>
      <div className="flex py-6 px-8">
        <div className="size-full py-4">
          <h1 className="text-3xl p-4">Why Hire Musicians Through US?</h1>
          <div className="flex">
            <i
              className="pi pi-verified px-3 py-2"
              style={{ fontSize: "1rem", color: "" }}
            ></i>
            <p className="py-1">
              Over 20 Years experience in the events industry
            </p>
          </div>
          <div className="flex">
            <i
              className="pi pi-verified px-3 py-4"
              style={{ fontSize: "1rem" }}
            ></i>
            <p className="py-3">All bands hand-picked by our team of experts</p>
          </div>
          <div className="flex">
            <i
              className="pi pi-verified px-3 py-2"
              style={{ fontSize: "1rem" }}
            ></i>
            <p className="py-1">
              Dedicated member of our team assigned to your event
            </p>
          </div>
          <div className="flex">
            <i
              className="pi pi-verified px-3 py-4"
              style={{ fontSize: "1rem" }}
            ></i>
            <p className="py-3">
              Professional contracts for your peace of mind
            </p>
          </div>
        </div>
        <div className="relative size-full h-64 p-4 m-8 justify-center items-center bg-background rounded-xl shadow-lg">
          <div className="absolute top bg-black rounded-full"></div>
          <Rating
            className="py-3 px-4 my-8"
            value={5}
            readOnly
            cancel={false}
          />
          <p className="px-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            molestias consectetur a, magnam hic voluptas quos numquam iure esse
            odit, libero est natus mollitia provident non voluptate in ratione
            unde.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
