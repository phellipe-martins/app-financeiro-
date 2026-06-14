import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate(); 

    const handleEnter = () => {
        navigate('/home');
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 font-sans">
            
            <div className="mb-10 text-center max-w-xl">
                <span className="text-5xl block mb-3"></span>
                <h1 className="text-4xl font-black text-white tracking-tight sm:text-5xl">
                    Bem-vindo ao <span className="text-blue-500">NexPay</span>
                </h1>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Uma plataforma moderna desenvolvida para simplificar o controle dos seus gastos, investimentos e análise patrimonial.
                </p>
            </div>

            <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl relative mb-8">
                

                <h2 className="text-lg font-bold text-slate-200 mb-6 text-center sm:text-left">
                    O que você vai encontrar por aqui:
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    
                    <div className="p-4 bg-slate-950 border border-slate-800/60 rounded-xl text-center sm:text-left">
                        <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-xl mb-3 mx-auto sm:mx-0">
                            💸
                        </div>
                        <h3 className="font-semibold text-white text-sm">Controle de Gastos</h3>
                        <p className="text-xs text-slate-500 mt-1">Registre gastos diários separados por categorias.</p>
                    </div>

                    <div className="p-4 bg-slate-950 border border-slate-800/60 rounded-xl text-center sm:text-left">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-xl mb-3 mx-auto sm:mx-0">
                            📈
                        </div>
                        <h3 className="font-semibold text-white text-sm">Investimentos</h3>
                        <p className="text-xs text-slate-500 mt-1">Monitore seus investimentos.</p>
                    </div>

                    <div className="p-4 bg-slate-950 border border-slate-800/60 rounded-xl text-center sm:text-left">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-xl mb-3 mx-auto sm:mx-0">
                            📊
                        </div>
                        <h3 className="font-semibold text-white text-sm">Análise Detalhada</h3>
                        <p className="text-xs text-slate-500 mt-1">Gráficos inteligentes que mostram para onde está indo o dinheiro.</p>
                    </div>

                </div>

              
                <button 
                    onClick={handleEnter}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                    Acessar o Painel do Sistema
                </button>
            </div>

            
            <div className="flex gap-4 text-xs text-slate-600">
                <span>UNINASSAU MACEIÓ</span>
              
            </div>
        </div>
    );
};

export default Login;