// ProductsContext.jsx
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://kdmadmpupwdyqcivektl.supabase.co/rest/v1/products', {
      headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkbWFkbXB1cHdkeXFjaXZla3RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NTQ5MzUsImV4cCI6MjA2ODMzMDkzNX0.ZL2xY6pTERryFq7gQbzEJUm98plZpY-_qjpz6i2b-nc',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkbWFkbXB1cHdkeXFjaXZla3RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NTQ5MzUsImV4cCI6MjA2ODMzMDkzNX0.ZL2xY6pTERryFq7gQbzEJUm98plZpY-_qjpz6i2b-nc'
      }
    })
    .then(res => {
      setProducts(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
}


