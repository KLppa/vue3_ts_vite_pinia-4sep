import { defineStore } from "pinia";

const useCountStore = defineStore({
  id: "count",
  state: () => ({
    counter: 1,
  }),
  actions: {
    increment() {
      this.counter++;
    },
  },
});

// store 實例對象
const instance = useCountStore();

// save
instance.$subscribe((_, state) => {
  localStorage.setItem("count-store", JSON.stringify({ ...state }));
});

// get
const old = localStorage.getItem("count-store");
console.log(old);
if (old) {
  instance.$state = JSON.parse(old);
}
export default useCountStore;
