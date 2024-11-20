import { useState } from 'react';
import { app } from '../../../../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [formData, setFormData] = useState({});
  const auth = getAuth(app);

  const handleChange = (event) => {
    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const signUpUser = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

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

        <button onClick={signUpUser}>Signup</button>
      </div>
    </>
  );
};

export default Signup;
