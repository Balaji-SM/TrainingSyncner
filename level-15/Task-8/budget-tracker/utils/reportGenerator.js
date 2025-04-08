const reportGenerator = (transactions) => {
    let totalIncome = 0;
    let totalExpense = 0;
  
    transactions.forEach((txn) => {
      if (txn.type === 'Income') {
        totalIncome += txn.amount;
      } else {
        totalExpense += txn.amount;
      }
    });
  
    return {
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense
    };
  };
  
  module.exports = reportGenerator;
  