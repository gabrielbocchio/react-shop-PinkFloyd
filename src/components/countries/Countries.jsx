import {useState, useEffect} from 'react'
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState(null)
    const [keyword, setKeyword] = useState("")

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${keyword}`)
          .then(response => response.json())
          .then(data => {
            if (Array.isArray(data)) {
              setCountries(data);
            } else {
              setCountries([]);
            }
          })
          .catch(error => {
            console.log('Error:', error);
            setCountries([]);
          });
      }, [keyword]);

    const handleCountry = () =>{
        const searchInput = document.getElementById('searcher');
        setKeyword(searchInput.value);
    }

    if (!countries) {
        return "Loading...";
      }

  return (
    <div>
        <div className="search-input">
          <input type="text" placeholder="Buscar pais" className="input-field" id='searcher' />
          <button className="search-button" onClick={handleCountry}>🔎</button>
        </div>
      {
        countries &&
        countries.map((country, i) => (
            <div
            className='pais'
            style={{
              backgroundImage: `url(${country.flags.svg})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#202020',
              backgroundPosition: 'center'
            }}
            key={i}
          >
            <p key={i}>{country.name.common}</p>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}, {country.subregion}</p>
            <p>Poblacion: {country.population}</p>
            </div>
        ))
      }
{/*         <div className="divboton">
            <button className='botoncito'>⏪</button> 
            <button className='botoncito'>⏩</button>
        </div> */}
    </div>
  )
}

export default Countries
