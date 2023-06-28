import './Loader.sass';

function Loader (props) {
  return (
    <div className={`loader ${props.className ? props.className : ''}`}></div>
  );
}

export default Loader;
