// import {HeroCard} from '../components'

import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {q=''} = queryString.parse(location.search)
  const heroes = getHeroByName(q)

  const showSearch = q.length ===0
  const showError = (q.length > 0) && (heroes.length===0);

  const {searchText, onInputChange} = useForm({
    searchText:q
  })

  const onSearchSubmit=(e)=>{
    e.preventDefault()
    // if(searchText.trim().length <=1)return
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <div className="row mt-2">
        <div className="col-5">
          <h4>Buscar:</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="nombre del heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {/* {
          (q === "") 
          ? (<div className="alert alert-primary">Search a hero</div>) 
          : (heroes.length === 0) && (
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            )
          } */}

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Debes escribir un Heroe en el buscador
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            no se encontró el heroe <b>{q}</b>
          </div>

          {heroes.map((heroe) => (
            <HeroCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </>
  );
};
