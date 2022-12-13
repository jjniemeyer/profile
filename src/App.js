import './App.css';
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Header from './components/Header';
import Navbar from './components/Navbar'
import Content from './components/Content'

const avatar = require("./static/images/avatar/jjn.jpeg")


function App() {
  return (
    <div className="App">
      <Box className="box" sx={{borderTop: 0, borderBottom: 1, borderColor: 'divider'}}>
        <Avatar className='avatar' alt='Jasper Niemeyer' src={avatar} sx={{width: '120px', height: 'auto'}}/>
        <Header />
        <Navbar />       
      </Box>
      <Content />
    </div>
  );
}

export default App;
