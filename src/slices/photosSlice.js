import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
	name: "photos",
	initialState: [],
	reducers: {
		newPhoto(state, action) {
			state.push(action.payload)
		}
	}
});


export const { newPhoto } = photosSlice.actions;
export default photosSlice.reducer;