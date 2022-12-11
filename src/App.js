import './App.css';
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
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
          <div className='header-icons'>
            <Link color="inherit" target="_blank" href="https://www.linkedin.com/in/jjniemeyer/">
              <LinkedInIcon >LinkedIn profile</LinkedInIcon>
            </Link>
            <Link color="inherit" target="_blank" href="https://github.com/jjniemeyer">
              <GitHubIcon>GitHub profile</GitHubIcon>
            </Link>
            <Link color="inherit" href="mailto:jasper.j.niemeyer@gmail.com">
              <EmailIcon className='email'>send email to jasper.j.niemeyer@gmail.com</EmailIcon>
              <div className='hidden'>Right click to copy email address</div>
            </Link>
            
          </div>
        </div>
        <div className='nav'>
          <Button variant="contained">Education</Button>
          <Button variant="contained">Skills</Button>
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
