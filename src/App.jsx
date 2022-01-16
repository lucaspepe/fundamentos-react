/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from "react";


import Mega from './components/mega/Mega';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1> 
      <div className="Cards">

        <Card titulo="#13 - Mega" color="#B9006e">
          <Mega qtde={8}></Mega>
        </Card>


        <Card titulo="#12 - Contador" color="#464a4d">
          <Contador numeroInicial={10}></Contador>
        </Card>

        <Card titulo="#11 - Componente Controlado" color="#e45f56">
          <Input></Input>
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#8Bad39">
          <IndiretaPai></IndiretaPai>
        </Card>
         
        <Card titulo="#09 - Comunicação Direta" color="#59323c">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#08 - Renderização Condicional" color="#982395">
          <ParOuImpar numero={3}></ParOuImpar>
          <UsuarioInfo usuario={{ nome: 'Fernando'}}></UsuarioInfo>
          {/* <UsuarioInfo usuario={{ email: 'fer@nando.com'}}></UsuarioInfo> */}
        </Card>

        <Card titulo="#07 - Desafio Repetição" color="#3a9ad9">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#06 - Repetição" color="#ff4c65">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Componente com filhos" color="#00c8f8">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro"></FamiliaMembro>
            <FamiliaMembro nome="Julio"></FamiliaMembro>
            <FamiliaMembro nome="Amanda"></FamiliaMembro>          
          </Familia>
        </Card>

        <Card titulo="#04 -Desafio Aleatório" color="#FA6900">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 -Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
          <ComParametro titulo="Segundo Componente" aluno="Pedro" nota={9.3} />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
};
