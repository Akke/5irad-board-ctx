import { createContext, useContext } from "react";
export const BoardCtx = createContext(null);
export const useBoard = () => {
  const ctx = useContext(BoardCtx);
  if (!ctx) throw new Error("useBoard must be within <BoardProvider>");
  return ctx;
};