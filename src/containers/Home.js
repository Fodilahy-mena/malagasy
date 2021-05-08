import {connect} from 'react-redux';
import Home from '../screens/Home';
import {getCategories, getPhrases, getLanguageName} from '../actions';

function mapStateToProps(state) {
  return {
    state,
    categories: state.categories,
    nativeLanguage: state.nativeLanguage,
  };
}
const mapDispatchToProps = {
  getCategories,
  getPhrases,
  getLanguageName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
