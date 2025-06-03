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
// function handleSetCurrentCategoryCaption(caption) {
//   setCurrentCategoryCaption(caption)
// }
// function handleSetCurrentCategoryType(type) {
//   setCurrentCategoryType(type)
// }

function handleUpdateBoxIncome() {
  handleSetCategoryIncome('')
  handleSetAmountIncome(0)
  // handleSetCurrentCategoryCaption('')
  // handleSetCurrentCategoryType(income)
  renderContainerIncomeAppender(incomeCategories, currentIncome)
}

function handleAddTransactionIncome() {
  addTransactionnFromIncome(currentIncome)
  renderTransactionHistory(transactionHistory)
  renderInputAddSumIncome(0)
}
function handleAddTransactionExpense() {
  addTransactionnFromExpense(currentExpense)
  renderTransactionHistory(transactionHistory)
  renderInputAddSumExpense()
}
function handleRenderSpanIncome() {
  const balance = getBalance()
  renderBalance(balance)
}
function handleRemoveTransaction(id) {
  removeTransactionById(+id)
  renderTransactionHistory(transactionHistory)
}

function handleAddCategoryIncome(caption) {
  addCategoryIncome(caption)
  renderSelect(incomeCategories, 'income')
  renderInputAddCategoryIncome()
  renderCategoriesList(incomeCategories)
  // saveCategory(category)
  // saveCategories()
}
function handleAddCategoryExpense(caption) {
  addCategoryExpense(caption)
  renderSelect(expenseCategories, 'expense')
  renderInputAddCategoryExpense()
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

// function handleLoadPage() {
//   const category = restoreCategory()
//   const categories = restoreCategories()
//   const elCaption = category.caption
//   const elType = category.type
//   renderSelect(categories)
//   addCategory(elCaption, elType)
//   renderCategoriesList(categories)
// }
