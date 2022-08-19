import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from '../src/globalStyles';
import TokensContext from "./contexts/TokensContext";

import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';

const App = () => {
  const data = [
    {
      'TokenName': 'Ainda Label',
      'TotalTokens': '10000'
    },
    {
      'TokenName': 'Projeto A',
      'TotalTokens': '-999' 
    }
  ]

  return (
    <TokensContext.Provider value={data}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />  
          <Route path="token/:tokenId" element={<EditPage/>} />
          <Route path="token/add" element={<AddPage />} />
        </Routes>
      </BrowserRouter>
    </TokensContext.Provider>
  )
}

export default App