let transactionHistory = []
let nextId = 1
let incomeCategories = []
let expenseCategories = []

const currentIncome = {
  amount: 0,
  category: '',
}
const currentExpense = {
  amount: 0,
  category: '',
}

const currentCategory = {
  caption: '',
  type: '',
}
function setCurrentCategoryCaption(caption) {
  currentCategory.caption = caption
}
function setCurrentCategoryType(type) {
  currentCategory.type = type
}

function creteTransactionFromIncome(currentIncome) {
  return {
    id: nextId++,
    type: 'income',
    amount: currentIncome.amount,
    category: currentIncome.category,
  }
}

function creteTransactionFromExpense(currentExpense) {
  return {
    id: nextId++,
    type: 'expense',
    amount: currentExpense.amount,
    category: currentExpense.category,
  }
}

function setAmountIncome(amount) {
  currentIncome.amount = amount
}
function setCategoryIncome(category) {
  currentIncome.category = category
}
function setAmountExpense(amount) {
  currentExpense.amount = amount
}
function setCategoryExpense(category) {
  currentExpense.category = category
}
function addTransactionnFromIncome(income) {
  const transaction = creteTransactionFromIncome(income)
  transactionHistory.push(transaction)
}
function addTransactionnFromExpense(expense) {
  const transaction = creteTransactionFromExpense(expense)
  transactionHistory.push(transaction)
}

function getSumAmountByType() {
  let amountIncome = 0
  let amountExpense = 0
  transactionHistory.forEach(history => {
    if (history.type === 'income') {
      amountIncome += history.amount
    } else {
      amountExpense += history.amount
    }
  })
  return [amountIncome, amountExpense]
}

function createCategory(caption, type) {
  return {
    id: nextId++,
    caption: caption,
    type: type,
  }
}

function addCategoryIncome(caption, type) {
  const existingCategory = incomeCategories.find(
    category => category.caption === caption
  )
  if (existingCategory) {
    return
  }
  const category = createCategory(caption, type)
  incomeCategories.push(category)
}

function addCategoryExpense(caption, type) {
  const existingCategory = expenseCategories.find(
    category => category.caption === caption
  )
  if (existingCategory) {
    return
  }
  const category = createCategory(caption, type)
  expenseCategories.push(category)
}

function getBalance() {
  const [incomeSum, expenseSum] = getSumAmountByType()
  return incomeSum - expenseSum
}

function removeTransactionById(id) {
  transactionHistory = transactionHistory.filter(
    transaction => transaction.id !== id
  )
}
function removeCategoryByIdIncome(id) {
  incomeCategories = incomeCategories.filter(category => category.id !== id)
}
function removeCategoryByIdExpense(id) {
  expenseCategories = expenseCategories.filter(category => category.id !== id)
}
