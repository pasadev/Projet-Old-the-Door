import { connect } from 'react-redux';
import StoryCreate from 'src/components/StoryCreate';
import { updateCreationField } from 'src/actions/storyCreation';

const mapStateToProps = (state) => ({
  title: state.storyCreation.title,
  synopsis: state.storyCreation.title,
  description: state.storyCreation.description,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (identifier, newValue) => {
    dispatch(updateCreationField(identifier, newValue));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(StoryCreate);
