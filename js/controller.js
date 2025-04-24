function handleSetIncome(category, amount) {
  setCategoryIncome(category)
  setAmountIncome(+amount)
}
function handleSetExpense(category, amount) {
  setCategoryExpense(category)
  setAmountExpense(+amount)
}
function handleAddIncome(caption, type) {
  addTransactionnFromIncome(income)
  renderTransactionHistory(getSumAmountByType())
  addCategory(caption, type)
}
function handleAddExpense(caption, type) {
  addTransactionnFromExpense(expense)
  renderTransactionHistory(getSumAmountByType())
  addCategory(caption, type)
}
function handleRenderSpanIncome() {
  const elBalance = getBalance()
  renderSpanIncome(elBalance)
}

// function handleSetAmountExpense(amount) {
//   setAmountExpense(+amount)
// }
// function handleSetAmountIncome(amount) {
//   setAmountIncome(+amount)
// }
// function handleSetCategoryExpense(category) {
//   setCategoryExpense(category)
// }
// function handleSetCategoryIncome(category) {
//   setCategoryIncome(category)
// }
// function handleAddExpense() {
//   getNextIdExpense()
//   markAsIsExpense()
//   addExpenseToHistory()
//   addExpense()
//   renderTransactionHistory(getSumByActive())
//   renderCategoryExpense(expenses)
//   const elBalance = calculateBalance(getTotalExpenses())
//   renderSpanIncome(elBalance)
// }
// function handleAddIncome() {
//   markAsIsIncome()
//   addIncomeToHistory()
//   getNextIdIncome()
//   addIncome()
//   renderTransactionHistory(getSumByActive())
//   setBalance()
//   renderCategoryIncome(incomes)
// }

// function handleRenderSpanIncome() {
//   const sum = getTotalIncomes()
//   renderSpanIncome(sum)
// }
// function handleRemoveExpense(categoryName) {
//   const returnedSum = removeCategoryExpense(categoryName)
//   console.log(returnedSum)
//   const sum = getTotalExpenses()
//   console.log(sum)
//   console.log(balance)
//   // renderCategoryExpense(sum)
//   // console.log(getTotalIncomes())
//   const returnExpenseSum = returnExpenseSumToBalance(returnedSum)
//   renderSpanIncome(returnExpenseSum)
// }
// function handleRemoveIncome(categoryName) {
//   removeCategoryIncome(categoryName)
//   renderContainerIncome(incomes)
// }

// function handleRenderSpanExpense() {
//   const sum = getTotalExpenses()
//   console.log(+sum)
//   renderSpanExpense(sum)
// }
