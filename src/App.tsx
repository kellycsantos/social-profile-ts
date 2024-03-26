import './App.css';
import Container from './components/Container';
import List from './components/SocialLinks';
import Icon from './assets/avatar-jessica.jpeg'

function App() {

  const socialInfo = (
    [
      { name: 'Github', link: '#' },
      { name: 'Frontend Mentor', link: '#' },
      { name: 'Linkedin', link: '#' },
      { name: 'Twitter', link: '#' },
      { name: 'Instagram', link: '#' },
    ]
  )
  return (
    <div className="App">
      <Container>
        <img src={Icon} alt='Jessica' className="avatar" />
        <div className='info'>
          <h1>Jessica Randall</h1>
          <h2>London, United Kingdom</h2>
          <p>"Front-end developer and avid reader."</p>
        </div>
        <List items={socialInfo} />
      </Container>
    </div>
  );
}

export default App;
