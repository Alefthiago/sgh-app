'use client';
//      ESTILOS.    //
import Image from 'next/image';
import svg from '../../../public/logo.svg';
import Link from 'next/link';
//     /ESTILOS.    //

//      UTIL.       //
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
//     /UTIL.       //


interface SidebarProps {
    clickSidebar: () => void,
}

export default function Sidebar(props: SidebarProps) {
    //      VARIAVEIS.      //
    const rota_atual = usePathname();
    const [rota, setRota] = useState<string>(rota_atual);
    //     /VARIAVEIS.      //

    //      FUNCOES.        //
    function clickIcon(rota: string) {
        const sidebar = document.getElementById('logo-sidebar');
        if (sidebar) {
            sidebar.classList.toggle('-translate-x-full');
        }
        setRota(rota_atual);
    }
    //     /FUNCOES.        //

    //      HOOKS.      //
    useEffect(() => {
        setRota(rota_atual);
    }, [rota_atual]);
    //     /HOOKS.      //

    return (
        <>
            <nav className="fixed top-0 z-50 w-full  bg-color-component border-b border-color-border">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">

                            <button onClick={props.clickSidebar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-black rounded-lg lg:hidden hover:bg-color-hover focus:outline-none focus:ring-2 focus:ring-color-hover focus:text-white hover:text-color-hover">
                                <span className="sr-only">Abrir sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>

                            <a className="flex ms-2 md:me-24">
                                <Image
                                    priority
                                    src={svg}
                                    alt="Bem vindo ao sistema de gestão de projetos"
                                    width={200}
                                    style={{ maxWidth: '50px', minWidth: '50px' }}
                                />
                            </a>
                        </div>

                        <div className="flex items-center">

                            <div className="flex items-center ms-3">
                                <Link href={'relatorios'} onClick={() => clickIcon('/relatorios')} className={`${rota === "/relatorioAtual" ? 'bg-color-hover text-white' : 'text-black'} flex items-center p-2 rounded-lg hover:bg-color-hover hover:text-white group`}>
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                                        <path stroke="currentColor" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"></path>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Gerar relatorio</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-56 h-full pt-20 transition-transform -translate-x-full bg-color-component border-r border-color-border lg:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-color-component">
                    <ul className="space-y-2 font-medium flex flex-col justify-between h-full">
                        <div>

                            <li>
                                <Link href={'calendario'} onClick={() => clickIcon('/calendario')} className={`${rota === "/calendario" ? 'bg-color-hover text-white' : 'text-black'} flex items-center p-2 rounded-lg hover:bg-color-hover hover:text-white group`}>
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"></path>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Calendário</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'relatorios'} onClick={() => clickIcon('/relatorios')} className={`${rota === "/relatorios" ? 'bg-color-hover text-white' : 'text-black'} flex items-center p-2 rounded-lg hover:bg-color-hover hover:text-white group`}>
                                    <svg className="flex-shrink-0 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Relatorios</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'conta'} onClick={() => clickIcon('/conta')} className={`${rota === "/conta" ? 'bg-color-hover text-white' : 'text-black'} flex items-center p-2 rounded-lg hover:bg-color-hover hover:text-white group`}>
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"></path>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Conta</span>
                                </Link>
                            </li>
                        </div>
                        <div>
                            <li>
                                <Link href={"./"} className="flex items-center p-2 text-black rounded-lg hover:bg-color-hover hover:text-white group">
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                        <path stroke="currentColor" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"></path>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Sair</span>
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </aside>
        </>
    )
}