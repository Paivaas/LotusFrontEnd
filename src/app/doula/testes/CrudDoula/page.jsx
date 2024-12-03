"use client";
import React, { useState, useEffect } from 'react';

const DoulaCrud = () => {
  const [doulas, setDoulas] = useState([]);
  const [doula, setDoula] = useState({
    nome_doula: '',
    sobrenome_doula: '',
    email_doula: '',
    senha_doula: '',
    cpf_doula: '',
    sobremim_doula: '',
    foto_doula: '',
    tempo_de_atuacao: ''
  });
  const [editId, setEditId] = useState(null);

  // Função para buscar todas as doulas
  const fetchDoulas = async () => {
    try {
      const response = await fetch('https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula');
      if (!response.ok) {
        throw new Error('Erro ao buscar doulas');
      }
      const data = await response.json();
      setDoulas(data.cadastro);  // Agora estamos usando data.cadastro pois é assim que está estruturado o JSON
    } catch (error) {
      console.error('Erro ao carregar doulas:', error);
    }
  };

  // Função para criar uma nova doula
  const createDoula = async () => {
    try {
      const response = await fetch('https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doula),
      });
      if (!response.ok) {
        throw new Error('Erro ao criar doula');
      }
      const newDoula = await response.json();
      setDoulas([...doulas, newDoula]);  // Adiciona a nova doula à lista
      setDoula({ nome_doula: '', sobrenome_doula: '', email_doula: '', senha_doula: '', cpf_doula: '', sobremim_doula: '', foto_doula: '', tempo_de_atuacao: '' }); // Limpa o formulário
    } catch (error) {
      console.error('Erro ao criar doula:', error);
    }
  };

  // Função para atualizar os dados de uma doula
  const updateDoula = async () => {
    try {
      const response = await fetch(`https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doula),
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar doula');
      }
      const updatedDoula = await response.json();
      setDoulas(doulas.map((d) => (d.id_usuario_doula === editId ? updatedDoula : d)));  // Atualiza a doula na lista
      setDoula({ nome_doula: '', sobrenome_doula: '', email_doula: '', senha_doula: '', cpf_doula: '', sobremim_doula: '', foto_doula: '', tempo_de_atuacao: '' }); // Limpa o formulário
      setEditId(null);  // Limpa o estado de edição
    } catch (error) {
      console.error('Erro ao atualizar doula:', error);
    }
  };

  // Função para excluir uma doula
  const deleteDoula = async (id) => {
    try {
      const response = await fetch(`https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir doula');
      }
      setDoulas(doulas.filter((doula) => doula.id_usuario_doula !== id));  // Remove a doula da lista
    } catch (error) {
      console.error('Erro ao excluir doula:', error);
    }
  };

  // Função para definir os dados no formulário quando clicar em editar
  const handleEdit = (doula) => {
    setDoula({
      nome_doula: doula.nome_doula,
      sobrenome_doula: doula.sobrenome_doula,
      email_doula: doula.email_doula,
      senha_doula: doula.senha_doula,
      cpf_doula: doula.cpf_doula,
      sobremim_doula: doula.sobremim_doula,
      foto_doula: doula.foto_doula,
      tempo_de_atuacao: doula.tempo_de_atuacao,
    });
    setEditId(doula.id_usuario_doula);
  };

  // Carregar as doulas ao montar o componente
  useEffect(() => {
    fetchDoulas();
  }, []);

  return (
    <div>
      <h1>Cadastro de Doulas</h1>

      {/* Formulário para criar ou editar uma doula */}
      <form onSubmit={(e) => {
        e.preventDefault();
        if (editId) {
          updateDoula();
        } else {
          createDoula();
        }
      }}>
        <input
          type="text"
          placeholder="Nome"
          value={doula.nome_doula}
          onChange={(e) => setDoula({ ...doula, nome_doula: e.target.value })}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={doula.sobrenome_doula}
          onChange={(e) => setDoula({ ...doula, sobrenome_doula: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={doula.email_doula}
          onChange={(e) => setDoula({ ...doula, email_doula: e.target.value })}
        />
        <input
          type="password"
          placeholder="Senha"
          value={doula.senha_doula}
          onChange={(e) => setDoula({ ...doula, senha_doula: e.target.value })}
        />
        <input
          type="text"
          placeholder="CPF"
          value={doula.cpf_doula}
          onChange={(e) => setDoula({ ...doula, cpf_doula: e.target.value })}
        />
        <textarea
          placeholder="Sobre mim"
          value={doula.sobremim_doula}
          onChange={(e) => setDoula({ ...doula, sobremim_doula: e.target.value })}
        />
        <input
          type="text"
          placeholder="Foto URL"
          value={doula.foto_doula}
          onChange={(e) => setDoula({ ...doula, foto_doula: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tempo de Atuação"
          value={doula.tempo_de_atuacao}
          onChange={(e) => setDoula({ ...doula, tempo_de_atuacao: e.target.value })}
        />
        <button type="submit">{editId ? 'Atualizar Doula' : 'Criar Doula'}</button>
      </form>

      {/* Exibindo a lista de doulas */}
      <ul>
        {doulas.map((doula) => (
          <li key={doula.id_usuario_doula}>
            <h3>{doula.nome_doula} {doula.sobrenome_doula}</h3>
            <p>Email: {doula.email_doula}</p>
            <p>Tempo de atuação: {doula.tempo_de_atuacao}</p>
            <img src={doula.foto_doula} alt={`${doula.nome_doula} ${doula.sobrenome_doula}`} width="100" />
            <button onClick={() => handleEdit(doula)}>Editar</button>
            <button onClick={() => deleteDoula(doula.id_usuario_doula)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoulaCrud;
