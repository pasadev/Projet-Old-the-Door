import { connect } from 'react-redux';

import {
  updateAdventureEditField,
  // sumbitStoryCreate,
} from 'src/actions/adventureEdit';

import AdventureEdit from 'src/components/AdventureEdit';

// === mapStateToProps
const mapStateToProps = (state) => ({
  title: state.storyEdit.title,
  synopsis: state.storyEdit.synopsis,
  description: state.storyEdit.description,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateField: (identifier, newValue) => {
    console.log(identifier);
    dispatch(updateAdventureEditField(identifier, newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdventureEdit);
