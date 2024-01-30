//      COMPONENTES.        //
import Calendario from "@/components/calendario/Calendario";
//     /COMPONENTES.        //

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-4/5 sm:overflow-hidden overflow-scroll">
            <Calendario />
        </div>
    )
}
