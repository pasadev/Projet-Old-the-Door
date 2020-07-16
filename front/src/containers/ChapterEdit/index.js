import { connect } from 'react-redux';

import {
  updateChapterEditField,
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
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateField: (identifier, newValue) => {
    dispatch(updateChapterEditField(identifier, newValue));
    console.log(identifier);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterEdit);
