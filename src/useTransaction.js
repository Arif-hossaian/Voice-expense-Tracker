import React, { useContext } from 'react'
import { ExpenseTrackerContext } from "./components/context/context.jsx"

import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories"

const useTransaction = (title) => {

    resetCategories()
    const { transactions } = useContext(ExpenseTrackerContext)
    const rightTransactions = transactions.filter((t) => t.type === title);
    const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = title === "Income" ? incomeCategories : expenseCategories


    rightTransactions.forEach((t) => {
        const category = categories.find((c) => c.type === t.category);
    
        if (category) category.amount += t.amount;
      });
      const filteredCategories = categories.filter((sc) => sc.amount > 0);

      const chartData = {
        datasets: [{
          data: filteredCategories.map((c) => c.amount),
          backgroundColor: filteredCategories.map((c) => c.color),
        }],
        labels: filteredCategories.map((c) => c.type),
      };
      console.log(filteredCategories,total, chartData);
    
      return { total, chartData };
}

export default useTransaction
