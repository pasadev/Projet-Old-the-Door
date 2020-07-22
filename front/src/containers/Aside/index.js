import { connect } from 'react-redux';

import { toggleAsideOpen } from 'src/actions/utils';

import Aside from 'src/components/Aside';

// === mapStateToProps
const mapStateToProps = (state) => ({
  asideOpen: state.utils.asideOpen,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleAsideOpen: () => {
    dispatch(toggleAsideOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
