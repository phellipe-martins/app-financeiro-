import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FinanceContext } from '../context/FinanceContext';

const Home = () => {
  // pega as variaveis e a função de saldo do contexto
  const { saldoFinal, totalDespesas, totalInvestido, adicionarSaldo } = useContext(FinanceContext);
  
  // campo de novo saldo
  const [novoSaldo, setNovoSaldo] = useState('');

  const handleAumentarSaldo = (e) => {
    e.preventDefault();
    if (!novoSaldo || isNaN(novoSaldo) || parseFloat(novoSaldo) <= 0) return;
    
    adicionarSaldo(novoSaldo); // puxa a função global
    setNovoSaldo(''); // limpa o input após adicionar
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white tracking-tight">NexPay</h1>
          <Link to="/">
            <button className="text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl transition-colors">
              Sair
            </button>
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">Olá, seja bem vindo!</h2>
          <p className="text-slate-400 mt-1">Aqui está o resumo das suas finanças.</p>
        </div>

        
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-md mb-8"> 
          <h3 className="text-sm font-semibold text-slate-400 mb-3">Adicionar Saldo</h3>
          <form onSubmit={handleAumentarSaldo} className="flex gap-4 max-w-md"> 
            <input 
              type="number" 
              step="0.01"
              placeholder="Ex: 1500.00" 
              value={novoSaldo}
              onChange={(e) => setNovoSaldo(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
              Adicionar
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Saldo Atual</p>
            <p className={`text-3xl font-bold mt-2 ${saldoFinal >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              R$ {saldoFinal.toFixed(2).replace('.', ',')}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total de Despesas</p>
            <p className="text-3xl font-bold text-rose-500 mt-2">
              R$ {totalDespesas.toFixed(2).replace('.', ',')}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Investido</p>
            <p className="text-3xl font-bold text-blue-400 mt-2">
              R$ {totalInvestido.toFixed(2).replace('.', ',')}
            </p>
          </div>

        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Para onde deseja ir?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <Link to="/releases" className="group">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition-all text-center">
                <span className="text-2xl block mb-2"></span>
                <p className="font-medium text-slate-200 group-hover:text-white">Lançar Despesas</p>
                <small className="text-slate-500 block mt-1">Cadastre seus gastos diários</small>
              </div>
            </Link>

            <Link to="/investments" className="group">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition-all text-center">
                <span className="text-2xl block mb-2"></span>
                <p className="font-medium text-slate-200 group-hover:text-white">Investimentos</p>
                <small className="text-slate-500 block mt-1">Veja como seu dinheiro é investido</small>
              </div>
            </Link>

            <Link to="/kpis" className="group">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition-all text-center">
                <span className="text-2xl block mb-2"></span>
                <p className="font-medium text-slate-200 group-hover:text-white">Indicadores </p>
                <small className="text-slate-500 block mt-1">Análise geral de gastos</small>
              </div>
            </Link>

          </div>
        </div>

      </main>
    </div>
  );
};

export default Home;