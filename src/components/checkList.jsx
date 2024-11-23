"use client"

import { useState } from "react";
import React, { useEffect } from "react";
import Swal from 'sweetalert2';
import Loading from '@/components/loading';
import { DegradeOrange, DegradePink, DegradeRed } from '@/components/degrade';

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [enxovalDados, setEnxovalDados] = useState([]);
    const [quantidade, setQuantidade] = useState(0);

    // Get
    const [loading, setLoading] = useState(true);  // Estado para controlar o carregamento

    useEffect(() => {
        fetch("https://lotus-back-end.onrender.com/v1/Lotus/enxoval/")
            .then((response) => response.json())
            .then((data) => {
                const filtrados = data.enxovalDados.filter(
                    (item) => item.id_gestante_usuario_enxoval === 3
                );
                setEnxovalDados(filtrados);
                setQuantidade(filtrados.length);
                setLoading(false);  // Finaliza o carregamento
            })
            .catch((error) => {
                console.error("Erro ao buscar dados:", error);
                setLoading(false);  // Finaliza o carregamento em caso de erro
            });
    }, []);


    if (loading) {
        return (
            <Loading></Loading>
        )  // Exibe o texto enquanto carrega
    }

    // Push 
    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            const novoItem = {
                produtos_enxoval: newTodo.trim(),
                id_gestante_usuario_enxoval: 3 // Substitua pelo ID correto do usuário 
            };

            // Atualiza a lista localmente
            setTodos([...todos, { text: newTodo.trim(), checked: false }]);
            setNewTodo("");

            // Faz o push para a API
            fetch("https://lotus-back-end.onrender.com/v1/Lotus/enxoval/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoItem),
            })
                .then(response => {
                    if (response.ok) {
                        alert()
                        return response.json();
                    }
                    throw new Error("Erro ao salvar o item");
                })
                .catch(error => {
                    console.error("Erro:", error);
                    alert("Erro ao salvar o item na API. Verifique e tente novamente.");
                });
        }
    };

    //Modal de item adicionado
    const alert = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Item adicionado",
            showConfirmButton: false,
            timer: 1500
        });
    }

    // delete previa 
    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    // check previa 
    const handleToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].checked = !newTodos[index].checked;
        setTodos(newTodos);
    };

    return (
        <div className="animate-flip-up animate-once animate-duration-500 animate-ease-linear    h-full w-full flex flex-col rounded-3xl  drop-shadow-lg bg-white">

            <DegradePink></DegradePink>
            <div className="px-24 py-6 max-xl:px-6">
                
                <div className="text-gray-4 w-full font-ABeeZee border-b-4 border-zinc-200 text-2xl max-xl:text-xl max-xl:pb-2 flex items-center justify-center mb-6">
                    <h1 >Monte seu enxoval</h1>
                </div>

                <div className="flex gap-4 mb-4 max-xl:gap-2">
                    <input
                        className="w-[80vw] max-xl:w-[45vw] rounded-3xl px-4 py-2 border-[3px] border-pink-2"
                        type="text"
                        value={newTodo}
                        placeholder="Adicionar novo item..."
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button className="bg-pink-3 text-white font-ABeeZee rounded-full px-4 py-2" onClick={handleAddTodo}>Salvar</button>
                </div>

                <div className="">

                    <ul className="flex flex-col gap-4">
                        {enxovalDados.map((item, todo) => (

                            <li
                                className="animate-fade-up animate-once animate-duration-[400ms] animate-ease-linear   flex drop-shadow-md bg-white items-center h-14 font-ABeeZee rounded-lg px-2 w-full justify-between"
                                key={item.id_enxoval}>

                                <div className='flex gap-2'>
                                    <input
                                        type="checkbox"
                                        className="w-6 h-6 text-orange-600 border-gray-300 rounded focus:ring-offset-amber-600"
                                        checked={todo.checked}
                                    />

                                    <p className="text-gray-4">
                                        {item.produtos_enxoval}
                                    </p>

                                </div>

                                <button

                                    className='bg-pink-2 w-10 text-2xl h-10 font-ABeeZee text-white flex items-center justify-center rounded-full'
                                    style={{ marginTop: "5px", marginBottom: "5px" }}
                                // onClick={() => handleDeleteTodoAPI(index)}
                                >
                                    x
                                </button>
                            </li>


                        ))}
                    </ul>
                </div>

                <ul className="flex flex-col gap-4 mt-4 ">
                    {todos.map((todo, index) => (
                        <li
                            className="animate-fade-up animate-once animate-duration-[400ms] animate-ease-linear     text-gray-4 drop-shadow-md bg-white items-center h-14 font-ABeeZee rounded-lg px-2 w-full justify-between"
                            key={index}
                            style={{
                                display: "flex",
                            }}
                        >
                            <div
                                className="flex gap-2"
                                style={{ display: "flex", alignItems: "center" }}>
                                <input
                                    type="checkbox"
                                    className="w-6 h-6 text-orange-600 border-gray-300 rounded focus:ring-offset-amber-600"
                                    checked={todo.checked}
                                    onChange={() => handleToggleTodo(index)}
                                />
                                <span
                                    style={{
                                        marginRight: "10px",
                                        textDecoration: todo.checked ? "line-through" : "none",
                                    }}
                                >
                                    {todo.text}
                                </span>
                            </div>
                            <button

                                className='bg-pink-2 w-10 text-2xl h-10 font-ABeeZee text-white flex items-center justify-center rounded-full'
                                style={{ marginTop: "5px", marginBottom: "5px" }}
                                onClick={() => handleDeleteTodo(index)}
                            >
                                x
                            </button>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
};

export default TodoList;