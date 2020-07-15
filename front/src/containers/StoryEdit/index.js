import { connect } from 'react-redux';

import { displayLoader } from 'src/actions/utils';
import {
  fetchAdvEditSelected,
  submitAdvEditForm,
} from 'src/actions/storyEdit';

import StoryEdit from 'src/components/StoryEdit';

// === mapStateToProps
const mapStateToProps = (state) => ({
  loading: state.utils.loading,
  storyEdit: state.storyEdit,
  redirect: state.utils.redirect,
  chapters: state.storyEdit.chapters,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAdvEditSelected: (slug) => {
    dispatch(fetchAdvEditSelected(slug));
  },
  displayLoader: () => {
    dispatch(displayLoader());
  },
  submitAdvEditForm: (title, synopsis, description, id) => {
    dispatch(submitAdvEditForm(title, synopsis, description, id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryEdit);
