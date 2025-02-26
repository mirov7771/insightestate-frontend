import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router';
import { Listing } from '@/pages/Listing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/property">
          <Route path=":id" element={<h1>Property page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
