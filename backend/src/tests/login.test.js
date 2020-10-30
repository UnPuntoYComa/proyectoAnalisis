import request from "supertest";
import app from "../app";


describe("Test POST endpoint /api/auth/signin", () => {
  it("inicio de sesion de usuario", async () => {
    const res = await request(app).post("/api/auth/signin").send({
      correo: "test@gmail.com",
      contraseña: "test",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
  });
});
















describe("Test POST endpoint /api/encuesta", () => {
  it("Get encuestas", async () => {
    const res = await request(app).get("/api/encuesta")
    expect(res.statusCode).toEqual(200);
  });
});