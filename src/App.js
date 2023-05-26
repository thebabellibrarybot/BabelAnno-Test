import './App.css';
//import { Bruno } from '@babelbots/babelbot-demo';
import './App.css';

// comps to exports
import BabelMain from './components/BabelMain';
import { ThemeProvider } from './provider/annoProvider';
import ImgBar from './components/ImgBar/ImgBar';
import ToolBar from './components/ToolBar/ToolBar';
import VersionManager from './components/VersionManager/VersionManager';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <h1>BabelCanvas</h1>
        < BabelMain />
        <br />

        <h1>ImgBar</h1>
        <ImgBar />
        <br />

        <h1>ToolBar</h1>
        <ToolBar />
        <br />

        <h1>Version Manager</h1>
        <VersionManager />
        <br />

      </ThemeProvider>
    </div>
  );
}

export default App;
