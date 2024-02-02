import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import GetVoosAPI from '../api/GetVoos';

import '../styles/HomeGestor.css';

const HomeGestor = () => {
  const [dados, setDados] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  let redirect = useNavigate();
  const URL = 'https://backendaerohorizon.azurewebsites.net/api/v1/voo/voos';
  const token = localStorage.getItem('token');
  const usuario = localStorage.getItem('NomeUsuario');
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    GetVoosAPI(URL, headers)
      .then((response) => {
        setDados(response.data.dados);
        console.log(response.data.dados);
      })
      .catch((error) => {
        console.error('Erro na requisição:', error);
        alert("Tivemos problemas no envio dos dados. Tente mais tarde.")
        redirect("/")
      });
  }, []);

  const openPopup = (flight) => {
    setSelectedFlight(flight);
  };

  const closePopup = () => {
    setSelectedFlight(null);
  };

  return (
    <div>
      <Link to="/">Voltar ao Home</Link>
      <p>User: {usuario}</p>
      <h2>Listagem de Voos</h2>

      <div className={dados.length > 0 ? 'SepararAeroportos' : ''}>
        {dados.length > 0 &&
          dados.map((item, index) => (
            <div className="passouAMaoEmMim" key={index} onClick={() => openPopup(item)}>
              <p>Origem: {item.origem}</p>
              <p>Destino: {item.destino}</p>
              <p>Data de partida: {item.dataHoraDePartida}</p>
              <p>Data de volta: {item.dataHoraDeChegada}</p>
              <p>Tipo de classes: {item.tipo}</p>
              <p>Quantidade de acentos: {item.quantidadeDosAssentos}</p>
              <p>Valor do assento: {item.valorDoAssento}</p>
              <hr />
            </div>
          ))}
      </div>

      {selectedFlight && (
        <div className="popup">
          <div className="popup-content">
            <p>Origem: <span>{selectedFlight.origem}</span></p>
            <p>Destino: <span>{selectedFlight.destino}</span></p>
            <p>Data de partida: <span>{selectedFlight.dataHoraDePartida}</span></p>
            <p>Data de volta: <span>{selectedFlight.dataHoraDeChegada}</span></p>
            <p>Tipo de classes: <span>{selectedFlight.tipo}</span></p>
            <p>Quantidade de acentos: <span>{selectedFlight.quantidadeDosAssentos}</span></p>
            <p>Valor do assento: <span>{selectedFlight.valorDoAssento}</span></p>
            <button onClick={closePopup}>Fechar</button>
            <Link to={`/editar/${selectedFlight.id}`}>
              <button>Editar</button>
            </Link>
          </div>
        </div>
      )}

      <Link to="/">Voltar para a tela de cadastro</Link>
    </div>
  );
};

export default HomeGestor;
