'use client'

//      ESTILOS.      //
import '@/styles/formularios/form_login.css';
//     /ESTILOS.      //

//      UTIL.      //
import { useState } from 'react';
import { useRouter } from 'next/navigation';
//     /UTIL.      //

export default function FormLogin() {
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const route = useRouter();

    return (
        <div id="form_login">
            <form>
                <fieldset>
                    <legend className="sr-only">Informações de login</legend>
                    <div className={"relative mb-3"}>
                        <input
                            type="email"
                            value={email} onChange={(evt) => setEmail(evt.target.value)} style={{ borderColor: 'black' }}
                            className={"peer m-0 block h-[58px] w-full rounded border border-solid border-black bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-black focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-black focus:outline-none peer-focus:text-black [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"}
                            id="email" name='email'
                            placeholder="" required />
                        <label
                            htmlFor="email"
                            className={"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-black transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-black peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"}
                        > E-mail</label
                        >
                    </div>

                    <div className={"relative mb-3"}>
                        <input
                            type="password"
                            value={senha} onChange={(evt) => setSenha(evt.target.value)} style={{ borderColor: 'black' }}
                            className={"peer m-0 block h-[58px] w-full rounded border border-solid border-black bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-white transition duration-500 ease-linear placeholder:text-transparent focus:border-black focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-black focus:shadow-te-primary focus:outline-none peer-focus:text-black [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"}
                            id="senha" name='senha'
                            placeholder="" required />
                        <label
                            htmlFor="senha"
                            className={"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-black transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-black peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"}
                        >Senha</label
                        >
                    </div>
                    <div className={"mt-3 flex justify-center"}>
                        <button
                            type="button" style={{ backgroundColor: 'black' }} onClick={() => route.push('/calendario')}
                            className={"inline-block rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)]"}>
                            Entrar
                        </button>
                    </div>

                </fieldset>
            </form>
        </div>
    )
}
