import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from '../src/globalStyles';

import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="token/:tokenId" element={<EditPage/>} />
        <Route path="token/add" element={<AddPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

