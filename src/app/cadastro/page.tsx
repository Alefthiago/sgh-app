import FormCadastro from "@/components/formularios/Form_cadastro";
import RodapeForm from "@/components/formularios/Rodape_form";

export default function cadastroPage() {
    return (
        <div>
            <FormCadastro />
            <RodapeForm texto_p={'Tem uma conta?'} texto_link="Conecte-se" rota={"./"}/>
        </div>
    )
}