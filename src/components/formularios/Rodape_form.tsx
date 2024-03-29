//      ESTILOS.      //
import '@/styles/formularios/form_rodape.css';
//     /ESTILOS.      //

//      UTIL.      // 
import Link from 'next/link';
//     /UTIL.      //

interface RodapeFormProps {
    rota: string,
    texto_p: string,
    texto_link: string,
}

export default function RodapeForm(props: RodapeFormProps) {
    return (
        <div id="rodape_form">
            <p>{props.texto_p} <Link href={props.rota} className='text-white underline'>{props.texto_link}</Link></p>
        </div>
    )
}
