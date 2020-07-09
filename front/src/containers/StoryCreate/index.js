import { connect } from 'react-redux';
import StoryCreate from 'src/components/StoryCreate';
import { updateCreationField } from 'src/actions/storyCreation';

const mapStateToProps = (state) => ({
  title: state.storyCreation.title,
  synopsis: state.storyCreation.synopsis,
  description: state.storyCreation.description,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateCreationField(newValue, name));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(StoryCreate);
