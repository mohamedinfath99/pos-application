import 'antd/dist/reset.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import CustomerPage from './pages/CustomerPage';
import BillPage from './pages/BillPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/items' element={<ItemPage />} />
        <Route path='/customer' element={<CustomerPage />} />
        <Route path='/bill' element={<BillPage />} />
      </Routes>
    </div>
  );
}

export default App;
