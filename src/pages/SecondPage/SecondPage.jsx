import { Link } from 'react-router-dom';

const SecondPage = () => {
  return (
    <div>
      <div>
        <h2>Second Page</h2>
        <Link to="/second/5">Half</Link>
      </div>
    </div>
  );
};

export default SecondPage;
