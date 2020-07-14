import { connect } from 'react-redux';

import { displayLoader } from 'src/actions/utils';
import {
  fetchAdvEditSelected,
  submitAdvEditForm,
} from 'src/actions/adventureEdit';

import StoryEdit from 'src/components/StoryEdit';

// === mapStateToProps
const mapStateToProps = (state) => ({
  loading: state.utils.loading,
  storyEdit: state.storyEdit,
  redirect: state.utils.redirect,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAdvEditSelected: (slug) => {
    dispatch(fetchAdvEditSelected(slug));
  },
  displayLoader: () => {
    dispatch(displayLoader());
  },
  submitAdvEditForm: (title, synopsis, description) => {
    dispatch(submitAdvEditForm(title, synopsis, description));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryEdit);
