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
    const click_sidebar = () => {
        const sidebar = document.getElementById('logo-sidebar');
        if (sidebar) {
            sidebar.classList.toggle('-translate-x-full');
        }
    };

    return (
        <div className={"h-full w-full items-center flex justify-center bg-white"}>
            <Sidebar click_sidebar={click_sidebar} />
            <div className="flex justify-center items-center p-4 sm:ml-64 h-full w-full" onClick={click_sidebar}>
                {children}
            </div>
        </div >
    )
}
