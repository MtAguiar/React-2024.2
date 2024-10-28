import React from "react";
//Importando uma imagem
import Logo from "../assets/fla.png";
export default function Time() {
  //   Array de times do Brasileirão
  //   É possível fazer isso sem usar map se não precisar de index. Mas é mais comum usar arrow function.
  //   const times     = ["Flamengo", "Vasco", "Botafogo", "Fluminense"];
  const times = ["Flamengo", "Vasco", "Botafogo", "Fluminense"];
  //Todo map tem que usar arrow function
  const listaTimes = times.map((time, index) => <li key={index}>{time} </li>);

  const pessoa = {
    nome: "Teteu",
    idade: 25,
  };

  const dadosPessoa = (pessoa) => {
    return pessoa.nome + "! Você tem: " + pessoa.idade + " anos";
  };

  const soma = (a,b) => a+b;
//Criar uma função que receberá um texto e retorno ele em maiusculo

const texto = (msg) => msg.toUpperCase();

  return (
    <div>
      <h1> Lista de Times</h1>
      <p> Texto em Maiúsculo: {texto("Textão")}</p>
      <p>A soma de 5 + 7 é: {soma(80,370)}</p>
      <p> Olá, {dadosPessoa(pessoa)}</p>
      {/* //Importando uma imagem como "variável" */}
      <img src={Logo} alt="Fla" />
      {/* //Importando imagem diretamente sem importar como variável */}
      {/* <img src={require("..assets/logo.png")} alt="Fla" /> */}
      <ul>{listaTimes}</ul>
    </div>
  );
}
