import { connect } from 'react-redux';
import StoryCreate from 'src/components/StoryCreate';
import {
  updateCreationField,
  sumbitStoryCreate,
  clearStoryCreation,
} from 'src/actions/storyCreation';

const mapStateToProps = (state) => ({
  title: state.storyCreation.title,
  synopsis: state.storyCreation.synopsis,
  description: state.storyCreation.description,
  redirect: state.utils.redirect,
  slug: state.storyCreation.slug,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (identifier, newValue) => {
    dispatch(updateCreationField(identifier, newValue));
  },
  sumbitStoryCreate: (title, synopsis, description) => {
    dispatch(sumbitStoryCreate(title, synopsis, description));
  },
  clearStoryCreation: () => {
    dispatch(clearStoryCreation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryCreate);
