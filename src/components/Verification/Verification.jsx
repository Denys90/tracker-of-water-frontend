export const Verification = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const verificationToken = urlParams.get('token');
  console.log('verificationToken====>>>', verificationToken);
  return (
    <>
      {' '}
      <div>
        <p>Verification Token: {verificationToken}</p>
      </div>
    </>
  );
};
