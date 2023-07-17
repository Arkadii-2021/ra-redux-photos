import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { newPhoto } from "../slices/photosSlice";
import { nanoid } from "nanoid";
import ListPhotos from "./ListPhotos";


export default function Photos() {
	const dispatch = useDispatch();
	const photosList = useSelector(state => state.photos);
	const reader = new FileReader();
	
	const uploadPhoto = file => {
		reader.addEventListener('load', evt => {
			dispatch(newPhoto({id: nanoid(), url: reader.result})); 
		});		
		reader.readAsDataURL(file);
    };
	
	const preloadPhoto = photosList[photosList.length - 1];
	const leftPhoto = photosList[photosList.length - 2];
	
	return (
		<>
			<input type="file" onChange={evt => uploadPhoto(evt.target.files[0])} />
			<div className="photos_all">
				<div style={{margin: "0 50px 0 0"}}>
					{leftPhoto ? <img className="photo" src={leftPhoto.url} alt={leftPhoto.id} /> : null}
				</div>
				<div style={{margin: "0 50px 0 0"}}>
					{preloadPhoto ? <img className="photo" src={preloadPhoto.url} alt={preloadPhoto.id} /> : null}
				</div>
				<ListPhotos photosList={photosList}/>
			</div>
		</>
	)
};
