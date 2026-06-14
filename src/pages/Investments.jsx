import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FinanceContext } from '../context/FinanceContext';

const Investments = () => {
  const { investments, addInvestment } = useContext(FinanceContext);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('Renda Fixa');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !value) return;

    addInvestment({
      id: Date.now(),
      description,
      value: parseFloat(value),
      type,
      date: new Date().toLocaleDateString('pt-BR'),
    });

    setDescription('');
    setValue('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl"></span>
            <h1 className="text-xl font-bold text-white tracking-tight">Investimentos</h1>
          </div>
          <Link to="/home">
            <button className="text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl transition-colors">
              Voltar ao Painel
            </button>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl h-fit shadow-xl">
            <h2 className="text-lg font-semibold text-white mb-4">Novo Investimento</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Ativo / Corretora</label>
                <input
                  type="text"
                  placeholder="Ex: CDB "
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Valor que deseja investir (R$)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0,00"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Tipo de Investimento</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 appearance-none"
                >
                  <option value="Renda Fixa">Renda Fixa</option>
                  <option value="Ações">Ações</option>
                  <option value="Renda Variavel">Renda Variavel</option>
                  <option value="Criptomoedas">Criptomoedas</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 rounded-xl text-sm transition-colors mt-2 shadow-lg shadow-emerald-600/10"
              >
                Registrar Investimento
              </button>
            </form>
          </div>

          <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <h2 className="text-lg font-semibold text-white mb-4">Minha Carteira</h2>

            {investments.length === 0 ? (
              <div className="text-center py-8 border border-dashed border-slate-800 rounded-xl">
                <p className="text-slate-500 text-sm">Sua carteira está vazia. Comece a investir!</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="text-xs text-slate-400 uppercase border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-2">Ativo</th>
                      <th className="py-3 px-2">Tipo</th>
                      <th className="py-3 px-2">Data</th>
                      <th className="py-3 px-2 text-right">Valor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {investments.map((inv) => (
                      <tr key={inv.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-2 font-medium text-white">{inv.description}</td>
                        <td className="py-3 px-2">
                          <span className="bg-blue-900/30 text-blue-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-blue-800/50">
                            {inv.type}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-slate-500">{inv.date}</td>
                        <td className="py-3 px-2 text-right font-semibold text-emerald-400">
                          R$ {inv.value.toFixed(2).replace('.', ',')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};

export default Investments;