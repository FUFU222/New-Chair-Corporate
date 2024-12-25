"use client";

import React, { createContext, useContext } from "react";

const ScrollSnapContext = createContext();

export const ScrollSnapProvider = ({ children }) => {
  return (
    <ScrollSnapContext.Provider
      value={{
        orientation: "y",
        snapAlign: "start", 
      }}
    >
      {children}
    </ScrollSnapContext.Provider>
  );
};

export const useScrollSnap = () => useContext(ScrollSnapContext);
