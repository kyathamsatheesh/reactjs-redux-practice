import './App.css';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './containers/Header'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
       
        {/* <Switch> */}
          <Route path="/"  element={<ProductListing></ProductListing>}></Route>
          <Route path="/product/:productId" element={<ProductDetail></ProductDetail>}></Route>
          <Route>404 Not Found</Route>
        {/* </Switch> */}
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;