import React, { createContext, useState } from 'react';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [investments, setInvestments] = useState([]);
  
  // controle de saldo 
  const [saldoInicial, setSaldoInicial] = useState(0);

  const adicionarSaldo = (valor) => {
    setSaldoInicial((prevSaldo) => prevSaldo + parseFloat(valor));
  };

  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const addInvestment = (investment) => setInvestments([...investments, investment]);

  // calculos matematicos
  const totalDespesas = expenses.reduce((acc, curr) => acc + (parseFloat(curr.value) || 0), 0);
  const totalInvestido = investments.reduce((acc, curr) => acc + (parseFloat(curr.value) || 0), 0);
  const saldoFinal = saldoInicial - totalDespesas;

  return (
    <FinanceContext.Provider value={{ 
      expenses, 
      investments, 
      addExpense, 
      addInvestment,
      saldoInicial,
      saldoFinal,
      totalDespesas,
      totalInvestido,
      adicionarSaldo
    }}>
      {children}
    </FinanceContext.Provider>
  );
};