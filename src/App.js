import './App.css';
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
const avatar = require("./static/images/avatar/jjn.jpeg")

function App() {
  return (
    <div className="App">
      <Box className="box" sx={{borderBottom: 1, borderColor: 'divider'}}>
        <p></p>
        <Avatar className='avatar' alt='Jasper Niemeyer' src={avatar} sx={{width: '180px', height: 'auto'}}/>
        <div className='header'>
          <p className='heading'>Jasper Niemeyer</p>
          <p id='sub-heading'><em>Software Engineer</em></p>
        </div>
        <div className='nav'>
          <Button variant="contained">CV</Button>
          <Button variant="contained">Projects</Button>
          <Button variant="contained">Bio</Button>
        </div>        
      </Box>
      <div className='bio'>
      <p>
        Primarily Backend Engineer with project experience in Python, MVC, Javascript, Typescript
React, and SQL. Educated in Applied Mathematics with a Computer Science minor and a work
history in customer service bringing strong analytical, communication and problem solving skills
to the table. Eager to build on prior experience and thrive as a full stack developer.
      </p>
      </div>
    </div>
  );
}

export default App;
