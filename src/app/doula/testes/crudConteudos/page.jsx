'use client'

import React, { useState } from 'react';
import axios from 'axios';

const FormularioConteudo = () => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [fotoCapa, setFotoCapa] = useState('');
  const [data, setData] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função para enviar os dados
  const enviarDados = async (e) => {
    e.preventDefault();

    const url = "https://lotus-back-end.onrender.com/v1/Lotus/conteudos/gestante";
    
    const novoConteudo = {
      conteudosDados: [
        {
          id_conteudos: Date.now(),  // Gerando um ID temporário (substitua com um ID real se necessário)
          foto_capa: fotoCapa,
          titulo_conteudo: titulo,
          data_formatada: data,
          conteudo: conteudo,
          id_gestante_conteudo_usuario: null
        }
      ],
      quantidade: 1,
      status_code: 200
    };

    try {
      const response = await axios.post(url, novoConteudo, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setMensagem('Conteúdo enviado com sucesso!');
        setTitulo('');
        setConteudo('');
        setFotoCapa('');
        setData('');
      } else {
        setMensagem(`Erro: ${response.status}`);
      }
    } catch (error) {
      setMensagem('Erro na requisição: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Inserir Conteúdo</h2>
      <form onSubmit={enviarDados}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Conteúdo:</label>
          <textarea
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Foto de Capa (URL):</label>
          <input
            type="text"
            value={fotoCapa}
            onChange={(e) => setFotoCapa(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Data (formato DD-MM-YY):</label>
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>

        <button type="submit">Enviar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default FormularioConteudo;

