'use client'; // Marca o componente como Client Component

import React, { useState, useEffect } from 'react';

const CRUDDoulas = () => {
  const [doulas, setDoulas] = useState([]);
  const [newDoula, setNewDoula] = useState({ nome_doula: '', sobrenome_doula: '', email_doula: '', foto_doula: '', tempo_de_atuacao: '', sobremim_doula: '' });
  const [loading, setLoading] = useState(true);
  const [editDoula, setEditDoula] = useState(null);

  // Função para listar doulas
  const fetchDoulas = () => {
    setLoading(true);
    fetch('https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula')
      .then((response) => response.json())
      .then((data) => {
        setDoulas(data.cadastro);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados', error);
        setLoading(false);
      });
  };

  // Filtra a lista para exibir apenas a doula com id_usuario_doula === 1
  const doulaToShow = doulas.filter(doula => doula.id_usuario_doula === 1);

  // Efeito para inicializar e carregar as doulas ao montar o componente
  useEffect(() => {
    fetchDoulas();
  }, []);


  // Função para adicionar uma nova doula
  const handleAddDoula = (event) => {
    event.preventDefault();
    fetch('https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDoula),
    })
      .then((response) => response.json())
      .then(() => {
        fetchDoulas(); // Recarrega a lista de doulas após adicionar
        setNewDoula({ nome_doula: '', sobrenome_doula: '', email_doula: '', foto_doula: '', tempo_de_atuacao: '', sobremim_doula: '' });
      })
      .catch((error) => console.error('Erro ao adicionar doula', error));
  };

  // Função para editar uma doula
  const handleEditDoula = (doula) => {
    setEditDoula(doula);
    setNewDoula(doula); // Preenche os campos com os dados da doula que será editada
  };

  // Função para salvar a edição de uma doula
  const handleSaveEdit = (event) => {
    event.preventDefault();
    fetch(`https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula/${editDoula.id_usuario_doula}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDoula),
    })
      .then((response) => response.json())
      .then(() => {
        fetchDoulas(); // Recarrega a lista de doulas após editar
        setEditDoula(null); // Limpa o estado de edição
        setNewDoula({ nome_doula: '', sobrenome_doula: '', email_doula: '', foto_doula: '', tempo_de_atuacao: '', sobremim_doula: '' });
      })
      .catch((error) => console.error('Erro ao editar doula', error));
  };

  // Função para excluir uma doula
  const handleDeleteDoula = (id) => {
    fetch(`https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula/${id}`, {
      method: 'DELETE',
    })
      .then(() => fetchDoulas()) // Recarrega a lista de doulas após exclusão
      .catch((error) => console.error('Erro ao excluir doula', error));
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="p-12">
      <h1>Gestão de Doulas</h1>

      {/* Formulário de Adição ou Edição */}
      <form 
      className="bg-gray-500 p-4 absolute bottom-[50%]"  
      onSubmit={editDoula ? handleSaveEdit : handleAddDoula}>

        <h2>{editDoula ? 'Editar Doula' : 'Adicionar Nova Doula'}</h2>
        <input
          type="text"
          placeholder="Nome"
          value={newDoula.nome_doula}
          onChange={(e) => setNewDoula({ ...newDoula, nome_doula: e.target.value })}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={newDoula.sobrenome_doula}
          onChange={(e) => setNewDoula({ ...newDoula, sobrenome_doula: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newDoula.email_doula}
          onChange={(e) => setNewDoula({ ...newDoula, email_doula: e.target.value })}
        />
        <input
          type="text"
          placeholder="Foto URL"
          value={newDoula.foto_doula}
          onChange={(e) => setNewDoula({ ...newDoula, foto_doula: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tempo de Atuação"
          value={newDoula.tempo_de_atuacao}
          onChange={(e) => setNewDoula({ ...newDoula, tempo_de_atuacao: e.target.value })}
        />
        <textarea
          placeholder="Sobre Mim"
          value={newDoula.sobremim_doula}
          onChange={(e) => setNewDoula({ ...newDoula, sobremim_doula: e.target.value })}
        />
        <button type="submit">{editDoula ? 'Salvar Edição' : 'Adicionar Doula'}</button>
      </form>

       {/* Lista de Doulas Filtrada para Exibir Somente a Doula com ID 1 */}
       <ul>
        {doulaToShow.length > 0 ? (
          doulaToShow.map((doula) => (
            <li key={doula.id_usuario_doula}>
              <img src={doula.foto_doula} alt={`${doula.nome_doula} ${doula.sobrenome_doula}`} width="100" height="100" />
              <h3>{doula.nome_doula} {doula.sobrenome_doula}</h3>
              <p>Email: {doula.email_doula}</p>
              <p>Tempo de Atuação: {doula.tempo_de_atuacao}</p>
              <p>Sobre Mim: {doula.sobremim_doula}</p>
              <button onClick={() => handleEditDoula(doula)}>Editar</button>
              <button onClick={() => handleDeleteDoula(doula.id_usuario_doula)}>Excluir</button>
            </li>
          ))
        ) : (
          <p>Nenhuma doula encontrada com o ID 1.</p>
        )}
      </ul>


    </div>
  );
};

export default CRUDDoulas;
