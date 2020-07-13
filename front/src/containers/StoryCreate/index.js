import { connect } from 'react-redux';
import StoryCreate from 'src/components/StoryCreate';
import {
  updateCreationField,
  sumbitStoryCreate,
  redirectOn,
  redirectOff,
} from 'src/actions/storyCreation';

const mapStateToProps = (state) => ({
  title: state.storyCreation.title,
  synopsis: state.storyCreation.synopsis,
  description: state.storyCreation.description,
  redirect: state.storyCreation.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (identifier, newValue) => {
    dispatch(updateCreationField(identifier, newValue));
  },
  sumbitStoryCreate: (title, synopsis, description) => {
    dispatch(sumbitStoryCreate(title, synopsis, description));
  },
  redirectOn: () => {
    redirectOn();
  },
  redirectOff: () => {
    redirectOff();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryCreate);
