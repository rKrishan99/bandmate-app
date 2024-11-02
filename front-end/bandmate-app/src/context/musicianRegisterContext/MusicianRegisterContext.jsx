import React, { createContext, useState } from "react";


export const MusicianRegisterContext = createContext();

export const MusicianRegisterProvider = ({ children }) => {
  const [visibleMusicianRegister, setVisibleMusicianRegister] = useState(false);

  return (
    <MusicianRegisterContext.Provider value={{ visibleMusicianRegister, setVisibleMusicianRegister }}>
      {children}
    </MusicianRegisterContext.Provider>
  );
};
