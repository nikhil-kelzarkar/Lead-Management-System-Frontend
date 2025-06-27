const login = async () => {
  const res = await axios.post('/auth/login', { email, password });
  localStorage.setItem('token', res.data.token);
  navigate('/dashboard');
};
