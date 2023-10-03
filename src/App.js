import avatar from './image/avatar.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <body className='App-body'>
        <div className="Body-kiri">
          <img src={avatar} className="Header-logo" alt="avatar" />
          <li>Pria</li>
          <li>Mahasiswa</li>
        </div>

        <div className='Body-kanan'>
          <div>
            <p className='Header-name'>
              Johan Reinaldo Jianta
            </p>
            <hr className='Garis-name'></hr>
          </div>
          <div className='List-info'>
            <li>Angkatan 2022</li>
            <li>Informatika - Full Stack Development</li>
            <li>Jalur Sukses: Corporate Entrepreneurship</li>
            <li>Hobi: Tidur</li>
          </div>
        </div>
      </body>

      <div className='Body-bawah'>
        <hr></hr>
        <p>Riwayat Organisasi:</p>
        <li>Student Union Informatika 2023</li>
      </div>
    </div>
  );
}

export default App;
