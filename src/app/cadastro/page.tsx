//      COMPONENTES.    //
import FormCadastro from "@/components/formularios/Form_cadastro";
import RodapeForm from "@/components/formularios/Rodape_form";
//     /COMPONENTES.    //

export default function cadastroPage() {
    return (
        <div className=" w-full h-full flex flex-col justify-center items-center">

            <FormCadastro />

            <RodapeForm texto_p={'Tem uma conta?'} texto_link="Conecte-se" rota={"./"} />
            
        </div>
    )
}