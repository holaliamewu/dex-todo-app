import { Plus } from "lucide-react";


export default function Navbar({ onOpen }) {
 return(
  <nav className="w-[90%] sm:w-[80%] md:w-[50%] lg:max-w-[30%] flex justify-center sm:justify-between mt-12 border border-zinc-100 mx-auto rounded-full pl-4  py-2">
        <h1 className="text-3xl font-bold">DexTodos</h1>
        <span className="flex items-center w-[100%] sm:w-fit absolute sm:static left-0 bottom-4 sm:mx-2" >
           <button
          onClick={onOpen}
          className="flex items-center justify-center mx-auto w-1/2 sm:w-fit gap-1 bg-blue-600 text-white border-1 border-zinc-100  text-sm font-bold shadow-lg shadow-zinc-100 px-3 py-2  rounded-full  cursor-pointer"
            >
             <Plus size={16} strokeWidth={3} />New todo</button>
         </span>
        </nav>
 )
}