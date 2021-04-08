import http from "../http-common";

class RegistrationService {
  register(email, username, password, confirmPassword) {
    const params = {
      "email": email,
      "username": username,
      "password": password,
      "password_confirmation": confirmPassword
    }
    return http.post("/api/v1/users/register", params);
  }
}

export default new RegistrationService();
