import './App.css';
//import { Bruno } from '@babelbots/babelbot-demo';
import './App.css';

// comps to exports
import BabelCanvas from './components/BabelCanvas/BabelCanvas';
import { ThemeProvider } from './provider/annoProvider';
import ImgBar from './components/ImgBar/ImgBar';
import ToolBar from './components/ToolBar/ToolBar';
import VersionManager from './components/VersionManager/VersionManager';
import BabelBaseAnnotator from './base/base';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BabelBaseAnnotator />
      </ThemeProvider>
    </div>
  );
}

export default App;
