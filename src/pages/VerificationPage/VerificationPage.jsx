import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useUsers } from 'hooks/useUsers';
import { useEffect } from 'react';

function VerificationPage() {
  const { verificationToken } = useParams();

  const { getVerify } = useUsers();

  const redirectToLogin = true;

  useEffect(() => {
    console.log(
      'verificationToken on verify Page================> ',
      verificationToken
    );
    getVerify({ verificationToken });
  }, [getVerify, verificationToken]);

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return <div>The verification was successful</div>;
}

export default VerificationPage;
