import {connect} from 'react-redux';
import Learning from '../screens/Learning';
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

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
