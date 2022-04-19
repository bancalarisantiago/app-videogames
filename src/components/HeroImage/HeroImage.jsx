import React from "react";

//import { Wrapper, Content, Text} from './HeroImage.styles';

const HeroImage = ({ imgPath, title, description }) => (
  <>
    <div>SOY HERO IMAGE</div>
    <img src={imgPath} alt="img hero" />
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </>
);

export default HeroImage;
