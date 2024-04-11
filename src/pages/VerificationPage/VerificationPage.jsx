// import { useSearchParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useUsers } from 'hooks/useUsers';
import { useEffect } from 'react';

function VerificationPage() {
  // const [searchParams] = useSearchParams();
  const { getVerify } = useUsers();
  // const verificationToken = searchParams.get('verificationToken');
  // console.log(verificationToken);
  const redirectToLogin = true;

  const urlParams = new URLSearchParams(window.location.search);
  const verificationToken = urlParams.get('verificationToken');
  console.log('urlParams================>', urlParams);

  useEffect(() => {
    console.log('verificationToken================> ', verificationToken);
    getVerify({ verificationToken });
  }, [getVerify, verificationToken]);

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return <div>The verification was successful</div>;
}

export default VerificationPage;
