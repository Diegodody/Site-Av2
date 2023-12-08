// src/Cadastro.js
import React, { useState } from 'react';

const Cadastro = () => {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const [mensagem, setMensagem] = useState('');
  const [erros, setErros] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados((prevDados) => ({ ...prevDados, [name]: value }));
  };

  const validarCampos = () => {
    const novosErros = {};

    // Verifica campos obrigatórios
    if (!dados.nome.trim()) {
      novosErros.nome = 'Nome é obrigatório';
    }

    if (!dados.email.trim()) {
      novosErros.email = 'Email é obrigatório';
    }

    if (!dados.senha.trim()) {
      novosErros.senha = 'Senha é obrigatória';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0; // Retorna true se não houver erros
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validarCampos()) {
      // Lógica para enviar os dados (pode ser uma chamada à API, etc.)
      console.log('Dados do formulário enviados:', dados);

      // Exemplo de mensagem de sucesso
      setMensagem('Cadastro efetuado com sucesso!');
    } else {
      setMensagem('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  return (
    <div className="container">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={dados.nome}
            onChange={handleChange}
          />
          {erros.nome && <span className="erro">{erros.nome}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
          />
          {erros.email && <span className="erro">{erros.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={dados.senha}
            onChange={handleChange}
          />
          {erros.senha && <span className="erro">{erros.senha}</span>}
        </div>

        <div className="button-container">
          <button type="submit">Enviar</button>
          <button type="reset">Limpar</button>
        </div>
      </form>

      {mensagem && <p id="mensagem">{mensagem}</p>}
    </div>
  );
};

export default Cadastro;
