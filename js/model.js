let transactionHistory = []
let categories = []
let incomeCategories = []
let expenseCategories = []

let nextId = 1

const income = {
  amount: 0,
  category: '',
}
const expense = {
  amount: 0,
  category: '',
}

function creteTransactionFromIncome(income) {
  return {
    id: nextId++,
    type: 'income',
    amount: income.amount,
    category: income.category,
  }
}

function creteTransactionFromExpense(expense) {
  return {
    id: nextId++,
    type: 'expense',
    amount: expense.amount,
    category: expense.category,
  }
}

function setAmountIncome(amount) {
  income.amount = amount
}
function setCategoryIncome(category) {
  income.category = category
}
function setAmountExpense(amount) {
  expense.amount = amount
}
function setCategoryExpense(category) {
  expense.category = category
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
// incomeCategories
// addCategoryIncome('зарплата', 'income')
// incomeCategories
// // removeCategoryById(incomeCategories, 1)
// incomeCategories = removeCategoryById(incomeCategories, 1)
// incomeCategories

// function removeCategoryById(id) {
//   categories = categories.filter(category => category.id !== id)
// }

// function addCategory(caption, type) {
//   const existingCategory = categories.find(
//     category => category.caption === caption
//   )
//   if (existingCategory) {
//     return
//   }
//   const category = createCategory(caption, type)
//   categories.push(category)
// }
// let result = getBalance()
// result
// transactionHistory
// addTransactionnFromIncome({ amount: 12000, category: 'зарплата' })
// transactionHistory
// result = getBalance()
// result

// addTransactionnFromExpense({amount: 300,category: 'продукты питания'})
// transactionHistory
// result = getBalance()
// result

// addTransactionnFromIncome({amount: 10000,category: 'зарплата'})
// transactionHistory
// result = getBalance()
// result

// addTransactionnFromExpense({amount: 700,category: 'продукты питания'})
// transactionHistory
// result = getBalance()
// result
// // transactionHistory

// categories
// addCategory('зарплата','income')
// categories
// addCategory('продукты','expence')
// categories
// let sum = getSumAmountByType()
// sum
// getBalance()
// removeCategoryById(5)
// categories
// removeTransactionById(4)
// transactionHistory

// let balance = 0
// let incomes = []

// let expenses = [
//   {
//     id: 1,
//     amount: 120,
//     description: 'еда',
//   },
//   {
//     id: 2,
//     amount: 100,
//     description: 'мясо',
//   },
//   {
//     id: 3,
//     amount: 100,
//     description: 'еда',
//   },
// ]
// let histories = [
//   // {
//   //   id: 1,
//   //   amount: 120,
//   //   category: 'подарок',
//   //   active: true,
//   //   // type: 'income',
//   // },
//   // {
//   //   id: 4,
//   //   amount: 100,
//   //   category: 'еда',
//   //   active: false,
//   //   // type: 'expense',
//   // },
//   // {
//   //   id: 4,
//   //   amount: 300,
//   //   category: 'еда',
//   //   active: false,
//   //   // type: 'expense',
//   // },
//   // {
//   //   id: 1,
//   //   amount: 100,
//   //   category: 'подарок',
//   //   active: true,
//   //   // type: 'income',
//   // },
// ]

// function markAsIsIncome() {
//   return (income.active = true)
// }
// function markAsIsExpense() {
//   return (expense.active = false)
// }
// function addIncomeToHistory() {
//   const createdIncome = {
//     id: income.id,
//     amount: income.amount,
//     category: income.category,
//     active: income.active,
//   }

//   histories.push(createdIncome)
// }
// function addExpenseToHistory() {
//   const createdExpense = {
//     id: expense.id,
//     amount: expense.amount,
//     category: expense.category,
//     active: expense.active,
//   }

//   histories.push(createdExpense)
// }

// function getSumByActive() {
//   let activeSum = 0
//   let inactiveSum = 0
//   histories.forEach(history => {
//     if (history.active) {
//       activeSum += history.amount
//     } else {
//       inactiveSum += history.amount
//     }
//   })
//   return [activeSum, inactiveSum]
// }

// function setBalance() {
//   balance = getTotalIncomes()
// }

// function calculateBalance(expense) {
//   balance = balance - expense
// }

// const income = {
//   amount: 0,
//   category: '',
// }

// const expense = {
//   amount: 0,
//   category: '',
// }
// function getNextIdIncome() {
//   income.id += 1
//   return income.id
// }
// function setAmountIncome(amount) {
//   income.amount = amount
// }
// function setCategoryIncome(category) {
//   income.category = category
// }

// function getNextIdExpense() {
//   expense.id += 1
//   return expense.id
// }

// function setAmountExpense(amount) {
//   expense.amount = amount
// }
// function setCategoryExpense(category) {
//   expense.category = category
// }

// function addExpense() {
//   const createdExpense = {
//     id: expense.id,
//     amount: expense.amount,
//     category: expense.category,
//   }

//   expenses.push(createdExpense)
// }
// function addIncome() {
//   const createdIncome = {
//     id: income.id,
//     amount: income.amount,
//     category: income.category,
//   }

//   incomes.push(createdIncome)
// }

// function getTotalExpenses() {
//   return expenses.reduce((acc, expense) => acc + expense.amount, 0)
// }
// function getTotalIncomes() {
//   return incomes.reduce((acc, income) => acc + income.amount, 0)
// }
// // function getTotalExpenses(){
// //   let total = 0
// //   expenses.forEach((expense)=>total += expense.amount)
// //   return total
// // }

// function removeCategoryExpense(categoryName) {
//   const removedSum = expenses
//     .filter(
//       expense => expense.category.toLowerCase() === categoryName.toLowerCase()
//     )
//     .reduce((total, expense) => total + expense.amount, 0)
//   removedSum

//   expenses = expenses.filter(
//     expense => expense.category.toLowerCase() !== categoryName.toLowerCase()
//   )
//   return removedSum
// }
// function removeCategoryIncome(categoryName) {
//   const removedSum = incomes
//     .filter(
//       income => income.category.toLowerCase() === categoryName.toLowerCase()
//     )
//     .reduce((total, income) => total + income.amount, 0)
//   removedSum

//   incomes = incomes.filter(
//     income => income.category.toLowerCase() !== categoryName.toLowerCase()
//   )
//   return removedSum
// }

// function returnExpenseSumToBalance(returnedSum) {
//   return balance + returnedSum
// }
// const transaction = {
//   id: 42,
//   type: 'income',
//   amount: 0,
//   category: '',
// }
// const category = {
//   id: 33,
//   caption: 'зарплата',
//   type: 'income',
// }

// income
// incomes
// histories

// expense
// expenses
// balance

// setDescriptionIncome('Зарплата')
// setAmountIncome(10000)
// income
// getNextIdIncome()
// income
// addIncome()
// setBalance()
// balance
// markAsIsIncome()
// addIncomeToHistory()
// histories

// setDescriptionExpense('Продукты питания')
// setAmountExpense(400)
// expense
// addExpense()
// expenses
// markAsIsExpense()
// addExpenseToHistory()
// histories

// let answer = getSumByActive()
// answer

// calculateBalance(getTotalExpenses())
// balance

// let removedSum = removeCategoryExpense('Продукты питания')
// removedSum

// setDescriptionExpense('Еда')
// setAmountExpense(200)
// addExpense()
// expense
// expenses
// balance

// setDescriptionExpense('Продукты питания')
// setAmountExpense(300)
// addExpense()
// expenses
// let anser = getTotalExpenses()
// anser
// let sss = removeCategoryExpense('Еда')
// sss

// removeCategoryExpense('еда')
// expenses

// let anser = getTotalExpenses()
// anser

// total= это переменная которая накапливает сумму в процессе перебора в массиве
