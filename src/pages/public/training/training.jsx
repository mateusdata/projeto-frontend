import React, { useState } from 'react';
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import GlobalLayout from '../../home/globalLayout';

const PáginaTreinosSemanais = () => {
    const diasDaSemana = [
        {
            dia: 'Segunda-feira',
            treinos: [
                { horario: '9:00', descricao: 'Treino de cardio' },
                { horario: '11:00', descricao: 'Treino de força' },
            ],
        },
        {
            dia: 'Terça-feira',
            treinos: [
                { horario: '10:00', descricao: 'Aula de yoga' },
                { horario: '14:00', descricao: 'Treino HIIT' },
            ],
        },
        {
            dia: 'Quarta',
            treinos: [
                { horario: '10:00', descricao: 'Aula de yoga' },
                { horario: '14:00', descricao: 'Treino HIIT' },
            ],
        },
        {
            dia: 'Quinta',
            treinos: [
                { horario: '10:00', descricao: 'Aula de yoga' },
                { horario: '14:00', descricao: 'Treino HIIT' },
            ],
        },
        {
            dia: 'Sexta',
            treinos: [
                { horario: '10:00', descricao: 'Aula de yoga' },
                { horario: '14:00', descricao: 'Treino HIIT' },
            ],
        },
        // ... Repita a estrutura para os demais dias da semana
    ];

    const [accordionAtivo, setAccordionAtivo] = useState('');

    const toggleAccordion = (dia) => {
        setAccordionAtivo(accordionAtivo === dia ? '' : dia);
    };

    return (
        <GlobalLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Treinos Semanais</h1>
                <div className="space-y-4">
                    {diasDaSemana.map((dia, index) => (
                        <div key={index} className="border-b border-gray-300">
                            <button
                                className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-800 bg-white hover:bg-gray-50 focus:outline-none"
                                onClick={() => toggleAccordion(dia.dia)}
                            >
                                <span>{dia.dia}</span>
                                <ChevronDownIcon
                                    className={`w-5 h-5 transition-transform ${accordionAtivo === dia.dia ? 'transform rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {accordionAtivo === dia.dia && (
                                <div className="p-4 bg-gray-100">
                                    {dia.treinos.map((treino, index) => (
                                        <div key={index} className="mb-2">
                                            <span className="text-lg font-medium">{treino.horario}</span>
                                            <p className="text-gray-700">{treino.descricao}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </GlobalLayout>
    );
};

export default PáginaTreinosSemanais;
