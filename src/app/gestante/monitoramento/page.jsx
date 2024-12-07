"use client";

import Image from "next/image";
import { useState } from "react";
import Swal from 'sweetalert2';

// Import das imagens 
import logo from "@/public/icons/utilities/lotus-icon.svg";
import Calendario from "@/public/icons/utilities/calendario-cinzaclaro.png";
import conteudos from "@/public/icons/nav/conteudos.svg";
import galeria from "@/public/icons/nav/galeria.svg";
import perfil from "@/public/icons/nav/Ativo/perfil.png";
import logout from "@/public/icons/nav/Ativo/logout.png";
import chat from "@/public/icons/nav/chat.svg";
import monitoramento from "@/public/icons/nav/monitoramento.svg";
import home from "@/public/icons/nav/home.svg";


// Sentimentos
import triste from "@/public/icons/monitoramento/triste.png";
import felicidade from "@/public/icons/monitoramento/felicidade.png"
import raiva from "@/public/icons/monitoramento/raiva.png"
import neutra from "@/public/icons/monitoramento/neutra.png"
import sensivel from "@/public/icons/monitoramento/sensivel.png"

// Dor
import sensNoSeio from "@/public/icons/monitoramento/sensNoSeio.png";
import dorNaCabeca from "@/public/icons/monitoramento/dorDeCabeca.png";
import tontura from "@/public/icons/monitoramento/tontura.png"
import dorNasPernas from "@/public/icons/monitoramento/dorNasPernas.png"
import semDor from "@/public/icons/monitoramento/semDorROSA.png"

//Digestao
import azia from "@/public/icons/monitoramento/azia.png";
import enjoo from "@/public/icons/monitoramento/enjoo.png";
import ok from "@/public/icons/monitoramento/ok.png";
import comGases from "@/public/icons/monitoramento/comGases.png";
import vomitando from "@/public/icons/monitoramento/vomitando.png"

//Vida sexual
import relacaoProtegida from "@/public/icons/monitoramento/relacaoProtegida.png";
import relacaoDesprotegida from "@/public/icons/monitoramento/relacaoDesprotegida.png";
import naoHouveRelacao from "@/public/icons/monitoramento/naoHouveRelacao.png"

//Vida social
import sociavel from "@/public/icons/monitoramento/sociavel.png";
import introvertida from "@/public/icons/monitoramento/introvertida.png";
import conflitante from "@/public/icons/monitoramento/conflitante.png"


//Import dos componentes do nav
import { HomeGestante, HomeGestanteAtivo } from '@/components/nav/home';
import { GaleriaGestante, GaleriaGestanteAtivo } from '@/components/nav/galeria';
import { MonitoramentoGestante, MonitoramentoGestanteAtivo } from '@/components/nav/monitoramento';
import { PerfilGestante, PerfilGestanteAtivo } from '@/components/nav/perfil';
import { ConteudosGestante, ConteudosGestanteAtivo } from '@/components/nav/conteudos';
import { Logout } from '@/components/nav/logout';
import { NavTop } from '@/components/nav/navTop';
import { DegradeRed } from '@/components/degrade';




// Import das imagens (mantém os imports existentes)
const CircularProgress = ({ progress, label, color }) => {
    const circumference = 100 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex flex-col items-center justify-center w-full bg-cover pl-14">
            <svg className="w-32 h-32" viewBox="1 -4 118 128">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e0e0e0" strokeWidth="18" />
                <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    strokeWidth="18"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    stroke={color}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                />
                <text x="60" y="65" textAnchor="middle" fontSize="24" fill="#333">

                </text>
            </svg>
            <span className="text-center mt-2">{label}</span>
        </div>
    );
}

