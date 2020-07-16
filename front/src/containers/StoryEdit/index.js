import { connect } from 'react-redux';

import { displayLoader } from 'src/actions/utils';
import {
  fetchAdvEditSelected,
  submitAdvEditForm,
  setEditOption,
  fetchChapterEditSelected,
  clearChapterEditField,
} from 'src/actions/storyEdit';

import StoryEdit from 'src/components/StoryEdit';

// === mapStateToProps
const mapStateToProps = (state) => ({
  loading: state.utils.loading,
  storyEdit: state.storyEdit,
  redirect: state.utils.redirect,
  chapters: state.storyEdit.chapters,
  editOption: state.storyEdit.editOption,
  initialTitle: state.storyEdit.initialTitle,
  chapterEdit: state.storyEdit.chapterEdit,
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
  setEditOption: (newValue) => {
    dispatch(setEditOption(newValue));
  },
  fetchChapterEditSelected: (id) => {
    dispatch(fetchChapterEditSelected(id));
  },
  clearChapterEditField: () => {
    dispatch(clearChapterEditField());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryEdit);
