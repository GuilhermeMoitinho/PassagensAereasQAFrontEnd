import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetVooPorIdAPI from '../api/GetVooPorId';
import { useNavigate } from "react-router-dom";
import PutVoo from '../api/PutVoo';

import '../styles/EditarVoo.css';

const EditarVoo = () => {
  const { vooId } = useParams();
  const [voo, setVoo] = useState(null);
  let redirect = useNavigate();
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [dataHoraDePartida, setDataHoraDePartida] = useState('');
  const [dataHoraDeChegada, setDataHoraDeChegada] = useState('');
  const [tipo, setTipo] = useState('');
  const [quantidadeDosAssentos, setQuantidadeDosAssentos] = useState('');
  const [valorDoAssento, setValorDoAssento] = useState('');

  const URL = `https://backendaerohorizon.azurewebsites.net/api/v1/voo/voo/${vooId}`;

  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    GetVooPorIdAPI(URL, headers)
      .then((response) => {
        setVoo(response.data.dados);

        // Preencher os estados com os valores atuais do voo
        setOrigem(response.data.dados.origem);
        setDestino(response.data.dados.destino);
        setDataHoraDePartida(response.data.dados.dataHoraDePartida);
        setDataHoraDeChegada(response.data.dados.dataHoraDeChegada);
        setTipo(response.data.dados.tipo);
        setQuantidadeDosAssentos(response.data.dados.quantidadeDosAssentos);
        setValorDoAssento(response.data.dados.valorDoAssento);

        console.log(response.data.dados);
      })
      .catch((error) => {
        console.error('Erro na requisição:', error);
      });
  }, [vooId]);

  const handleUpdate = () => {
    // Criar objeto com os valores atualizados
    const updatedVoo = {
      origem,
      destino,
      dataHoraDePartida,
      dataHoraDeChegada,
      tipo,
      quantidadeDosAssentos,
      valorDoAssento,
    };

    PutVoo(`https://backendaerohorizon.azurewebsites.net/api/v1/voo/edite/${vooId}`, headers, updatedVoo)
      .then((data) => {
        console.log('Voo atualizado com sucesso:', data);
        alert("Dados enviadoa.")
        redirect("/gestao")
      })
      .catch((error) => {
        console.error('Erro ao atualizar o voo:', error);
        alert("Tivemos problemas no envio dos dados. Tente mais tarde.")
        redirect("/gestao")
      });
  };

  return (
    <div className='passouAMaoEmMim'>
      {voo ? (
        <div>
          <h2>Detalhes do Voo</h2>
          <label htmlFor='origem'>Origem</label>
          <input value={origem} type='text' onChange={(e) => setOrigem(e.target.value)} />
          
          <label htmlFor='destino'>Destino</label>
          <input value={destino} type='text' onChange={(e) => setDestino(e.target.value)} />

          <label htmlFor='dataHoraDePartida'>Data de Partida</label>
          <input value={dataHoraDePartida} type='text' onChange={(e) => setDataHoraDePartida(e.target.value)} />

          <label htmlFor='dataHoraDeChegada'>Data da Volta</label>
          <input value={dataHoraDeChegada} type='text' onChange={(e) => setDataHoraDeChegada(e.target.value)} />

          <label htmlFor='tipo'>Tipo de Passagem</label>
          <input value={tipo} type='text' onChange={(e) => setTipo(e.target.value)} />

          <label htmlFor='quantidadeDosAssentos'>Quantidade de Assentos</label>
          <input value={quantidadeDosAssentos} type='text' onChange={(e) => setQuantidadeDosAssentos(e.target.value)} />

          <label htmlFor='valorDoAssento'>Valor do Assento</label>
          <input value={valorDoAssento} type='text' onChange={(e) => setValorDoAssento(e.target.value)} />

          <button onClick={handleUpdate}>Atualizar Voo</button>
        </div>
      ) : (
        <p>Carregando detalhes do voo...</p>
      )}
    </div>
  );
};

export default EditarVoo;
