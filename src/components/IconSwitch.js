import React from 'react';
import PropTypes from 'prop-types';

export default function IconSwitch(props) {
  const { icon } = props;

  const onSwitch = () => {
    props.onSwitch();
  }

  return (
    <div className="set-view">
      <div className="material-icons" onClick={onSwitch}>{icon}</div>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
};