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
function handleSetCurrentCategoryCaption(caption) {
  setCurrentCategoryCaption(caption)
}
function handleSetCurrentCategoryType(type) {
  setCurrentCategoryType(type)
}

function handleUpdateBoxIncome() {
  handleSetCategoryIncome('')
  handleSetAmountIncome(0)
  handleSetCurrentCategoryCaption('')
  handleSetCurrentCategoryType(income)
  renderContainerIncomeAppender(
    incomeCategories,
    currentIncome,
    currentCategoty
  )
}

function handleAddTransactionIncome() {
  addTransactionnFromIncome(currentIncome)
  renderTransactionHistory(transactionHistory)
  renderInputAddSumIncome()
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

// function handleLoadPage() {
//   const category = restoreCategory()
//   const categories = restoreCategories()
//   const elCaption = category.caption
//   const elType = category.type
//   renderSelect(categories)
//   addCategory(elCaption, elType)
//   renderCategoriesList(categories)
// }
