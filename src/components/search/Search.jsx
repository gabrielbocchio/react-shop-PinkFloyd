import { useState, useEffect } from 'react'
import "./Search.css"

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const [gif, setGif] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (keyword.trim() !== '') {
      setLoading(true);
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=BaiUn32GKmpX35mlKXc3VwWYdpmxRB2f&q=${keyword}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
        .then(response => response.json())
        .then(data => {
          setGif(data.data);
          setLoading(false);
        })
        .catch(e => {
          alert(e);
          setLoading(false);
        });
    }
  }, [keyword]);

  const handleSearch = () => {
    const searchInput = document.getElementById('searcher');
    setKeyword(searchInput.value);
  };

  if (loading) {
    return "Loading...";
  }

  return (
    <>
      <div className="search-container">
        <h1 className="search-title">GIFS sobre qué?</h1>
        <div className="search-input">
          <input type="text" placeholder="Buscar GIFs" className="input-field" id='searcher' />
          <button className="search-button" onClick={handleSearch}>Buscar</button>
        </div>
        <ul>
          {gif.map((img, i) => (
            <li style={{ listStyle: 'none' }} key={i}>
              <img src={img.images.fixed_width.url} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Search
