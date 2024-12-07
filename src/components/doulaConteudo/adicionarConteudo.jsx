import React, { useState } from "react";

import Swal from "sweetalert2";

export default function Modal() {

    const [formData, setFormData] = useState({
        id_conteudos: "",
        foto_capa: "",
        titulo_conteudo: "",
        data_formatada: "",
        conteudo: "",
        id_gestante_conteudo_usuario: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData({ ...formData, foto_capa: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDateSelection = async () => {
        const { value: date } = await Swal.fire({
            input: "date",confirmButtonColor: '#FFDAE1',
            didOpen: () => {
                const today = new Date().toISOString();
                Swal.getInput().min = today.split("T")[0];
            },
        });

        if (date) {
            setFormData({ ...formData, data_formatada: date });
        }
    };

    const enviarDados = async (data) => {
        try {
            const response = await fetch(
                "https://lotus-back-end.onrender.com/v1/Lotus/conteudos/gestante",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        conteudosDados: [data],
                        quantidade: 1,
                        status_code: 200,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`Erro ao enviar dados: ${response.statusText}`);
            }

            const responseData = await response.json();
            console.log("Dados enviados com sucesso:", responseData);
        } catch (error) {
            console.error("Erro ao enviar os dados:", error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        enviarDados(formData);
        setFormData({
            foto_capa: "",
            titulo_conteudo: "",
            data_formatada: "",
            conteudo: "",
            id_gestante_conteudo_usuario: null,
        });
    };

    return (
        <div className="w-2/3 h-5/6 rounded-3xl p-6 bg-white animate-flip-down animate-once animate-duration-[400ms] animate-delay-100 animate-ease-linear shadow-lg">

            <div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div className="w-full bg-gray-2 h-48 rounded-24">
                        <div>
                            <input
                                className="w-full h-full "
                                type="file"
                                accept="image/*"
                                id="file-input"
                                onChange={handleFileChange}
                                required
                                style={{ display: "none" }} // Oculta o input
                            />
                            <label htmlFor="file-input" className="text-gray-3 text-2xl custom-file-label flex justify-center pt-16 w-full h-full">
                                Escolher Arquivo
                            </label>
                        </div>
                        {formData.foto_capa && (
                            <img
                            className="h-48 relative bottom-[86px] rounded-2xl w-full"
                                src={formData.foto_capa}
                                alt="Pré-visualização"
                            />
                        )}
                    </div>
                 
                    <div className="px-12">
                        <input
                            type="text"
                            className="text-2xl w-full mt-4"
                            placeholder="Insira o titulo da publicação"
                            name="titulo_conteudo"
                            value={formData.titulo_conteudo}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="flex gap-2 px-12">
                        <button type="button" onClick={handleDateSelection}>
                        <p className="text-gray-400">Data da publicação</p>
                        </button>
                        {formData.data_formatada && <p> {formData.data_formatada}</p>}
                    </div>

                    <div className="px-12">
                        <textarea
                        placeholder="Insira o conteúdo da puplicação"
                            className="w-full h-[15vh]"
                            name="conteudo"
                            value={formData.conteudo}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <button className="bg-pink-2 p-2 w-20 rounded-2xl text-white" type="submit">Enviar</button>
                </form>
            </div>
        </div>

    )
}