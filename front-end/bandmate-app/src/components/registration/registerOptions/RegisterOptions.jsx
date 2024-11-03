import React, { useContext } from "react";
import { Dialog } from "primereact/dialog";
import { RegisterContext } from "../../../context/registerContext/RegisterContext";
import { BandRegisterContext } from "../../../context/bandRegisterContext/BandRegisterContext";
import { MusicianRegisterContext } from "../../../context/musicianRegisterContext/MusicianRegisterContext";

const RegisterOptions = () => {
  const { visibleRegister, setVisibleRegister } = useContext(RegisterContext);
  const { visibleBandRegister, setVisibleBandRegister } =
    useContext(BandRegisterContext);
  const { visibleMusicianRegister, setVisibleMusicianRegister } =
    useContext(MusicianRegisterContext);

  const handleSetVisibleBandRegister = () => {
    setVisibleBandRegister(true);
  };

  const handleSetVisibleMusicianRegister = () => {
    setVisibleMusicianRegister(true);
  };

  return (
    <div className="relative w-auto">
      {visibleRegister && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setVisibleRegister(false)}
        ></div>
      )}
      <Dialog
        header=""
        visible={visibleRegister}
        onHide={() => setVisibleRegister(false)}
        className=" bg-cardBg md:w-[650px] p-6 rounded-xl"
        breakpoints={{ "960px": "75vw", "640px": "90vw" }}
      >
        <div className="flex justify-between items-center p-8 gap-4 md:gap-10">
          <div
            className="flex flex-col items-center p-4 cursor-pointer rounded-xl hover:bg-slate-100 hover:scale-105 transition-transform"
            onClick={() => {
              handleSetVisibleBandRegister(true);
              setVisibleRegister(false);
            }}
          >
            <img className="w-[100px] md:w-[200px]" src="./band.png" alt="" />
            <h1 className="text-sm md:text-[30px] font-bold">I'm a Band</h1>
          </div>
          <div
            className="flex flex-col items-center  p-4 cursor-pointer rounded-xl hover:bg-slate-100 hover:scale-105 transition-transform"
            onClick={() => {
              handleSetVisibleMusicianRegister(true);
              setVisibleRegister(false);
            }}
          >
            <img
              className="w-[100px] md:w-[200px]"
              src="./musician.png"
              alt=""
            />
            <h1 className="text-sm md:text-[30px] font-bold">I'm a Musician</h1>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default RegisterOptions;
