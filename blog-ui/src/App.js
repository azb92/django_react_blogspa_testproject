import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CategoryDetail from './components/Category/CategoryDetail'
import PostDetail from './components/Post/PostDetail'
import TagDetail from './components/Tag/TagDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router> 
      <Header />
      <Sidebar />      
      <Switch>
        <Route path="/category/:slug" exact component={CategoryDetail} />
        <Route path="/post/:slug" exact component={PostDetail} />
        <Route path="/tag/:slug" exact component={TagDetail} />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
