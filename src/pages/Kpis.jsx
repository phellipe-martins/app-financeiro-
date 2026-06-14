import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FinanceContext } from '../context/FinanceContext';

const Kpis = () => {
  const { expenses } = useContext(FinanceContext);

  const categoriasValidas = ['Alimentação', 'Transporte', 'Lazer', 'Moradia', 'Outros'];

  const totaisPorCategoria = categoriasValidas.reduce((acc, cat) => {
    acc[cat] = 0;
    return acc;
  }, {});

  let totalCalculadoGeral = 0;

  expenses.forEach((expense) => {
    const valorNum = Number(expense.value || 0);
    totalCalculadoGeral += valorNum;

    if (totaisPorCategoria[expense.category] !== undefined) {
      totaisPorCategoria[expense.category] += valorNum;
    } else {
      totaisPorCategoria['Outros'] += valorNum;
    }
  });

  const coresBarras = {
    Alimentação: 'bg-amber-500',
    Transporte: 'bg-blue-500',
    Lazer: 'bg-purple-500',
    Moradia: 'bg-pink-500',
    Outros: 'bg-slate-500',
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl"></span>
            <h1 className="text-xl font-bold text-white tracking-tight">Indicadores de Gastos</h1>
          </div>
          <Link to="/home">
            <button className="text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl transition-colors">
              Voltar ao Painel
            </button>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-10">
        
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
          <h3 className="text-md font-semibold text-white mb-2">Distribuição de Despesas</h3>
          <p className="text-slate-400 text-sm mb-6">Veja a porcentagem de impacto de cada categoria no seu bolso.</p>
          
          <div className="space-y-6">
            {categoriasValidas.map((cat) => {
              const valorCategoria = totaisPorCategoria[cat];
              const porcentagem = totalCalculadoGeral > 0 ? (valorCategoria / totalCalculadoGeral) * 100 : 0;
              const corBarra = coresBarras[cat] || 'bg-slate-500';

              return (
                <div key={cat}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-medium flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${corBarra}`}></span>
                      {cat}
                    </span>
                    <div className="space-x-3">
                      <span className="text-slate-400">R$ {valorCategoria.toFixed(2).replace('.', ',')}</span>
                      <span className="font-semibold text-white">{porcentagem.toFixed(1)}%</span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                    <div 
                      className={`${corBarra} h-full rounded-full transition-all duration-500`} 
                      style={{ width: `${porcentagem}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-sm">
            <span className="text-slate-400">Total acumulado em despesas:</span>
            <span className="text-xl font-bold text-rose-400">
              R$ {totalCalculadoGeral.toFixed(2).replace('.', ',')}
            </span>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Kpis;