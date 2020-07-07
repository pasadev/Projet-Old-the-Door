import { connect } from 'react-redux';

// === on importe le composant de présentation
import Home from 'src/components/Home';

// === mapStateToProps
const mapStateToProps = (state) => ({
  adventures: state.adventures.adventures,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
