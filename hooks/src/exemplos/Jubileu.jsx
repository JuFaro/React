import React, { useState, useMemo } from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';
function Jubileu() {
    const [dados, setDados] = useState({
        nome: '',
        email: '',
        senha1: '',

    });
    const handleInputChange = (event) => {
        setDados({
            ...dados,
            [event.target.name]: event.target.value
        });
    }

    console.log(dados)

    const mostra = useMemo(
        () => <VerJubileu nome={dados.nome} />, [dados.nome]
    )

    function VerJubileu({ nome }) {
        if (nome === '')
            return '';
        if (nome === 'Jubileu' || nome === 'jubileu')
            return 'Aeee Jubileu rsrsrs';
        else
            return 'Quem?'

    }

    return (
        <>
            <PageTitle title='useMemo' subtitle='guarda um valor memorizado em cache' />
            <SectionTitle title='Desafio 02 -Jubileu' />
            <div className='center'>
                <form action="">
                    <input type='text' placeholder='Nome usuário' value={dados.nome} name='nome' onChange={handleInputChange} />
                    <span>{mostra}</span>
                    <input type='email' placeholder='Email' name='email' value={dados.email} onChange={handleInputChange} />
                    <input type='password' placeholder='Senha' name='senha1' value={dados.senha1} onChange={handleInputChange} />
                </form>
                <button>Envia</button>


            </div>
        </>
    );
}
export default Jubileu;