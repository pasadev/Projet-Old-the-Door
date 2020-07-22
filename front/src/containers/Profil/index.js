import { connect } from 'react-redux';

import Profil from 'src/components/Profil';

import { redirectOff } from 'src/actions/utils';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  redirectOff: () => {
    dispatch(redirectOff());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
