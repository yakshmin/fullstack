import PropTypes from 'prop-types';

const Main = ({ children }) => {
  return (
    <div className="hii">
      <aside>
        sidebar
      </aside>
      <main>
        {children}
      </main>
      
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;