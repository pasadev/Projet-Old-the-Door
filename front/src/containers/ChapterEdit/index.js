import { connect } from 'react-redux';

import {
  updateChapterEditField,
  submitNewChapterForm,
  submitChapterEditForm,
  setParentChapterChoice,
  setErrorKeyLockTrue,
  setValidationErrorChapEditTrue,
  setValidationErrorChapEditFalse,
} from 'src/actions/storyEdit';

import { checkWordInContent } from 'src/utils';

import ChapterEdit from 'src/components/ChapterEdit';

// === mapStateToProps
const mapStateToProps = (state) => ({
  editOption: state.storyEdit.editOption,
  chapters: state.storyEdit.chapters,
  title: state.chapterEdit.title,
  content: state.chapterEdit.content,
  keyword: state.chapterEdit.keyword,
  lockword: state.chapterEdit.lockword,
  unlockText: state.chapterEdit.unlockText,
  chapterEdit: state.chapterEdit,
  parentChapterOption: state.storyEdit.parentChapterOption,
  errorKeyLock: state.chapterEdit.errorKeyLock,
  validationErrorChapEdit: state.chapterEdit.validationErrorChapEdit,
  firstChapter: state.storyEdit.firstChapter,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateField: (identifier, newValue) => {
    dispatch(updateChapterEditField(identifier, newValue));
  },
  submitNewChapterForm: () => {
    dispatch(submitNewChapterForm());
  },
  submitChapterEditForm: () => {
    dispatch(submitChapterEditForm());
  },
  setParentChapterChoice: (parentChapterOption) => {
    dispatch(setParentChapterChoice(parentChapterOption));
  },
  setErrorKeyLockTrue: () => {
    dispatch(setErrorKeyLockTrue());
  },
  checkWordInContent: (word, content) => {
    dispatch(checkWordInContent(word, content));
  },
  setValidationErrorChapEditTrue: () => {
    dispatch(setValidationErrorChapEditTrue());
  },
  setValidationErrorChapEditFalse: () => {
    dispatch(setValidationErrorChapEditFalse());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterEdit);
