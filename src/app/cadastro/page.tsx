import FormCadastro from "@/app/components/formularios/form_cadastro";
import RodapeForm from "@/app/components/formularios/rodape_form";

export default function cadastroPage() {
    return (
        <div>
            <FormCadastro />
            <RodapeForm texto_p={'Tem uma conta?'} texto_link="Conecte-se" rota={"./"}/>
        </div>
    )
}