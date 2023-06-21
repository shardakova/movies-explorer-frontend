import './Switch.sass';

function Switch (props) {
  return (
    <div
      role="checkbox"
      tabIndex="0"
      className={`switch ${props.isActive ? 'switch_active' : ''}`}
      onClick={() => props.onChange()}
      onKeyDown={event => {
        if (event.code === 'Enter' || event.code === 'Space') {
          event.preventDefault();
          props.onChange();
        }
      }}
    >
      <div className="switch__indicator">
        <div className="switch__pin" />
      </div>
      <div className="switch__text">
        {props.text}
      </div>
    </div>
  );
}

export default Switch;
