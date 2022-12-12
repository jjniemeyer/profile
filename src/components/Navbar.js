import Button from '@mui/material/Button'

function Navbar() {
  return (
    <div className='nav'>
      <Button variant="contained">Education</Button>
      <Button variant="contained">Skills</Button>
      <Button variant="contained">Projects</Button>
      <Button variant="contained">Bio</Button>
    </div> 
  );
}

export default Navbar