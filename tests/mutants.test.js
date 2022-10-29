import request from "supertest";
import app from "../src/app";
import { pool } from "../src/db";

describe("Mutants Routes", () => {
  it("should respond a list of mutants", async () => {
    const res = await request(app).get("/api/mutants");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          salary: expect.any(Number),
        }),
      ])
    );
  });

  it("should create a new mutant", async () => {
    const res = await request(app).post("/api/mutants").send({
      name: "John Doe",
      salary: 1000,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
      mutactivo: 1,
      mutapodo: "Ángel ",
      mutnom: "Warren Kenneth Worthington III",
      rolid: 1,
      vehid: 2,
      conid: 1,
      paiid: 226,
      podmutid: 52,
      mutimg: "https://static.wikia.nocookie.net/xmenmovies/images/1/15/AngelFP.jpg/revision/latest/scale-to-width-down/350?cb=20160422202636"
     })
    );
  });

  it("should get an mutant by id", async () => {
    const res = await request(app).get("/api/mutants/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        mutid: 1,        
        mutactivo: 1,
        mutapodo: expect.any(String),
        mutnom: expect.any(String),
        rolid: expect.any(Number),
        vehid: expect.any(Number),
        conid: expect.any(Number),
        paiid: expect.any(Number),
        podmutid: expect.any(Number),
        mutimg: expect.any(String),
      })
    );
  });

  it("should delete an mutant by id", async () => {
    const res = await request(app).delete("/api/mutants/1");
    expect(res.statusCode).toEqual(204);
  });

  afterAll(async () => {
    await pool.end();
  });
});
