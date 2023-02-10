import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample(props) {
  const now=props.per
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default WithLabelExample;