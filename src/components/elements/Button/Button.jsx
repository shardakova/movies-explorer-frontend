import './Button.sass';

function Button (props) {
  return (
    <button
      type={props.htmlType || 'button'}
      aria-label={props.ariaLabel}
      disabled={props.disabled}
      className={`button
      ${props.size ? `button_size_${props.size}` : ''}
      ${props.color ? `button_color_${props.color}` : ''}
      ${props.type ? `button_type_${props.type}` : ''}
      ${props.className ? props.className : ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
