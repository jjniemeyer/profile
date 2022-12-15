import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import Link from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'


function Header() {
  return (
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
            <Tooltip title="right click to copy email address" arrow>
              <Link color="inherit" href="mailto:jasper.j.niemeyer@gmail.com">
                <EmailIcon className='email'>send email to jasper.j.niemeyer@gmail.com</EmailIcon>
              </Link> 
            </Tooltip>
          </div>
        </div>
  );
}

export default Header