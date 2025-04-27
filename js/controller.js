function handleSetIncome(category, amount) {
  setCategoryIncome(category)
  setAmountIncome(+amount)
}
function handleSetExpense(category, amount) {
  setCategoryExpense(category)
  setAmountExpense(+amount)
}
function handleAddIncome() {
  addTransactionnFromIncome(income)
  renderTransactionHistory(transactionHistory)
}
function handleAddExpense() {
  addTransactionnFromExpense(expense)
  renderTransactionHistory(transactionHistory)
}
function handleRenderSpanIncome() {
  const elBalance = getBalance()
  renderSpanIncome(elBalance)
}
function handleRemove(id) {
  removeTransactionById(+id)
  renderTransactionHistory(transactionHistory)
}

function handleAddOptionToSelectIncome(caption, type) {
  addCategory(caption, type)
  renderSelect(categories)
  renderInputAddOptionCategoryIncome()
  renderCategory(categories)
  // saveCategory(category)
  // saveCategories()
}
function handleAddOptionToSelectExpense(caption, type) {
  addCategory(caption, type)
  renderSelect(categories)
  renderInputAddOptionCategoryExpense()
  renderCategory(categories)
  // saveCategory(category)
  // saveCategories()
}

function handleRemoveCategory(id) {
  removeCategoryById(+id)
  renderCategory(categories)
  renderSelect(categories)
}

// function handleLoadPage() {
//   const category = restoreCategory()
//   const categories = restoreCategories()
//   const elCaption = category.caption
//   const elType = category.type
//   renderSelect(categories)
//   addCategory(elCaption, elType)
//   renderCategory(categories)
// }

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
