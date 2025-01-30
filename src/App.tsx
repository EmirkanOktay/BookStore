import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          fontFamily: 'Arial, sans-serif',
        }}
      />
    </div>
  );
}

export default App;
