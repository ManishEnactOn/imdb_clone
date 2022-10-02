import React from "react";
import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const watchListSelector = selector({
  key: "watchListSelector",
  get: ({ get }) => {
    const text = get(textState);
    return text;
  },
  set: ({ set }, newValue) => {
    return set(textState, newValue);
  },
});

export const textState = atom({
  key: "watchList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
