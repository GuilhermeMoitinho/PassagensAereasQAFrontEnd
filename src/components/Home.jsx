import  { useState } from 'react';
import RequestAeroportos from '../api/GetAeroporto';
import { Link } from 'react-router-dom';


import "../styles/Home.css"

const AeroportosUrl = import.meta.env.VITE_API_AEROPORTOS;



const Home = () => {
  const [dadosAeroporto, setDadosAeroporto] = useState([]);

  const [selectedAirport, setSelectedAirport] = useState(null);


  function EfetuarRequestAeroportos(e) {
    e.preventDefault();

    if (AeroportosUrl) {
      RequestAeroportos(AeroportosUrl)
        .then(response => {
            setDadosAeroporto(response.data.dados);
            alert("Dados requisitados com sucesso!")
          console.log(response.data);
        })
        .catch(error => {
          alert("Pode ter ocorrido erro na conexão! Erro: " + error.message)
          console.log(error.message);
        });
    } else {
      console.error("AeroportosUrl não está definido.");
    }
  }

  const openPopup = (airport) => {
    setSelectedAirport(airport);
  };

  const closePopup = () => {
    setSelectedAirport(null);
  };

  function FecharAeroportosDisponiveis() {
    setDadosAeroporto([]);
  }
  

  return (
    <div className='MaiorCaixa'>
      <Link to="/login">Para ter acesso a mais funções, venha efetuar o Login!</Link>
      <Link to="/cadastro/passageiro">Cadastrar passageiro</Link>
        <h1>Passagens aéreas - <b>Horizon</b></h1>
        <p>Ver todos os Aeroportos disponíveis</p>
        <div className='ContainerNoCanto'   >
            <button onClick={EfetuarRequestAeroportos}>Ver todos os aeroportos</button>
            <div>
                {dadosAeroporto.length > 0 ? (
                    <button className='SubirBtn' onClick={FecharAeroportosDisponiveis}>Fechar</button>
                    
                ) : (
                    <p></p>
                )}
            </div>
       

            <div className={dadosAeroporto.length > 0 ? "SepararAeroportos" : ""}>
                {dadosAeroporto.length > 0 &&
                    dadosAeroporto.map((item, index) => (
                    <div className='passouAMaoEmMim' key={index} onClick={() => openPopup(item)}>
                        <h3 className='cliqueEmMim'>Clique em mim para ver melhor</h3>
                        <p>Codigo IATA: {item.codigo}</p>
                        <p>Cidade: {item.cidade}</p>
                        <p>UF: {item.uf}</p>
                        <hr />
                    </div>                   
                    ))
                }
                
            </div>
      </div>

      {selectedAirport && (
        <div className="popup">
          <div className="popup-content">
            <p>Codigo IATA: {selectedAirport.codigo}</p>
            <p>Cidade: {selectedAirport.cidade}</p>
            <p>UF: {selectedAirport.uf}</p>
            <button onClick={closePopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
