import { Bell, CrownSimple } from "@phosphor-icons/react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-100%  h-14 py-2 px-4 animate-fade">
      <div className=" flex w-full  items-center text-blue-200 m-auto  ">
        <h1 className="whitespace-nowrap font-bold">Avzz Editor</h1>
        <nav className="flex justify-between w-full  ">
          <div className=" gap-4 ml-8 mt-1 hidden  md:flex ">
            <button>File</button>
            <button>View</button>
            <button>New</button>
          </div>

          <div className="flex gap-4 items-center ml-auto md:ml-0">
            <button>
              <CrownSimple />
            </button>
            <button>
              <Bell />
            </button>
            <img
              className="rounded-full w-10 h-10 object-cover"
              src="https://github.com/filipezzo.png"
              alt="User photo"
            />
            <span>Filipe</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
