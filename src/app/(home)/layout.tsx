'use client'
//      COMPONENTES.    //
import Sidebar from "@/components/bars/Sidebar";
//     /COMPONENTES.    //

//      UTIL.       //
import React, { useRef, useEffect } from 'react';
//     /UTIL.       //

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    //      FUNCOES.        //

    //      CONTROLE DO SIDEBAR.        //
    const clickSidebar = () => {
        const sidebar = document.getElementById('logo-sidebar');
        if (sidebar) {
            sidebar.classList.toggle('-translate-x-full');
        }
    };

    const fechar_sidebar = () => {
        const sidebar = document.getElementById('logo-sidebar');
        if (sidebar && !sidebar.classList.contains('-translate-x-full')) {
            sidebar.classList.add('-translate-x-full');
        }
    };
    //     /CONTROLE DO SIDEBAR.        //

    //     /FUNCOES.        //

    return (
        <div className={"h-full w-full items-center flex justify-center bg-white"}>

            <Sidebar clickSidebar={clickSidebar} />

            <div className="flex justify-center items-center lg:p-4 lg:ml-64 h-full w-full" onClick={fechar_sidebar}>
                {children}
            </div>

        </div>
    )
}
