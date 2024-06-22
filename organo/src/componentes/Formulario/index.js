import Botao from '../Botao/index.js'
import CampoTexto from '../CampoTexto/CampoTexto.js'
import ListaSuspensa from '../ListaSuspensa/index.js'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    return(
        <section className='formulario' >
            <form>
                <h2>Preencha os dados para criar o cardo do colaborador:</h2>
                <CampoTexto label='Nome'placeholder='Digite o seu nome' />
                <CampoTexto label='Cargo'placeholder='Digite o seu cargo' />
                <CampoTexto label='Imagem'placeholder='Digite o endereço da imagem' />
                <ListaSuspensa label='Time' itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario