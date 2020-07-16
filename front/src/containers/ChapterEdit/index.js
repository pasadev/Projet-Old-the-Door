import { connect } from 'react-redux';

import {
  updateChapterEditField,
} from 'src/actions/storyEdit';

import ChapterEdit from 'src/components/ChapterEdit';

// === mapStateToProps
const mapStateToProps = (state) => ({
  editOption: state.storyEdit.editOption,
  chapters: state.storyEdit.chapters,
  title: state.storyEdit.chapterEdit.title,
  content: state.storyEdit.chapterEdit.content,
  keyword: state.storyEdit.chapterEdit.keyword,
  lockword: state.storyEdit.chapterEdit.lockword,
  unlockText: state.storyEdit.chapterEdit.unlockText,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateField: (identifier, newValue) => {
    dispatch(updateChapterEditField(identifier, newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterEdit);
