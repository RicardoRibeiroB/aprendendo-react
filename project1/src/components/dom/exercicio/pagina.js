import React, { useState } from 'react';
import './pagina.module.css'; // Certifique-se de criar um arquivo CSS separado

export default function Pagina() {
  const [name, setName] = useState('');
  const [useName, setUseName] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [useSobrenome, setUseSobrenome] = useState('');
  const [sexo, setSexo] = useState('');
  const [imagem, setImagem] = useState(null);

  function pegarDados(e) {
    e.preventDefault();
    console.log(name);
    console.log(sobrenome);
    console.log(sexo);
    console.log('cadastrou');
    setUseName(name);
    setUseSobrenome(sobrenome);
    validacao();
  }

  function validacao() {
    if (sexo === 'masculino') {
      setImagem('https://i.pinimg.com/564x/b0/41/ed/b041ed6928738a65269be01d7dac2c82.jpg');
    } else if (sexo === 'feminino') {
      setImagem('https://i.pinimg.com/564x/1f/9e/2d/1f9e2da8cd6da8156c2111626c4f5cce.jpg');
    }
  }

  return (
    <div className="container">
      <form onSubmit={pegarDados} className="form">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" placeholder="Digite seu nome" name="name" onChange={(e) => setName(e.target.value)} />

        <label htmlFor="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" placeholder="Digite seu sobrenome" name="sobrenome" onChange={(e) => setSobrenome(e.target.value)} />

        <div className="radio-group">
          <label htmlFor="masculino">Masculino</label>
          <input type="radio" id="masculino" name="sexo" onChange={() => setSexo('masculino')} />

          <label htmlFor="feminino">Feminino</label>
          <input type="radio" id="feminino" name="sexo" onChange={() => setSexo('feminino')} />
        </div>
        <input type="submit" value="Cadastrar" />
      </form>

      {imagem && <img src={imagem} alt="Imagem de perfil"/>}
      {useName && useSobrenome && (
        <div className="welcome">
          <h1>Bem-vindo {useName} {useSobrenome}</h1>
        </div>
      )}
    </div>
  );
}
