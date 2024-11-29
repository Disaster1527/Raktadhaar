import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import Search from './pages/Search';
import Tips from './pages/Tips';
import Thanks from './pages/Thanks';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;