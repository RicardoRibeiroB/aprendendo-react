import React from 'react';
import './App.css';
// import PagInicial from './components/pagInicial'; 
// import PagSeg from './components/PagSeg'; 
import Tarefas from './components/props/Project-props'; 


export default function App() {
  return (
    <div className="App">
      <h1>Lista de Tarefa</h1>
        <Tarefas tarefa="Lavar a louça" />
        <Tarefas tarefa="Lavar o banheiro" />
        <Tarefas tarefa="Arrumar o quarto" />
        <Tarefas tarefa="Terminar lição de casa" />
        <Tarefas tarefa="Tomar banho" />     
    </div>
  );
}