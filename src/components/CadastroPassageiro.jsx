import { useState, useEffect } from 'react';
import PostCadastroPassageiro from '../api/PostPassageiro';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const CadastroDePassageiro = () => {
  const [numeroVoo, setNumeroVoo] = useState("");
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [nomePassageiro, setNomePassageiro] = useState("");
  const [cpfPassageiro, setCpfPassageiro] = useState("");
  const [possuiDespachoBagagem, setPossuiDespachoBagagem] = useState("");

  const URL = "https://backendaerohorizon.azurewebsites.net/api/v1/passageiro/cadastrar";

  const body = {
    NumeroVoo: numeroVoo,
    Origem: origem,
    Destino: destino,
    NomePassageiro: nomePassageiro,
    CpfPassageiro: cpfPassageiro,
    PossuiDespachoBagagem: possuiDespachoBagagem
  };

  useEffect(() => {
    console.log("Componente CadastroDePassageiro montado");
  }, []);

  const redirect = useNavigate();

  function efetuarRequisicao(e) {
    if (e) {
      e.preventDefault();
    }

    PostCadastroPassageiro(URL, body)
      .then(response => {
        console.log(response.data);
        alert("Cadastro efetuado com sucesso!");

        redirect("/");
      })
      .catch(error => {

        console.error("Erro no cadastro:", error);
        alert("Erro no cadastro. Verifique os campos e tente novamente.");
        redirect("/");
      });
  }

  return (
    <div className='container'>
      <h1>Tela de Cadastro de Passageiro</h1>

      <input
        value={numeroVoo}
        onChange={(e) => setNumeroVoo(e.target.value)}
        type="text"
        placeholder="Número do Voo"
      />

      <input
        value={origem}
        onChange={(e) => setOrigem(e.target.value)}
        type="text"
        placeholder="Origem"
      />

<input
  value={destino}
  onChange={(e) => setDestino(e.target.value)}
  type="text"
  placeholder="Destino"
/>

<input
  value={nomePassageiro}
  onChange={(e) => setNomePassageiro(e.target.value)}
  type="text"
  placeholder="Nome do Passageiro"
/>

<input
  value={cpfPassageiro}
  onChange={(e) => setCpfPassageiro(e.target.value)}
  type="text"
  placeholder="CPF do Passageiro"
/>

{/* Exemplo de campo de seleção para Possui Despacho de Bagagem */}
<select
  value={possuiDespachoBagagem}
  onChange={(e) => setPossuiDespachoBagagem(e.target.value)}
>
  <option value="true">Possui Despacho de Bagagem</option>
  <option value="false">Não Possui Despacho de Bagagem</option>
</select>


      <button onClick={efetuarRequisicao}>Cadastrar</button>

      <Link to="/gestao">Ir para a área de gestão</Link>
    </div>
  );
};

export default CadastroDePassageiro;
