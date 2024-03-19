import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './Navbar';


const Main = ({ children }) => {
  return (
    <div className="hi">
      <header>
       <Navbar/>
      </header>
      <main>
        {children}
      </main>
     
      <Footer/>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;