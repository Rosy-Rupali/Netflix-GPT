export const checkValidation = (email, password, name, phone, isSignInForm) => {
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{3,}$/.test(
    password
  );

  if (!validEmail) return "Email ID is invalid";
  if (!validPass) return "Password is invalid";
  if (!isSignInForm) {
    const validName = /([a-zA-Z0-9_\s]+)/.test(name);
    
    if (!validName) return "Name is invalid";
   
  }

  return null;
};
