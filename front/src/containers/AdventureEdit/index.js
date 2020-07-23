import { connect } from 'react-redux';

import {
  updateAdventureEditField,
} from 'src/actions/storyEdit';

import AdventureEdit from 'src/components/AdventureEdit';

// === mapStateToProps
const mapStateToProps = (state) => ({
  title: state.storyEdit.title,
  synopsis: state.storyEdit.synopsis,
  description: state.storyEdit.description,
  validationErrorAdvEdit: state.storyEdit.validationErrorAdvEdit,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateField: (identifier, newValue) => {
    dispatch(updateAdventureEditField(identifier, newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdventureEdit);
