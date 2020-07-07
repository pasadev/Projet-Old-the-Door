import { connect } from 'react-redux';

import AdventureSmall from 'src/components/AdventureSmall';

// === mapStateToProps
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(AdventureSmall);
