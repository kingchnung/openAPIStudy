
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const url = 'http://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=6bbab4fdce6620ecc007908138791a2affdd5890dbd90bc585d0e79c91a2c9fd&numOfRows=10&pageNo=1&resultType=json';


function App() {
  const [result, setResult] = useState([]);

  useEffect(()=> {
    fetch(url).then(response => response.json()).then(data => {
      setResult(data.getWalkingKr.item)
    }).catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h3>부산 걷기</h3>
      <table className='App-table'>
        <thead>
          <tr>
            <th>NO</th>
            <th>TITLE</th>
            <th>LAT</th>
            <th>LNG</th>
            <th>PLACE</th>
          </tr>
        </thead>
        <tbody>
          {
            result.map(item => (
              <tr key={item.UC_SEQ}>
                <td>{item.UC_SEQ}</td>
                <td>{item.TITLE}</td>
                <td>{item.LAT}</td>
                <td>{item.LNG}</td>
                <td>{item.PLACE}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className='btns'>
      <Button variant="success" className='btn'>Success</Button>
      <Button variant="primary" className='btn'>Primary</Button>
      <Button variant="secondary" className='btn'>Secondary</Button>
      <Button variant="success" className='btn'>Success</Button>
      <Button variant="warning" className='btn'>Warning</Button>
      <Button variant="danger" className='btn'>Danger</Button>
      <Button variant="info" className='btn'>Info</Button>
      <Button variant="light" className='btn'>Light</Button>
      <Button variant="dark" className='btn'>Dark</Button>
      <Button variant="link" className='btn'>Link</Button>
      </div>
    </div>
  );
};

export default App;
