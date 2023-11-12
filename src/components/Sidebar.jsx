import {
  Image,
  TextAUnderline,
  Shapes,
  Cardholder,
} from "@phosphor-icons/react";

function Sidebar() {
  return (
    <div className="bg-gray-900 hidden sm:flex flex-col gap-4 py-10 px-6 text-gray-500 w-28 animate-fadeRight  ">
      <button className="flex justify-center items-center flex-col gap-2 mt-8 hover:text-gray-200">
        <Cardholder size={24} />
        <span>Templates</span>
      </button>

      <button className="flex justify-center items-center flex-col gap-2 mt-4 hover:text-gray-200">
        <Image size={24} />
        <span>Images</span>
      </button>

      <button className="flex justify-center items-center flex-col gap-2 mt-4 hover:text-gray-200">
        <TextAUnderline size={24} />
        <span>Text/Font</span>
      </button>

      <button className="flex justify-center items-center flex-col gap-2 mt-4 hover:text-gray-200">
        <Shapes size={24} />
        <span>Shapes</span>
      </button>
    </div>
  );
}

export default Sidebar;
