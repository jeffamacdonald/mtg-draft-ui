import http from "../http-common";

class SessionService {
  login(email, password) {
    const params = {
      "email": email,
      "password": password
    }
    return http.post("/api/v1/users/login", params);
  }

  logout() {
    return http.post("/api/v1/users/logout");
  }
}

export default new SessionService();
