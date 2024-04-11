import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useUsers } from 'hooks/useUsers';

function VerificationPage() {
  const redirectToLogin = true;

  const { verificationToken } = useParams();
  const { getVerify } = useUsers();

  useEffect(() => {
    getVerify(verificationToken);
  }, [verificationToken, getVerify]);

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return <div>Verification in progress...</div>;
}

export default VerificationPage;
