import { createContext, useContext } from "react";
export const BoardCtx = createContext(null);
export const useBoard = () => {
  const ctx = useContext(BoardCtx);
  if (!ctx) {
    // 👇 will print which component tree called it
    // eslint-disable-next-line no-console
    console.error("useBoard() called without <BoardProvider> — stack:");
    // eslint-disable-next-line no-console
    console.trace();
    throw new Error("useBoard must be within <BoardProvider>");
  }
  return ctx;
};