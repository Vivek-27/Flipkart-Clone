// components
import Header from './components/header/Header';
import Home from './components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';

function App() {
  //comment2
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box fontStyle={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
