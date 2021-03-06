import React from "react";
import { Image } from "rebass";
function ImageComponent(props) {
  return (
    <Image
      src={props.image}
      variant="avatar"
      sx={{
        width: "152px",
        height: "152px",
        borderRadius: "50%",
        marginTop: "60px",
        marginLeft: "117px",
        marginBottom: "10px",
      }}
    />
  );
}

export default ImageComponent;
