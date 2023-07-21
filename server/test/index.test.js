const app = require("../src/app");
const login = require("../src/utils/users");
const session = require("supertest");
const agent = session(app);

describe("Test De Rutas", () => {
  describe("GET /rickandmorty/character/:id", async () => {
    it(
      "Responde con el status 200",
      await agent.get("/rickandmorty/character/1").expect(200)
    );

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      const characters = response.body;

      expect(characters).toHaveProperty("id");
      expect(characters).toHaveProperty("name");
      expect(characters).toHaveProperty("species");
      expect(characters).toHaveProperty("gender");
      expect(characters).toHaveProperty("status");
      expect(characters).toHaveProperty("origin");
      expect(characters).toHaveProperty("imagen");
    });

    it(
      "Si hay un error responde con un status: 500",
      await agent.get("/rickandmorty/character/900").expect(500)
    );
  });
});

describe("GET /rickandmorty/login", () => {
  it("si ingresa un email y password correcto el access debe estar en true", async () => {
    const { email, password } = login;

    const response = await agent.get(
      `/rickandmorty/users?email=${email}&&password=${password}`
    );
    const loginResponse = response.body;

    expect(loginResponse).toEqual({ access: true });
  });

  it("si ingresa un email y password correcto el access debe estar en true", async () => {
    const response = await agent.get(
      `/rickandmorty/users?email=ivanmoyano933.com&&password=asn22`
    );
    const loginResponse = response.body;

    expect(loginResponse).toEqual({ access: false });
  });
});

describe("POST /rickandmorty/fav", () => {
  it("Lo que envíes por body debe ser devuelto en un arreglo", async () => {
    const character = {
      id: 1,
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      status: "Alive",
      origin: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    };

    const response = await agent.post("/rickandmorty/fav").send(character);
    expect(response.body).toEqual([character]);
  });

  it("Si envías un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente", async () => {
    const character1 = {
      id: 1,
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      status: "Alive",
      origin: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    };

    const character2 = {
      id: 2,
      name: "Morty Smith",
      species: "Human",
      gender: "Male",
      status: "Alive",
      origin: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    };

    await agent.post("/rickandmorty/fav").send(character1);

    const response = await agent.post("/rickandmorty/fav").send(character2);
    expect(response.body).toEqual([character1, character2]);
  });
});

describe("DELETE /rickandmorty/fav/:id", () => {
  it("En el caso de que no haya ningun personaje con el ID que envias, sea un arreglo con los elementos previos sin modificar", async () => {
    const initialChar = [
      {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        id: 2,
        name: "Morty Smith",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
    ];

    await agent.post("/rickandmorty/fav").send(intialChar[0]);
    await agent.post("/rickandmorty/fav").send(intialChar[1]);

    const response = await agent.delete("/rickandmorty/fav/9999");
    expect(response.body).toEqual(initialChar);
  });

  it("Si envias un ID valido se elimine correctamente el personaje", async () => {
    const char1 = [
      {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      }
    ]

    const char2=[
      {
        id: 2,
        name: "Morty Smith",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
    ];
    await agent.post('/rickandmorty/fav').send(char1)
    await agent.post('/rickandmorty/fav').send(char2)

    const response = await agent.delete( `/rickandmorty/fav/${char1.id}`)
    expect(response.body).toEqual([char2])
  });
});

//     Crea un nuevo describe con el texto : "DELETE /rickandmorty/fav/:id". Dentro de este test tendrás que validar:

// Primero deberás testear que lo que devuelva esta ruta, en el caso de que no haya ningún personaje con el ID que envías, sea un arreglo con los elementos previos sin modificar.

// Luego debes testear que cuando envías un ID válido se elimine correctamente al personaje.
