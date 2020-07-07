import { connect } from 'react-redux';
import StoryCreate from 'src/components/StoryCreate';
import { updateCreationField } from 'src/actions/storyCreation';

const mapStateToProps = (state) => ({
  title: state.title,
  synopsis: state.title,
  description: state.description,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateCreationField(newValue, name));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(StoryCreate);
