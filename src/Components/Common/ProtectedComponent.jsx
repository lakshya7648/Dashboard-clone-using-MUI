import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedComponent = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('signin');
      }
    });
  }, []);
  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedComponent;
