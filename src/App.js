import Display from './components/Display/Display';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="app">
      <Display />
      <ToastContainer />
    </div>
  );
}

export default App;
