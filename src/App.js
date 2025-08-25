
import { useEffect, useState } from 'react';
import './App.css';

const url = 'http://apis.data.go.kr/6480000/gyeongnammuseum/gyeongnammuseumList?serviceKey=6bbab4fdce6620ecc007908138791a2affdd5890dbd90bc585d0e79c91a2c9fd&pageNo=1&numOfRows=4&resultType=json';


function App() {
  const [result, setResult] = useState([]);

  useEffect(()=> {
    fetch(url).then(response => response.json()).then(data => {
      setResult(data.gyeongnammuseumList.body.items.item)
    }).catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h3>경산남도_박물관 정보</h3>
      <table className='App-table'>
        <thead>
          <tr>
            <th>고유번호</th>
            <th>기관명</th>
            <th>소재지</th>
            <th>홈페이지</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody>
          {
            result.map(item => (
              <tr key={item.entid}>
                <td>{item.entid}</td>
                <td>{item.title}</td>
                <td>{item.roadaddress}</td>
                <td>{item.homepage}</td>
                <td>{item.tel}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;
