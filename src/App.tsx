import { FaFaceFrown } from "react-icons/fa6";
import LayoutDecoration from "./components/LayoutDecoration";
import ProgressStepBar from "./components/ProgressStepBar";
import "./App.css";

function App() {
  return (
    <LayoutDecoration>
      <div className="w-full max-w-xl">
        <div className="flex flex-col items-center pb-8">
          <ProgressStepBar total={5} current={3} />
          <p className="mt-2 mb-6 text-sm text-gray-500">Paso 3 de 5</p>
        </div>

        <div className="rounded-xl bg-white p-6 sm:p-8 shadow-lg text-center">
          <div className="mx-auto mb-4 flex h-10 w-16 items-center justify-center">
            <FaFaceFrown className="text-red-700 text-4xl" aria-hidden />
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-blue-950 leading-snug">
            ¡Lo sentimos!
            <span className="block">tu crédito no fue aprobado</span>
          </h1>

          <p className="mt-4 text-12 text-blue-900 font-bold h-22 pt-2 ">
            Gracias por confiar en nosotros, dadas nuestras políticas no podemos
            ofrecerte un microcrédito, inténtalo más adelante.
          </p>
        </div>

        <div className="pt-25 items-center text-center">
                  <button
          type="button"
          className="mt-8 w-64 sm:w-80 rounded-full bg-orange-500 py-3 text-black font-medium
                 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          Entendido
        </button>
        </div>

      </div>
    </LayoutDecoration>
  );
}

export default App;
