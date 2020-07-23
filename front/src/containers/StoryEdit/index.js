import { connect } from 'react-redux';

import { displayLoader } from 'src/actions/utils';
import {
  fetchAdvEditSelected,
  submitAdvEditForm,
  setEditOption,
  fetchChapterEditSelected,
  clearChapterEdit,
  clearStoryEdit,
  setValidationErrorAdvEditTrue,
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
  chapterEdit: state.chapterEdit,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAdvEditSelected: (slug) => {
    dispatch(fetchAdvEditSelected(slug));
  },
  displayLoader: () => {
    dispatch(displayLoader());
  },
  submitAdvEditForm: (title, synopsis, description, idStory) => {
    dispatch(submitAdvEditForm(title, synopsis, description, idStory));
  },
  setEditOption: (newValue) => {
    dispatch(setEditOption(newValue));
  },
  fetchChapterEditSelected: (id) => {
    dispatch(fetchChapterEditSelected(id));
  },
  clearChapterEdit: () => {
    dispatch(clearChapterEdit());
  },
  clearStoryEdit: () => {
    dispatch(clearStoryEdit());
  },
  setValidationErrorAdvEditTrue: () => {
    dispatch(setValidationErrorAdvEditTrue());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryEdit);
