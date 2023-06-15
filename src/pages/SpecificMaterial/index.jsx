import React from 'react';
import './style.css';
import { useParams, useNavigate } from 'react-router-dom';
import { MaterialDetail } from '../../consts';
import { Link } from 'react-router-dom';

export const SpecificMaterial = () => {
  const { MaterialId } = useParams();
  const detail = MaterialDetail[MaterialId];
  return (
    <>
      <div className="container">
        <div className="material__headline">
          <img
            className="material__image"
            margin-bottom="3px"
            src={`/img/${detail.icon}.jpg`}
            alt="{header}"
          />
          <h2>{detail.header}</h2>
        </div>

        <p className="material__intro">{detail.intro}</p>

        <p className="material__intro">
          <p className="material__intro__header">{detail.prosHeader}</p>
          {detail.pros}
        </p>

        <p className="material__intro">
          <p className="material__intro__header">{detail.conHeader}</p>
          {detail.con}
        </p>

        <p className="material__intro">
          <p className="material__intro__header">{detail.maintenanceHeader}</p>
          {detail.maintenance}
        </p>

        <div className="button--flex">
          <Link className="button button--zpet" to="/materialy">
            Zpět
          </Link>
        </div>
      </div>
    </>
  );
};
