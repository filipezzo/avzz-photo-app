import { CaretLeft } from "@phosphor-icons/react";
import { Plus } from "@phosphor-icons/react/dist/ssr";
function Galery() {
  return (
    <section className="bg-gray-600 hidden w-96 md:block overflow-hidden ">
      <header className="flex justify-between p-6 items-center text-gray-200 border-b-2 border-b-slate-300  ">
        <h4>Images</h4>
        <CaretLeft size={20} className="cursor-pointer " />
      </header>
      <div className="p-6 flex flex-wrap gap-2">
        <img
          className="object-cover rounded-lg w-36 h-36 hover:scale-y-110 hover:scale-x-110 animate-fadeIn "
          src="https://images.unsplash.com/photo-1543096222-72de739f7917?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=280&q=100"
          alt="Uploaded image"
        />

        <img
          className="object-cover rounded-lg w-36 h-36 hover:scale-y-110 hover:scale-x-110 animate-back"
          src="https://images.unsplash.com/photo-1475598322381-f1b499717dda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&h=280&q=100"
          alt="Uploaded image"
        />

        <img
          className="object-cover rounded-lg w-36 h-36 hover:scale-y-110 hover:scale-x-110 animate-back2 "
          src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=280&q=100"
          alt="Uploaded image"
        />

        <img
          className="object-cover  rounded-lg w-36 h-36 hover:scale-y-110 hover:scale-x-110 animate-back3"
          src="https://images.unsplash.com/photo-1615749190340-34c7c3b16784?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=280&q=100"
          alt="Uploaded image"
        />

        <img
          className="object-cover rounded-lg w-36 h-36 hover:scale-y-110 hover:scale-x-110 animate-back4"
          src="https://images.unsplash.com/photo-1615707547992-93435f1e7f13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=280&q=100"
          alt="Uploaded image"
        />
        <div className="object-cover rounded-lg w-36 h-36 flex justify-center items-center bg-gray-500 hover:scale-y-110 hover:scale-x-110 hover:text-red-950 animate-back5 ">
          <Plus size={32} className="" />
        </div>
      </div>
    </section>
  );
}

export default Galery;
