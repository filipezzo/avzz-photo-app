import Sidebar from "./Sidebar";
import Galery from "./Galery";
import {
  ArchiveTray,
  Image,
  ArrowRight,
  Pen,
  Trash,
} from "@phosphor-icons/react";

function Content() {
  return (
    <div className="flex h-calc">
      <Sidebar />
      <Galery />
      <main className=" flex flex-1 flex-col h-calc ">
        <header className="flex justify-between items-center px-6 py-9 h-14 border-b-2 border-b-slate-300 text-gray-500 w-full ">
          <div className="flex gap-2 items-center ">
            <h3>Instagram Post</h3>
            <ArrowRight />
            <h5 className="uppercase">Holiday post</h5>
          </div>
          <button className=" p-2 rounded-lg uppercase bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-100% text-white hover:opacity-80">
            publish
          </button>
        </header>

        <div className="flex flex-col justify-center items-center h-full md:flex-row sm:px-4">
          <section className="h-[40vh] w-[75vw]   md:h-[57.5vh] md:w-[48.6vw] relative border border-solid border-white rounded-sm -mt-6 order-2 md:order-1">
            <img
              className="w-full h-full object-cover opacity-20"
              src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=1453&q=85"
              alt="Foreground image"
            />

            <img
              className="w-3/4 h-3/4 object-cover rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 cursor-grab -translate-y-1/2 border border-solid border-white animate-smaller "
              src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=1453&q=85"
              alt="Foreground image"
            />
            <div
              className="absolute w-4 h-4 bg-white rounded-full top-[11.2%] 
            left-[86.7%] "
            />
            <div
              className="absolute w-4 h-4 bg-white rounded-full top-[11.2%] 
            left-[11.7%] "
            />
            <div
              className="absolute w-4 h-4 bg-white rounded-full top-[84.9%] 
            left-[11.7%] "
            />

            <div
              className="absolute w-4 h-4 bg-white rounded-full top-[84.9%] 
            left-[86.7%] "
            />
          </section>
          <section className="md:h-[57.5vh] flex md:flex-col md:-mt-6 gap-2 md:ml-4 animate-fadeR order-1 md:order-2 mb-10 md:mb-0 ">
            <button className="text-gray-500 p-2 hover:bg-gray-600  bg-gray-300">
              <ArchiveTray size={28} />
            </button>
            <button className="text-gray-500 text-center hover:bg-gray-600  p-2 bg-gray-300">
              <Image size={28} />
            </button>
            <button className="text-gray-500 p-2 hover:bg-gray-600 bg-gray-300">
              <Pen size={28} />
            </button>

            <button className="mt-auto text-gray-500 hover:bg-gray-600 bg-gray-300 p-2">
              <Trash size={28} />
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Content;
