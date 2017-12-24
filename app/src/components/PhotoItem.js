import React from 'react';

//Photo item component as function
const PhotoItem = ({url}) => (
  <li>
    <img src={url} alt="" />
  </li>
);

export default PhotoItem;
