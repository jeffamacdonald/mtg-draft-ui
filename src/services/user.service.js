import http from "../http-common";

class UserService {
  drafts() {
    return http.get("/api/v1/users/drafts");
  }
}

export default new UserService();
