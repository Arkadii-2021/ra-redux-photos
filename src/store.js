import { configureStore } from "@reduxjs/toolkit";
import photosSlice from "./slices/photosSlice";


const store = configureStore({
	reducer: {
		photos: photosSlice
	}
});

export default store;