// Modal com botões de monitoramento
const Modal = ({ isOpen, onClose, onSave }) => {
    const [localSelections, setLocalSelections] = useState([]);
    const [selectedDate, setSelectedDate] = useState(false); 

    const handleSelection = (option) => {
        setLocalSelections((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    const handleSave = () => {
        onSave(localSelections);
        onClose();
    };

    if (!isOpen) return null;

    
    const handleDateSelection = async () => {
        const { value: date } = await Swal.fire({
            input: "date",confirmButtonColor: '#FBA1A1',
            didOpen: () => {
                const today = new Date().toISOString();
                Swal.getInput().min = today.split("T")[0];
            },
        });

        if (date) {
            setSelectedDate(date);  // Atualiza o estado com a data selecionada
         
            
        }
    }

    // Dados de cada categoria e seus respectivos botões e ícones
    const monitoramentoData = [
        {
            title: "Sentimentos",
            options: [
                { label: "Tristeza", icon: triste },
                { label: "Felicidade", icon: felicidade },
                { label: "Raiva", icon: raiva },
                { label: "Sensível", icon: sensivel },
                { label: "Neutra", icon: neutra },
            ],
        },
        {
            title: "Dor",
            options: [
                { label: "Sens. nos seios", icon: sensNoSeio },
                { label: "Dor de cabeça", icon: dorNaCabeca },
                { label: "Tontura", icon: tontura },
                { label: "Dor nas pernas", icon: dorNasPernas },
                { label: "Sem dor", icon: semDor },
            ],
        },
        {
            title: "Digestão",
            options: [
                { label: "Azia", icon: azia },
                { label: "Enjoo", icon: enjoo },
                { label: "Vomitando", icon: vomitando },
                { label: "Com gases", icon: comGases },
                { label: "Ok", icon: ok },
            ],
        },
        {
            title: "Vida Sexual",
            options: [
                { label: "Relação protegida", icon: relacaoProtegida },
                { label: "Relação desprotegida", icon: relacaoDesprotegida },
                { label: "Não houve relação", icon: naoHouveRelacao },
            ],
        },
        {
            title: "Vida Social",
            options: [
                { label: "Sociável", icon: sociavel },
                { label: "Introvertida", icon: introvertida },
                { label: "Conflitante", icon: conflitante },
            ],
        },
    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[60%] relative h-[70%] overflow-y-auto">
                <div className="text-center text-gray-500">
                    <h1 className="text-[35px] text-gray-300">Monitoramento de hoje</h1>
                    <div className="w-3/4 mx-auto mt-2 h-1 bg-gray-100 shadow-slate-200"></div>
                </div>

                <div className="mt-6 space-y-8">
                    {monitoramentoData.map((section, index) => (
                        <div key={index} className="text-left">
                            <h2 className="text-[24px] text-gray-700 mb-4">{section.title}</h2>
                            <div className="space-y-3">
                                {section.options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        className={`flex items-center p-3 w-full text-left ${localSelections.includes(option.label)
                                            ? "bg-gray-200"
                                            : "bg-gray-100"
                                            } rounded-lg hover:bg-gray-200`}
                                        onClick={() => handleSelection(option.label)}
                                    >
                                        <Image
                                            src={option.icon}
                                            alt={`${option.label} Icon`}
                                            width={24}
                                            height={24}
                                            className="mr-3"
                                        />
                                        <span className="text-gray-700">{option.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="flex gap-2 justify-end">

                        <div className="flex items-center justify-center gap-2 border-[3px] px-4 py-2 rounded-lg w-64">
                            <Image className="w-[10%]" alt="Lotus Icon" src={Calendario}></Image>
                            <button onClick={handleDateSelection}>Data de hoje</button>
                            {selectedDate && <span>{selectedDate}</span>}
                        </div>

                        <button onClick={onClose} className="bg-[#FFDAE1] text-[#FFAEBF] w-40 p-2 rounded-lg">
                            Cancelar
                        </button>
                        <button onClick={handleSave} className="bg-[#DCEFC4] text-[#97CC58] p-2 w-40 rounded-lg">
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Monitoramento(selectedDate, date) {

    const [selectedGroups, setSelectedGroups] = useState([]); // Grupos de opções selecionadas
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const progressData = [
        { label: "Se sentiu nervosa", progress: 75, color: "#FD9999" },
        { label: "Se sentiu ansiosa", progress: 50, color: "#FDD69A" },
        { label: "Sentiu medo", progress: 2, color: "#96A8FD" },
        { label: "Se sentiu feliz", progress: 100, color: "#B0E799" },
        { label: "Se sentiu animada", progress: 100, color: "#FDA2DA" },
    ];


    return (
        <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">
            <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">
                <div className="flex flex-col gap-4">
                    <NavTop />
                    <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8 max-md:flex-row">
                        <HomeGestante />
                        <MonitoramentoGestanteAtivo />
                        <ConteudosGestante />
                        <GaleriaGestante />
                        <PerfilGestante />
                    </ul>
                </div>
                <Logout />
            </nav>

            <main className="w-[90vw] h-full bg-gray-1 rounded-2xl">
                <DegradeRed />
                <section className="w-full h-full flex flex-col px-10">
                    <div className="text-center p-7">
                        <h2 className="text-[35px] font-ABeeZee text-gray-3">Monitoramento</h2>
                        <div className="w-3/4 mx-auto mt-2 h-1 bg-[#F6F6F6] shadow-slate-200"></div>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-[20px] text-gray-4 text-left rounded-[60px] bg-white py-2 px-4">
                            Durante a sua gestação você:
                        </h2>
                    </div>

                    <div className="p-7 h-56 overflow-y-auto flex gap-8">
                        {progressData.map((data, index) => (
                            <CircularProgress
                                key={index}
                                progress={data.progress}
                                label={data.label}
                                color={data.color}
                            />
                        ))}
                    </div>

                    <div className="flex items-center justify-between bg-white py-2 px-4 rounded-full mb-4 mt-4">
                        <h1 className="text-gray-4 text-[20px]">Veja com mais detalhes seu monitoramento:</h1>
                        <div className="flex flex-row-reverse gap-2 relative items-center">
                            <button
                                onClick={toggleModal}
                                className="bg-pink-3 text-white px-3 py-2 hover:bg-pink-3 transition rounded-2xl"
                            >
                                Adicionar Monitoramento
                            </button>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={toggleDropdown}
                                    className="bg-white text-pink-3 border-pink-3 border-2 px-3 py-2 rounded-2xl"
                                >
                                    Filtrar por ⇩
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-pink-3 rounded-md shadow-lg py-1">
                                        <button className="block w-full px-4 py-2 text-left text-pink-3 hover:bg-gray-100">
                                            1º trimestre
                                        </button>
                                        <button className="block w-full px-4 py-2 text-left text-pink-3 hover:bg-gray-100">
                                            2º trimestre
                                        </button>
                                        <button className="block w-full px-4 py-2 text-left text-pink-3 hover:bg-gray-100">
                                            3º trimestre
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <main className="w-full h-full bg-gray-1 rounded-2xl">
                        <section className="w-full h-full flex flex-col ">
                            {/* Monitoramento */}
                            <div className=" h-auto p-4 rounded-lg">

                                
                                <div className="flex flex-col gap-4">
                                    {selectedGroups.length > 0 ? (
                                        selectedGroups.map((group, groupIdx,date) => (
                                            <div
                                                key={groupIdx}
                                                className="bg-white rounded-lg p-4 shadow-md flex flex-col gap-2 "
                                            >
                                                
                                                <h4 className="text-gray-700 font-semibold">Monitoramento {groupIdx + 1} - 10/12/2024</h4>
                                                <ul className="flex flex-wrap gap-2">
                                                    {group.map((option, optionIdx) => (
                                                        <li
                                                            key={optionIdx}
                                                            className="bg-red-degrade-3 text-white px-3 py-1 rounded-full shadow-md"
                                                        >
                                                            {option}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-white">Nenhuma opção selecionada.</p>
                                    )}
                                </div>
                            </div>
                        </section>
                    </main>
                </section>
            </main>
            <Modal
                isOpen={isModalOpen}
                onClose={toggleModal}
                onSave={(selections) => setSelectedGroups((prev) => [...prev, selections])}

            />
        </div>
    );
}
