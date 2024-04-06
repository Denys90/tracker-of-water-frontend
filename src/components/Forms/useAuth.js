import { useUsers } from 'hooks/useUsers';

export const useAuth = ({ formSubmitted }) => {
  const { signUp, signIn } = useUsers();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!formSubmitted) {
      const { email, password } = e.target.elements;

      signUp({
        email: email.value,
        password: password.value,
      });
    } else {
      const { email, password } = e.target.elements;
      signIn({ email: email.value, password: password.value });
    }
    form.reset();
  };
  return { handleSubmit };
};
