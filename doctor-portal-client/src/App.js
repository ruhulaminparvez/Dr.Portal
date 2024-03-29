import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto' data-theme='winter'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
