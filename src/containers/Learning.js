import {connect} from 'react-redux';
import Learning from '../screens/Learning';
import {getPhrases, solutionButtonText} from '../actions';
function mapStateToProps(state) {
  return {
    state,
    categories: state.categories,
    phrases: state.phrases,
    text: state.solutionButtonText,
  };
}
const mapDispatchToProps = {
  getPhrases,
  solutionButtonText,
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
