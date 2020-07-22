import { connect } from 'react-redux';

import {
  updateChapterEditField,
  submitNewChapterForm,
  submitChapterEditForm,
  setParentChapterChoice,
  setErrorKeyLockTrue,
} from 'src/actions/storyEdit';

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
  chaperEditId: state.storyEdit.chaperEditId,
  chapterEdit: state.chapterEdit,
  parentChapterOption: state.storyEdit.parentChapterOption,
  errorKeyLock: state.chapterEdit.errorKeyLock,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterEdit);
