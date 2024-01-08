import FormLogin from '@/components/formularios/Form_login'
import RodapeForm from "@/components/formularios/Rodape_form";
import Image from 'next/image';
import svg from '../../public/SVG_form_login.svg';

export default function Home() {
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <Image
          priority
          src={svg}
          alt="Bem vindo ao sistema de gestão de projetos"
          width={200}
          className="pendulo"
          style={{ maxWidth: '200px', minWidth: '200px'}}
        />
      </div>
      <FormLogin />
      <RodapeForm texto_p={'Cria sua conta'} texto_link="aqui" rota={"./cadastro"}/>
    </div>
  )
}
