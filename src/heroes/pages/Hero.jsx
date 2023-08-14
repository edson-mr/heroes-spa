import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const Hero = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(()=>getHeroById(heroId),[heroId]);

  const onNavigateBack=()=>{
    
    navigate(-1)
  }

  if (!hero) return <Navigate to="/" />;

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="row mt-5 animate__animated animate__fadeInUp">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Nombre real: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Editorial: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>Primera aparición: </b>
            {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Interpretaciones</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
