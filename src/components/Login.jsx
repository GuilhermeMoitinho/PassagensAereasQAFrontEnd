import { useState, useEffect } from 'react';
import PostAuth from '../api/PostLoginAuth';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const URL = import.meta.env.VITE_API_GESTORAUTH;

  const body = {
    Email: email,
    Senha: senha
  };

  useEffect(() => {
    console.log("Componente Login montado");
    alert("Efetue seu Login!");
  }, []);
  
  let redirect = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      EfetuarRequicisao();
    }
  };

  function EfetuarRequicisao(e) {
    if (e) {
      e.preventDefault();
    }

    PostAuth(URL, body)
      .then(response => {
        console.log(response.data);
        alert("Efetuado com sucesso!")

        let token = response.data.token

        localStorage.setItem('token', token);
        localStorage.setItem("NomeUsuario", email)
        redirect("/gestao")
      })
      .catch(error => {
        if (email === "" || senha === "") {
          alert("Erro! Verifique se preencheu todos os campos.");
        }
        if (error.response && error.response.status === 500) {
          alert("Usuário não encontrado. Verifique suas credenciais.");
          setEmail("");
          setSenha("");
        } else {
          alert("Verifique suas credenciais, usuários pode não existir.", error);
          setEmail("");
          setSenha("");
        }
      });
  }

  return (
    <div className='container'>
      <h1>Tela de Login</h1>

      <Link to="/">Voltar ao inicio</Link>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
        className="number"
      />
      <input
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        type="password"
        placeholder="Senha"
        className="number"
        onKeyDown={handleKeyDown}
      />

      <button onClick={EfetuarRequicisao}>Enviar</button>

      <Link to="/gestao">Venha para a área de gestão</Link>
    </div>
  );
};

export default Login;