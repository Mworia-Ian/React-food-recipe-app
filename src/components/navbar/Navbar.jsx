import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  console.log(searchParam);

  return (
    <>
      <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl font-semibold">
          <NavLink to={"/"}>FoodRecipe</NavLink>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder="Search recipes..."
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          />
        </form>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to={"/"}
              className="text-black hover:text-gray-700 duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className="text-black hover:text-gray-700 duration-300"
            >
              favorites
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className="header"
        style={{
          height: "40vw",
          margin: "30px auto",
          background:
            'url("https://www.ppa.com/assets/images/ppmag_articles/2019320160929_ftinc_286_2.jpg")',
          backgroundSize: "contain",
          position: "relative",
        }}
      >
        <div
          className="header-contents1"
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "1.5vw",
            maxWidth: "50%",
            bottom: "10%",
            left: "6vw",
          }}
        >
          <h2
            style={{
              fontWeight: "500",
              color: "white",
              fontSize: "max(3.5vw, 22px)",
            }}
          >
            Welcome to Thunder Kitchen
          </h2>
          <p
            style={{
              color: "white",
              fontStyle:"italic",
              fontSize:"max(1.5vw, 15px)"

            }}
          >
            Where culinary adventures await at your fingertips
          </p>
        </div>
      </div>
    </>
  );
}
