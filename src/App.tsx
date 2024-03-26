import './App.css';
import Container from './components/Container';
import List from './components/SocialLinks';
import Icon from './assets/avatar-jessica.jpeg'

function App() {

  const socialInfo = (
    [
      {name: 'Github', link: '#'},
      {name: 'Frontend Mentor', link: '#'},
      {name: 'Linkedin', link: '#'},
      {name: 'Twitter', link: '#'},
      {name: 'Instagram', link: '#'},
    ]
  
    )
  return (
    <div className="App">
      <Container>
        <img src={Icon} alt='Jessica' className="avatar" />
       <span className='info'>
        <h2>  Jessica Randall</h2>
        <h4>London, United Kingdom</h4>
        <p>"Front-end developer and avid reader."</p>
       </span>
        <List items={socialInfo} />
      </Container>
    </div>
  );
}

export default App;
