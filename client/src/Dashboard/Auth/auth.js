class Auth {
  constructor(token) {
    this.token = token;
  }
  login() {
    if (this.token) {
      localStorage.setItem("token", this.token);
      return true;
    }
    return false;
  }
  isLogIn() {
    return localStorage.getItem("token");
  }
  logOut() {
    localStorage.removeItem("token");
    return true;
  }
}

export default Auth;
