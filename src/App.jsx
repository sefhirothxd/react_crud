import { Routes, Route } from 'react-router-dom';
import LayoutRequiereAuth from './layout/LayoutRequiereAuth';
import LayoutContainerLogin from './layout/LayoutContainerLogin';
import Home from './pages/Home';
import Login from './pages/Login';
import NoFound from './pages/NoFound';
function App() {
  return (
    <div className="App bg-background-alien min-h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center px-6">
      <Routes>
        <Route path="/" element={<LayoutRequiereAuth />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<LayoutContainerLogin />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NoFound />} />
      </Routes>
    </div>
  );
}

export default App;
