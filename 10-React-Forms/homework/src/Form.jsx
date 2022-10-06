import React from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if(!input.password) {
    errors.password = "Password is required"
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid"
  }

  return errors;
};

export default function  Form() {

  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');

  const [state, setState] = React.useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = React.useState({
    username: 'Username is required',
    password: 'Password is required'
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

    setErrors(validate({
      ...state,
      [e.target.name]: e.target.value
    }));

  }

  return (
    <div>
        <form>
            <div>
              <label>Username:</label>
              <input 
                type="text" 
                name="username" 
                value={state.username} 
                onChange = {(e) => handleInputChange(e)}
                className={errors.username && 'danger'}
                />
                {errors.username && (
                  <p className="danger">{errors.username}</p>
                )}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={state.password} 
                onChange = {(e) => handleInputChange(e)}
                className={errors.password && 'danger'}
                />
                {errors.password && (
                  <p className="danger">{errors.password}</p>
                )}
            </div>
            <br/>
            <input type="submit" disabled={errors.username || errors.password ? true : false}/>
        </form>
    </div>
  )
}
