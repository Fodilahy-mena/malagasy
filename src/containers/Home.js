import {connect} from 'react-redux';
import Home from '../screens/Home';
import {getCategories} from '../actions';

function mapStateToProps(state) {
  return {
    state,
    categories: state.categories,
  };
}
const mapDispatchToProps = {
  getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
