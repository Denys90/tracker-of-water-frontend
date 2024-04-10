import { Navigate } from 'react-router-dom';

function VerificationPage() {
  const redirectToLogin = true;

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return <div>The verification was successful</div>;
}

export default VerificationPage;
