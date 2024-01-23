import React from 'react';
import { tamu, agrilife, prairieview, aggiestem, fourhclub, openbrick, playoasis, stemrichment } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div className="robomania__brand section__padding">
      <h2 className="robomania__brand-title">Our Partners and Clients</h2> {/* Title added here */}
      <div className="robomania__brand-row">
        <img src={tamu} alt="tamu" />
        <img src={agrilife} alt="agrilife" />
        <img src={prairieview} alt="prairieview" />
        <img src={aggiestem} alt="aggiestem" />
      </div>
      <div className="robomania__brand-row">
        <img src={fourhclub} alt="fourhclub" />
        <img src={openbrick} alt="openbrick" />
        <img src={playoasis} alt="playoasis" />
        <img src={stemrichment} alt="stemrichment" />
      </div>
    </div>
  );
};

export default Brand;