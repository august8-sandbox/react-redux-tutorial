import { connect } from 'react-redux';
import Button from '../components/Button';
import { actionTimes } from '../actions/CounterAction';

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(actionTimes()); },
  actionLabel: 'x',
});

export default connect(null, mapDispatchToProps)(Button);
