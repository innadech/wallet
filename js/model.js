let balance = 0
let incomes = []
let expenses = [
  // {
  //   id: 1,
  //   amount: 120,
  //   description: 'еда',
  // },
  // {
  //   id: 2,
  //   amount: 100,
  //   description: 'мясо',
  // },
  // {
  //   id: 3,
  //   amount: 100,
  //   description: 'еда',
  // },
]
// function setBalance() {
//   balance = getTotalIncomes()
// }
const income = {
  id: 0,
  amount: 0,
  description: '',
}

const expense = {
  id: 0,
  amount: 0,
  description: '',
}
function getNextIdIncome() {
  income.id += 1
  return income.id
}
function setAmountIncome(amount) {
  income.amount = amount
}
function setDescriptionIncome(currentDescription) {
  income.description = currentDescription
}

function getNextIdExpense() {
  expense.id += 1
  return expense.id
}

function setAmountExpense(amount) {
  expense.amount = amount
}
function setDescriptionExpense(currentDescription) {
  expense.description = currentDescription
}

function addExpense() {
  const createdExpense = {
    id: expense.id,
    amount: expense.amount,
    description: expense.description,
  }

  expenses.push(createdExpense)
}
function addIncome() {
  const createdIncome = {
    id: income.id,
    amount: income.amount,
    description: income.description,
  }

  incomes.push(createdIncome)
}

function getTotalExpenses() {
  return expenses.reduce((total, expense) => total + expense.amount, 0)
}
function getTotalIncomes() {
  return incomes.reduce((total, income) => total + income.amount, 0)
}
// function getTotalExpenses(){
//   let total = 0
//   expenses.forEach((expense)=>total += expense.amount)
//   return total
// }

function removeCategoryExpense(categoryName) {
  const removedSum = expenses
    .filter(
      expense =>
        expense.description.toLowerCase() === categoryName.toLowerCase()
    )
    .reduce((total, expense) => total + expense.amount, 0)
  removedSum

  expenses = expenses.filter(
    expense => expense.description.toLowerCase() !== categoryName.toLowerCase()
  )
  return removedSum
}
function removeCategoryIncome(categoryName) {
  const removedSum = incomes
    .filter(
      income => income.description.toLowerCase() === categoryName.toLowerCase()
    )
    .reduce((total, income) => total + income.amount, 0)
  removedSum

  incomes = incomes.filter(
    income => income.description.toLowerCase() !== categoryName.toLowerCase()
  )
  return removedSum
}

function calculateBalance(income, expense) {
  return income - expense
}
// function returnExpenseSumToBalance(income, returnedSum) {
//   return income + returnedSum
// }

// setDescriptionExpense('Продукты питания')
// setAmountExpense(400)
// addExpense()

// setDescriptionExpense('Еда')
// setAmountExpense(200)
// addExpense()

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
