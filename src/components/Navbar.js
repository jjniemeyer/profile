import Button from '@mui/material/Button'

function Navbar() {

  function show(id) {
    const section = document.querySelector(`.${id}`);
    section.style.display = 'block'
  }

  function hide(ids) {
    ids.forEach((id) => {
      const section = document.querySelector(`.${id}`);
      section.style.display = 'none';
    });
  }

  function handleClick(event) {
    const hidden = ['education', 'skills', 'projects', 'bio'].filter(section => section !== event.target.id);
    hide(hidden);
    console.log(hidden)
    show(event.target.id);
  }

  return (
    <div className='nav'>
      <Button id='education' variant="contained" onClick={handleClick}>Education</Button>
      <Button id='skills' variant="contained" onClick={handleClick}>Skills</Button>
      <Button id='projects' variant="contained" onClick={handleClick}>Projects</Button>
      <Button id='bio' variant="contained" onClick={handleClick}>Bio</Button>
    </div>
  );
}

export default Navbar