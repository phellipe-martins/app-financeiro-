import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FinanceContext } from '../context/FinanceContext';

const Releases = () => {
  const { expenses, addExpense } = useContext(FinanceContext);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('Alimentação');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !value) return;

    addExpense({
      id: Date.now(),
      description,
      value: parseFloat(value),
      category,
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
            <h1 className="text-xl font-bold text-white tracking-tight">Lançamentos</h1>
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
            <h2 className="text-lg font-semibold text-white mb-4">Nova Despesa</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Descrição</label>
                <input
                  type="text"
                  placeholder="Ex: Mercado, Luz..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Valor (R$)</label>
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
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Categoria</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 appearance-none"
                >
                  <option value="Alimentação">Alimentação</option>
                  <option value="Transporte">Transporte</option>
                  <option value="Lazer">Lazer</option>
                  <option value="Moradia">Moradia</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-xl text-sm transition-colors mt-2"
              >
                Adicionar
              </button>
            </form>
          </div>

         
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <h2 className="text-lg font-semibold text-white mb-4">Histórico de Gastos</h2>

            {expenses.length === 0 ? (
              <div className="text-center py-8 border border-dashed border-slate-800 rounded-xl">
                <p className="text-slate-500 text-sm">Nenhuma despesa cadastrada ainda.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="text-xs text-slate-400 uppercase border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-2">Descrição</th>
                      <th className="py-3 px-2">Categoria</th>
                      <th className="py-3 px-2">Data</th>
                      <th className="py-3 px-2 text-right">Valor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {expenses.map((expense) => (
                      <tr key={expense.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-2 font-medium text-white">{expense.description}</td>
                        <td className="py-3 px-2">
                          <span className="bg-slate-950 text-slate-400 text-xs px-2 py-1 rounded-md border border-slate-800">
                            {expense.category}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-slate-500">{expense.date}</td>
                        <td className="py-3 px-2 text-right font-semibold text-rose-400">
                          - R$ {expense.value.toFixed(2).replace('.', ',')}
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

export default Releases;