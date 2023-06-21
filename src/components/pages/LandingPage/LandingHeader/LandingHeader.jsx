import './LandingHeader.sass';

function LandingHeader (props) {
  return (
    <h2 className="landing-header">{props.children}</h2>
  );
}

export default LandingHeader;
