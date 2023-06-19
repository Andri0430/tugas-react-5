import { useState } from "react";
import Galaxy from "./components/Galaxy";
import Button from "./components/Button";
import Header from "./components/Header";
import { GiFruitBowl } from "react-icons/gi";
import {
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

export default function App() {
  const [newGalaxy, setNewGalaxy] = useState([
    {
      id: "",
      name: "",
      diameter: "",
    },
  ]);

  const [galaxyRE, setGalaxieRE] = useState([
    {
      id: "",
      name: "",
      diameter: "",
    },
  ]);

  const [galaxies, setGalaxies] = useState([
    {
      id: 1,
      name: "Andromeda",
      diameter: 220000,
    },
    {
      id: 2,
      name: "Bima Sakti",
      diameter: 100000,
    },
    {
      id: 3,
      name: "Triangulum",
      diameter: 60000,
    },
  ]);

  function handleChange(e) {
    setNewGalaxy({ ...newGalaxy, [e.target.name]: e.target.value });
  }

  function perbesarDiameter(id, name) {
    setGalaxies(
      galaxies.map((n) =>
        n.id == id && n.name == name ? { ...n, diameter: n.diameter + 1 } : n
      )
    );
  }

  function perkecilDiameter(id, name) {
    setGalaxies(
      galaxies.map((n) =>
        n.id == id && n.name == name ? { ...n, diameter: n.diameter - 1 } : n
      )
    );
  }

  return (
    <>
      <Header />
      <main>
        <Galaxy galaxies={galaxies} setGalaxies={setGalaxies} />
        <div className="container">
          <h1>Tambah</h1>
          <form action="#">
            <label>
              ID
              <input
                type="number"
                value={newGalaxy.id}
                name="id"
                onChange={handleChange}
              />
            </label>
            <label>
              Name
              <input
                type="text"
                value={newGalaxy.name}
                name="name"
                onChange={handleChange}
              />
            </label>
            <label>
              Diameter
              <input
                type="number"
                value={newGalaxy.diameter}
                name="diameter"
                onChange={handleChange}
              />
            </label>
          </form>
          <div className="cont-btn">
            <Button
              onClick={(e) => {
                e.preventDefault();
                setGalaxies([newGalaxy, ...galaxies]);
              }}
            >
              <AiFillPlusCircle size={15} />
              DEPAN
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setGalaxies([...galaxies, newGalaxy]);
              }}
            >
              <AiFillPlusCircle size={15} />
              BELAKANG
            </Button>
          </div>
        </div>
        <div className="container">
          <h4>Edit/Hapus Berdasarkan Id</h4>
          <form action="#">
            <label>
              ID
              <input
                type="number"
                value={galaxyRE.id}
                onChange={(e) =>
                  setGalaxieRE({ ...galaxyRE, id: e.target.value })
                }
              />
            </label>
            <label>
              Name
              <input
                type="text"
                value={galaxyRE.name}
                onChange={(e) =>
                  setGalaxieRE({ ...galaxyRE, name: e.target.value })
                }
              />
            </label>
          </form>
          <div className="cont-diameter">
            <p>Diameter :</p>
            <div className="cont-btn-2">
              <Button
                onClick={() => perbesarDiameter(galaxyRE.id, galaxyRE.name)}
              >
                <AiOutlineZoomIn size={15} />
                Perbesar
              </Button>
              <Button
                onClick={() => perkecilDiameter(galaxyRE.id, galaxyRE.name)}
              >
                <AiOutlineZoomOut size={15} />
                Perkecil
              </Button>
            </div>
            <div className="cont-btn-3">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setGalaxies(
                    galaxies.filter(
                      (galaxy) =>
                        !(
                          galaxy.id == galaxyRE.id &&
                          galaxy.name == galaxyRE.name
                        )
                    )
                  );
                }}
              >
                <BsFillTrashFill size={15} />
                Hapus
              </Button>
            </div>
          </div>
        </div>
        <div className="contain">
          <div className="text">Hapus</div>
          <div className="cont-btn">
            <Button onClick={() => setGalaxies(galaxies.slice(1))}>
              <BsFillTrashFill size={15} />
              DEPAN
            </Button>
            <Button onClick={() => setGalaxies(galaxies.slice(0, -1))}>
              <BsFillTrashFill size={15} />
              BELAKANG
            </Button>
          </div>
          <div className="cont-btn-rmv">
            <Button
              onClick={() => setGalaxies(galaxies.slice(galaxies.length))}
            >
              <BsFillTrashFill size={15} />
              Semua
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
