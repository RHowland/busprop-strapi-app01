
import {create} from "zustand";

const useStore = create((set) => ({
  leftBar: { value: 'Bar 1', image: 'Left_Bar1.png' },
  letterHead: { value: 'Header 1', image: 'Header1.png' }, 

  setLeftBar: (payload) => {
    set(() => ({
        leftBar:  payload,
    }));
  },
  setLetterHead: (payload) => {
    set(() => ({
      letterHead:  payload,
    }));
  },
}));

export default useStore;
