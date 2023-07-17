export default function ListPhotos({ photosList }) {
	return (
		<div className="list__photo">
			{photosList.map((photo, id, photos) => {
				if (id === photos.length - 1 || id === photos.length - 2) {
					return null
				}
							
				return (
					<img className="photo" src={photo.url} alt={photo.id} key={photo.id} />
				)}
			)}
		</div>
	)
};
