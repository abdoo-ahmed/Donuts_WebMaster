
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import './App.css';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';

function App() {
  

  const Router = createBrowserRouter([
    {
      path: '/', element: <Layout/> , children :[
      {path: '',element: <Home/>},
      {path: 'Donuts_WebMaster',element: <Home/>},
      {path: 'Products',element: <Products/>},
      {path: 'categories',element: <Categories/>},
      {path: 'menu',element: <Menu/>},
      {path: '*',element: <>
          <main className="d-flex justify-content-center align-items-center  bg-white px-3 py-5">
            <div className="text-center">
              <p className="display-3 fw-bold" style={{ color: '#f06292' }}>404</p>
              <h1 className="mt-3 display-4 fw-semibold text-dark">
                Page not found
              </h1>
              <p className="mt-4 fs-5 text-muted">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
            </div>
          </main>
        </> 
      }

      
    
    
    ]}
    
  ]);
  

  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
