import {connect} from 'react-redux';
import Home from '../screens/Home';
import {getCategories, getPhrases} from '../actions';

function mapStateToProps(state) {
  return {
    state,
    categories: state.categories,
  };
}
const mapDispatchToProps = {
  getCategories,
  getPhrases,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
