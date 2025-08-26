

import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router';
import Home from './pages/Home';
import Detail from './pages/Detail';
import List from './pages/List';

export const stateContext = React.createContext();

const serviceKey = '6bbab4fdce6620ecc007908138791a2affdd5890dbd90bc585d0e79c91a2c9fd';

const busanUrl = `http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&resultType=json`;

const gyeongnamUrl = `http://apis.data.go.kr/6480000/gyeongnamtourculture/gyeongnamtourculturelist?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&resultType=json`;


function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [result, setResult] = useState([]);

  const [isRowsLoaded, setIsRowsLoaded] = useState(false);
  const [rows, setRows] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetch(busanUrl).then(response => response.json()).then(data => {
      setResult(data.getRecommendedKr.item.map((it) => it.MAIN_TITLE));
      setResult(data.getRecommendedKr.item);
      setIsDataLoaded(true);
    }).catch(error => console.log(error));

    fetch(gyeongnamUrl).then(response => response.json()).then(data => {
      setRows(data.gyeongnamtourculturelist.body.items.item);
      setIsRowsLoaded(true);
    }).catch(error => console.log(error));
  }, []);

  const value = location.pathname === "/list" ? rows : result;

  if (!isDataLoaded && !isRowsLoaded) {
    return <div>데이터를 불러오는 중입니다...</div>;
  } else {
    return (
      <>
        <stateContext.Provider value={value}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:UC_SEQ' element={<Detail />} />
            <Route path='/list' element={<List />} />
          </Routes>
        </stateContext.Provider>
      </>
    );
  };
};

export default App;
