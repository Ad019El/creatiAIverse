"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("12e51f5c-06e0-4732-a163-1029b71fab37");
  }, []);

  return null;
};
