import { useState } from 'react';

export default function Form() {
    const [name, setName] = useState();
    const [sobrenome, setSobrenome] = useState();

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(name);
        console.log(sobrenome);
        console.log('cadastrou');
    }

    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <input type="text" placeholder="Digite seu nome" name="name" onChange={(e) => setName(e.target.value)}></input>
                <input type="text" placeholder="Digite seu sobrenome" name="sobrenome" onChange={(e) => setSobrenome(e.target.value)}></input>
                <input type="submit" value="Cadastrar"></input>
            </form>
        </div>
    );
}
