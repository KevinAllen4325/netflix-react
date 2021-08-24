import { BrowserRouter as Router, Route } from 'react-router-dom';
import Registration from "./assets/components/sections/registration/Register";
//CSS
import './assets/css/normalize.css';
import './assets/css/carousel.css'
import './assets/css/styles.css';
//COMPONENTS
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Homepage from './assets/components/Homepage';
import Movie from './assets/components/Movie';




const App = () => {
  return (
    <Router>
        <div className="main">
            <div className="container">
                <Header />
                <Route exact path="/netflix-react/" component={Homepage} />
                <Route exact path="/netflix-react/registration" component={Registration} />
                <Route exact path="/netflix-react/movies-shows/:movieId" component={Movie} />
                <Footer />
            </div>
        </div>
    </Router>
  )
}

export default App