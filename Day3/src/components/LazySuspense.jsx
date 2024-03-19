
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';


const LazySuspense = ({ component: Component, ...rest }) => {
  return (

    <ErrorBoundary>

    <Suspense fallback="Loading...">
      <Component {...rest} />
    </Suspense>
    </ErrorBoundary>
  );
};

LazySuspense.propTypes = {
  component: PropTypes.elementType.isRequired
};

export default LazySuspense;