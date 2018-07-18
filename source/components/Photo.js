import React from "react";
import { photos } from "../theme/assets/images/photos";

const Photo = props => {
  return props.secured ? null : (
    <div className="photo">
      <img src={props.src} />
    </div>
  );
};
export default Photo;
