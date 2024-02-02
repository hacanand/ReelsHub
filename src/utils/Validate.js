const checkValidateDate = (email, password) => {
    
    const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        password,
      );
    if (!emailValid) {
        return "Invalid Email Id";
    }
    if (!isPasswordValid) {
        return "Invalid Password";
    }
    return null;

}
export { checkValidateDate };