import {connect} from 'react-redux';
import Learning from '../screens/Learning';
import {getPhrases, getRandomPhrase} from '../actions';
function mapStateToProps(state) {
  return {
    state,
    categories: state.categories,
    phrases: state.phrases,
    randomPhrase: state.randomPhrase,
  };
}
const mapDispatchToProps = {
  getPhrases,
  getRandomPhrase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
