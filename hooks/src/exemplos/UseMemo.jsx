import React, { useState, useMemo } from 'react';
import PageTitle from '../componentes/PageTitle';
import SectionTitle from '../componentes/SectionTitle';
function UseMemo() {
    const [dados, setDados] = useState({
        nome: '',
        email: '',
        senha1: '',
        senha2: ''
    });
    const handleInputChange = (event) => {
        setDados({
            ...dados,
            [event.target.name]: event.target.value
        });
    }
    const validaSenha = useMemo(() =>
        <ValidaSenha senha={dados.senha1} />, [dados.senha1]
    );
    const comparaSenha = useMemo(() =>
        <ComparaSenhas senha1={dados.senha1} senha2={dados.senha2} />, [dados.senha2, dados.senha1]
    );
    function ValidaSenha({ senha }) {
        console.log('validaSenha');
        if (senha === '')
            return 'Preencha o campo';
        if (senha.length <= 5)
            return 'Senha com no minimo 6 caracteres';
        return 'Senha válida';
    }
    function ComparaSenhas({ senha1, senha2 }) {
        console.log('comparaSenha');
        if (senha2 === '')
            return '';
        if (senha1 === senha2)
            return 'Senhas conferem';
        else
            return 'Senhas não conferem'
    }
    return (
        <>
            <PageTitle title='useMemo' subtitle='guarda um valor memorizado em cache'/>
            <SectionTitle title='Exemplo -Analisando o comportamento no console log'/>
            <div className='center'>
                <input type='text' placeholder='Nome usuário' value={dados.nome} name='nome' onChange={handleInputChange}/>
 <input type='email' placeholder='Email' name='email' value={dados.email} onChange={handleInputChange}/>
 <input type='password' placeholder='Senha' name='senha1' value={dados.senha1} onChange={handleInputChange} />
                <span>{validaSenha}</span>
                <input type='password' placeholder='Repita a Senha' name='senha2' value={dados.senha2} onChange={handleInputChange} />
                <span>{comparaSenha}</span>
            </div>
        </>
    );
}
export default UseMemo;