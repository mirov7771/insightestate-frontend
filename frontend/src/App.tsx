import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router';

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="/listing" element={<h1>Listing Page</h1>} />
          <Route path="/property">
            <Route path=":id" element={<h1>Property page</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
