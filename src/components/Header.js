import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import Link from '@mui/material/Link'


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
            <Link color="inherit" href="mailto:jasper.j.niemeyer@gmail.com">
              <EmailIcon className='email'>send email to jasper.j.niemeyer@gmail.com</EmailIcon>
              <div className='hidden'>Right click to copy email address</div>
            </Link> 
          </div>
        </div>
  );
}

export default Header