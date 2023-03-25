import { useSelector } from 'react-redux';
import Login from './pages/Login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat.jsx';
import ChatDetail from './pages/ChatDetail.jsx';
import Sidebar from './components/Sidebar.jsx';
import PageContiner from './containers/PageContiner.jsx';
function App() {
  const { user } = useSelector(state => state.user);
  return (
    <>
      {
        !user ? <Login /> :
          <Router>
            <PageContiner>
              <Sidebar />
              <Routes>
                <Route path='/' element={<Chat />} />
                <Route path='chat/:id' element={<ChatDetail />} />
              </Routes>
            </PageContiner>
          </Router>
      }
    </>
  );
}

export default App;
