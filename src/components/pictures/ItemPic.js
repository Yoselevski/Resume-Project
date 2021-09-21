import classes from './ItemPic.module.css';
import React from 'react';
const ItemPic = ({ Link, alt, width, height, Checking }) => {
   // const x=React.lazy(()=>import(Link));
    // var PicLoading = function(uri) {
    //     return React.lazy(()=>import(uri));
    // };
    return (
      <img src={Link} alt={alt} width={width} height={height}style={{marginLeft: "2rem"},{marginRight: "2rem"}} />
  );
};
export default ItemPic;
