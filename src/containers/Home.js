import {connect} from 'react-redux';
import Home from '../screens/Home';
import {setCategories} from '../actions';

function mapStateToProps(state) {
  return {
    state,
    categories: state.categories,
  };
}
const mapDispatchToProps = {
  setCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
