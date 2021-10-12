import './App.css';
import Video from 'containers/Video';
import Navbar from 'components/ui/navbar/Navbar';
import Content from 'containers/content/content';
import PageUnderContruction from 'components/UnderConstruction/UnderConstruction';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Video />
      <PageUnderContruction/>
    </div>
  );
}

export default App;
