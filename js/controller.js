function handleSetCategoryIncome(category) {
  setCategoryIncome(category)
}
function handleSetAmountIncome(amount) {
  setAmountIncome(+amount)
}
function handleSetCategoryExpense(category) {
  setCategoryExpense(category)
}
function handleSetAmountExpense(amount) {
  setAmountExpense(+amount)
}

function handleAddTransactionIncome() {
  addTransactionnFromIncome(income)
  renderTransactionHistory(transactionHistory)
  renderInputAddSumIncome()
}
function handleAddTransactionExpense() {
  addTransactionnFromExpense(expense)
  renderTransactionHistory(transactionHistory)
  renderInputAddSumExpense()
}
function handleRenderSpanIncome() {
  const balance = getBalance()
  renderSpanIncome(balance) // renderBalance
}
function handleRemoveTransaction(id) {
  removeTransactionById(+id)
  renderTransactionHistory(transactionHistory)
}

function handleAddOptionToSelectIncome(caption, type) {
  addCategoryIncome(caption, type)
  renderSelect(incomeCategories, type)
  renderInputAddOptionCategoryIncome()
  renderCategoriesList(incomeCategories)
  // saveCategory(category)
  // saveCategories()
}
function handleAddOptionToSelectExpense(caption, type) {
  addCategoryExpense(caption, type)
  renderSelect(expenseCategories, type)
  renderInputAddOptionCategoryExpense()
  renderCategoriesList(expenseCategories)
  // saveCategory(category)
  // saveCategories()
}

function handleRemoveIncomeCategories(id, type) {
  removeCategoryByIdIncome(+id)
  renderCategoriesList(incomeCategories)
  renderSelect(incomeCategories, type)
}
function handleRemoveExpenseCategories(id, type) {
  removeCategoryByIdExpense(+id)
  renderCategoriesList(expenseCategories)
  renderSelect(expenseCategories, type)
}
// function handleRemoveCategory(id, type) {
//   removeCategoryById(+id)
//   renderCategoriesList(categories)
//   renderSelect(categories, type)
// }

// function handleLoadPage() {
//   const category = restoreCategory()
//   const categories = restoreCategories()
//   const elCaption = category.caption
//   const elType = category.type
//   renderSelect(categories)
//   addCategory(elCaption, elType)
//   renderCategoriesList(categories)
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
