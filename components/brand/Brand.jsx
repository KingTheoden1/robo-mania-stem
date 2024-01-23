import React from 'react';
import { tamu, agrilife, prairieview, aggiestem, fourhclub, openbrick, playoasis, stemrichment } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div className="robomania__brand section__padding">
      <div>
        <img src={tamu} alt="tamu" />
      </div>
      <div>
        <img src={agrilife} alt="agrilife" />
      </div>
      <div>
        <img src={prairieview} alt="prairieview" />
      </div>
      <div>
        <img src={aggiestem} alt="aggiestem" />
      </div>
      <div>
        <img src={fourhclub} alt="fourhclub" />
      </div>
      <div>
        <img src={openbrick} alt="openbrick" />
      </div>
      <div>
        <img src={playoasis} alt="playoasis" />
      </div>
      <div>
        <img src={stemrichment} alt="stemrichment" />
      </div>
    </div>
  )
}

export default Brand