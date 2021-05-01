import {connect} from 'react-redux';
import Learning from '../screens/Learning';
import {getPhrases} from '../actions';

function mapStateToProps(state) {
  return {
    state,
    categories: state.categories,
    phrases: state.phrases,
  };
}
const mapDispatchToProps = {
  getPhrases,
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
