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
    const data_atual = new Date();
    const [ano_atual, setAnoAtual] = useState(data_atual.getFullYear());
    const [mes_atual, setMesAtual] = useState(data_atual.getMonth());
    const [btn_data_atual, setBtnDataAtual] = useState(data_atual.getMonth());

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
        setMesAtual((prevMes: any) => (prevMes === 0 ? 11 : prevMes - 1));
        // alert(mes_atual)    
        if (mes_atual === 0) {
            setAnoAtual((prevAno: any) => prevAno - 1);
        }
    };

    const avancar_mes = () => {
        setMesAtual((prevMes: any) => (prevMes === 11 ? 0 : prevMes + 1));
        // alert(mes_atual)
        if (mes_atual === 11) {
            setAnoAtual((prevAno: any) => prevAno + 1);
        }
    };

    const mes_padrao = () => {
        const hoje = new Date();
        // alert(mes_atual)
        setMesAtual(hoje.getMonth());
        setAnoAtual(hoje.getFullYear());
        setBtnDataAtual(hoje.getMonth());
        // Parei aqui. precisa corrigir o botão de mês atual e o gereciamento de datas para o calendário.
    }

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

    const dia_atual = (ano: any, mes: any, dia: any) => {
        const hoje = new Date();
        return ano === hoje.getFullYear() && mes === hoje.getMonth() && dia === hoje.getDate();
    }
    return (
        <div className="w-full h-4/5 overflow-auto mt-2">

            <div className="flex flex-col sm:flex-row justify-between mb-4">
                <div className={"flex justify-center sm:flex-col"}>
                    <button type="button" className={"w-full text-white bg-color-component hover:bg-color-hover focus:outline-none focus:ring-2 focus:ring-green-400 font-medium sm:rounded-full text-sm px-5 py-2.5 text-center sm:me-2 mb-2"} onClick={retroceder_mes}>
                        Anterior
                    </button>
                </div>

                <h2 className="text-lg text-center font-semibold mb-3 mt-3 flex flex-col justify-center items-center">
                    <p>
                        {new Date(ano_atual, mes_atual).toLocaleDateString('default', { month: 'long', year: 'numeric' }).toUpperCase()}
                    </p>
                    <button type="button" className={`${btn_data_atual != mes_atual ? '' : 'invisible'} px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300`} onClick={mes_padrao}>
                        Mês Atual
                    </button>
                </h2>

                <div className={"flex justify-center sm:flex-col"}>
                    <button type="button" className={"w-full text-white bg-color-component hover:bg-color-hover focus:outline-none focus:ring-2 focus:ring-green-400 font-medium sm:rounded-full text-sm px-5 py-2.5 text-center sm:me-2 mb-2"} onClick={avancar_mes}>
                        Próximo
                    </button>
                </div>
            </div>

            <div className='w-full h-4/5 overflow-auto'>
                <table className=" w-full h-full text-sm">
                    <thead>
                        <tr className="border">
                            {diasDaSemana.map((dia, index) => (
                                <th key={index} className="text-left py-2 px-4 border">
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
                                    const atual = dia_atual(ano_atual, mes_atual, dia);
                                    return (
                                        <td key={diaIndex} className={`py-2 px-4 border align-text-top h-14 w-10 ${atual ? 'bg-color-hover text-white font-bold' : ''}`} onClick={() => info_dia(dia)}>
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
