import './App.css';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/home-decoration')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error("Error fecthing data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [])

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <div className='container'>
        {data.products.map(product => {
          return (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          )
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default App;