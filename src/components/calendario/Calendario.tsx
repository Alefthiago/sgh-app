'use client';
//      UTIL.       //
import React, { useState, useEffect } from 'react';
//     /UTIL.       //

function obter_quantidade_dias_mes(ano: any, mes: any) {
    const ultimo_dia_mes = new Date(ano, mes + 1, 0);
    return ultimo_dia_mes.getDate();
}

function obter_primeiro_dia_Mes(ano: any, mes: any) {
    return new Date(ano, mes, 1).getDay();
}

function gerar_dias_Mes(ano: any, mes: any) {
    const quantidadeDias = obter_quantidade_dias_mes(ano, mes);
    const primeiroDiaDaSemana = obter_primeiro_dia_Mes(ano, mes);

    const diasDoMes = [];
    for (let i = 0; i < primeiroDiaDaSemana; i++) {
        diasDoMes.push(null);
    }

    for (let dia = 1; dia <= quantidadeDias; dia++) {
        diasDoMes.push(dia);
    }

    return diasDoMes;
}

export default function Calendario() {
    const [ano_atual, setAnoAtual] = useState(new Date().getFullYear());
    const [mes_atual, setMesAtual] = useState(new Date().getMonth());


    const diasDoMes = gerar_dias_Mes(ano_atual, mes_atual);

    const [larguraTela, setLarguraTela] = useState(0);

    useEffect(() => {
        function handleResize() {
            setLarguraTela(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        // Chame a função handleResize imediatamente para obter a largura inicial da tela
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    const retroceder_mes = () => {
        setMesAtual((prevMes) => (prevMes === 0 ? 11 : prevMes - 1));
        if (mes_atual === 0) {
            setAnoAtual((prevAno) => prevAno - 1);
        }
    };

    const avancar_mes = () => {
        setMesAtual((prevMes) => (prevMes === 11 ? 0 : prevMes + 1));
        if (mes_atual === 11) {
            setAnoAtual((prevAno) => prevAno + 1);
        }
    };

    const info_dia = (dia: any) => {
        if (dia !== null) {
            const dataClicada = new Date(ano_atual, mes_atual, dia);

            const opcoes_formato: any = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };

            const dataFormatada = dataClicada.toLocaleDateString('pt-BR', opcoes_formato);

            const dataSeparada = dataFormatada.match(/(\d+) de (\w+) de (\d+)/);
            if (dataSeparada) {
                const [, diaFormatado, mesFormatado, anoFormatado] = dataSeparada;
                console.log('Dia:', diaFormatado);
                console.log('Mês:', mesFormatado);
                console.log('Ano:', anoFormatado);
            }
        }
    };

    return (
        <div className="w-full h-4/5">

            <div className="flex flex-col sm:flex-row justify-between mb-4">
                <button className={style_button} onClick={retroceder_mes}>
                    Anterior
                </button>
                <h2 className="text-lg text-center font-semibold mb-3 mt-3">
                    {new Date(ano_atual, mes_atual).toLocaleDateString('default', { month: 'long', year: 'numeric' }).toUpperCase()}
                </h2>
                <button className={style_button} onClick={avancar_mes}>
                    Próximo
                </button>
            </div>

            <div className='w-full h-full sm:overflow-hidden overflow-scroll'>

                <table className=" w-full h-full text-sm">
                    <thead>
                        <tr className="border">
                            {diasDaSemana.map((dia, index) => (
                                <th key={index} className="text-left py-2 px-4">
                                    {larguraTela > 600 ? dia : dia.substr(0, 1)}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {[...Array(Math.ceil(diasDoMes.length / 7))].map((_, semanaIndex) => (
                            <tr key={semanaIndex}>
                                {[0, 1, 2, 3, 4, 5, 6].map((diaDaSemana) => {
                                    const diaIndex = semanaIndex * 7 + diaDaSemana;
                                    const dia = diasDoMes[diaIndex];
                                    return (
                                        <td key={diaIndex} className="py-2 px-4 border align-text-top  h-14 w-10" onClick={() => info_dia(dia)}>
                                            {dia !== null && <span>{dia}</span>}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}


const style_button = "inline-block rounded bg-neutral-800 px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]";