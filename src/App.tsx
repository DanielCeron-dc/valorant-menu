import './App.css';
import Video from 'containers/Video';
import Navbar from 'components/ui/navbar/Navbar';
import Content from 'containers/content/content';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Video/> 
    </div>
  );
}

export default App;
