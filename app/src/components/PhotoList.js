import React from 'react';
import NotFound from './NotFound';
import PhotoItem from './PhotoItem';

//Photolist component first maps photos to PhotoItem
const PhotoList = ({photos}) => {

  let photoItems = photos.map(photo => {
    const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    return <PhotoItem url={url} key={photo.id} />;
  });

  return(
    <ul>
      {
        (photos.length > 0) ? photoItems : <NotFound/>
      }
    </ul>
  );
};


export default PhotoList;
