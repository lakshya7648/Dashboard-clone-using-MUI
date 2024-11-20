import { useState, useEffect } from 'react';
import { app } from '../../../../../firebaseConfig';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const signInUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/dashboard');
    } catch (error) {
      console.log(`Error with code : ${error.code} and message : ${error.message}`);
    }
  };

  useEffect(() => {
    const checkAuth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/dashboard');
      }
    });
  }, []);
  return (
    <>
      <div>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />

        <button onClick={signInUser}>SignIn</button>
      </div>
    </>
  );
};

export default SignIn;
