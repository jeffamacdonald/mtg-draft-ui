import http from "../http-common";

class CubeService {
  import(file, name, onUploadProgress) {
    let formData = new FormData();

    formData.append("dck_file", file);
    formData.append("name", name);

    return http.post("/api/v1/cubes/import", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }
}

export default new CubeService();
