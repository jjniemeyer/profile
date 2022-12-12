import './App.css';
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

import Header from './components/Header';
import Navbar from './components/Navbar'

const avatar = require("./static/images/avatar/jjn.jpeg")


function App() {
  return (
    <div className="App">
      <Box className="box" sx={{borderTop: 0, borderBottom: 1, borderColor: 'divider'}}>
        <Avatar className='avatar' alt='Jasper Niemeyer' src={avatar} sx={{width: '120px', height: 'auto'}}/>
        <Header />
        <Navbar />       
      </Box>
      
      <div className='bio'>      
        <section className='bio-text'>
          <h1>title</h1>
          <p>There are ways to fix a broken sound. </p>
          <ul>
            <li>a</li>
            <li>long</li>
            <li>list</li>
            <li>a</li>
            <li>long</li>
            <li>list</li>
            <li>a</li>
            <li>long</li>
            <li>list</li>
            <li>a</li>
            <li>long</li>
            <li>list</li>
            <li>a</li>
            <li>long</li>
            <li>list</li>
            <li>a</li>
            <li>long</li>
            <li>list</li>
            <li>a</li>
            <li>long</li>
            <li>list</li>
            <li>a</li>
            <li>long</li>
            <li>list</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
