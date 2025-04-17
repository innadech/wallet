function handleSetAmountExpense(amount) {
  setAmountExpense(+amount)
}
function handleSetAmountIncome(amount) {
  setAmountIncome(+amount)
}
function handleSetDescriptionExpense(currentDescription) {
  setDescriptionExpense(currentDescription)
  getNextIdExpense()
}
function handleSetDescriptionIncome(currentDescription) {
  setDescriptionIncome(currentDescription)
  getNextIdIncome()
}
function handleAddExpense() {
  addExpense()
  renderContainerExpense(expenses)
  const elBalance = calculateBalance(getTotalIncomes(), getTotalExpenses())
  renderSpanIncome(elBalance)
}
function handleAddIncome() {
  addIncome()
  renderContainerIncome(incomes)
}
function handleRenderSpanExpense() {
  const sum = getTotalExpenses()
  console.log(+sum)
  renderSpanExpense(sum)
}
function handleRenderSpanIncome() {
  const sum = getTotalIncomes()
  console.log(+sum)
  renderSpanIncome(sum)
}
function handleRemoveExpense(categoryName) {
  const ddd = removeCategoryExpense(categoryName)
  console.log(ddd)
  renderContainerExpense(expenses)
  console.log(getTotalIncomes())
  // const returnExpenseSum = returnExpenseSumToBalance(getTotalIncomes(), ddd)
  // renderSpanIncome(returnExpenseSum)
}
function handleRemoveIncome(categoryName) {
  removeCategoryIncome(categoryName)
  renderContainerIncome(incomes)
}
