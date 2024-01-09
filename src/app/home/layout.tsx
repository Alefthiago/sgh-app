'use client'
//      COMPONENTES.    //
import Sidebar from "@/components/bars/Sidebar"
//     /COMPONENTES.    //
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const click_sidebar = () => {
        const sidebar = document.getElementById('logo-sidebar');
        if (sidebar) {
            sidebar.classList.toggle('-translate-x-full');
        }
    };
    const click_icon = () => {

    };

    return (
        <div className={"h-full w-full items-center flex justify-center bg-white"}>
            <Sidebar click_sidebar={click_sidebar} click_icon={click_icon} />
            <div className="p-4 sm:ml-64">
                {children}
            </div>
        </div >
    )
}
