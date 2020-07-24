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
  setValidationErrorAdvEditFalse,
  setValidationErrorChapEditFalse,
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
  advSelectedSlug: state.adventures.adventureSelected.slug,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAdvEditSelected: (slug) => {
    dispatch(fetchAdvEditSelected(slug));
  },
  displayLoader: () => {
    dispatch(displayLoader());
  },
  submitAdvEditForm: () => {
    dispatch(submitAdvEditForm());
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
  setValidationErrorAdvEditFalse: () => {
    dispatch(setValidationErrorAdvEditFalse());
  },
  setValidationErrorChapEditFalse: () => {
    dispatch(setValidationErrorChapEditFalse());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryEdit);
