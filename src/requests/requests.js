export const fetchUser = async () => {
  const userRaw = await fetch('http://localhost:5000/currentUser');
  const user = await userRaw.json();
  return user;
}