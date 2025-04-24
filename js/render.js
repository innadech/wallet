function renderCategoryExpense(expenses) {
  const elOutcomeList = document.querySelector('.container-outcome-list')
  elOutcomeList.innerHTML = ''
  for (const expense of expenses) {
    const elExpense = generateLiExpense(expense)
    elOutcomeList.appendChild(elExpense)
  }
}
function renderCategoryIncome(incomes) {
  const elIncomeList = document.querySelector('.container-income-list')
  elIncomeList.innerHTML = ''
  for (const income of incomes) {
    const elIncome = generateLiIncome(income)
    elIncomeList.appendChild(elIncome)
  }
}
function renderSpanIncome(number) {
  const elSpan = document.querySelector('.balance')
  elSpan.innerHTML = number
}

function renderTransactionHistory() {
  const elHistory = document.querySelector('.transaction-history')
  elHistory.innerHTML = ''
  const [activeSum, inactiveSum] = getSumAmountByType()
  const elIncome = generateLiTransactionHistoryIncome(activeSum)
  const elExpense = generateLiTransactionHistoryExpense(inactiveSum)
  elHistory.appendChild(elIncome)
  elHistory.appendChild(elExpense)
}
// const [active, inactive] = getSumByActive()-деструктиризация массива
// то есть : const [activeSum, inactiveSum] - это способ сразу сохранить элементы массива в отдельные переменные
// const result = getSumByActive()
// const active = result[0]
// const inactive = result[1]

// function renderSpanExpense(number) {
//   const elSpan = document.querySelector('.expense-money')
//   elSpan.innerHTML = number
// }
// function renderContainerIncome(incomes) {
//   const elDivContainer = document.querySelector('.transaction-history')
//   // elDivContainer.innerHTML = ''
//   for (const income of incomes) {
//     const elIncome = generateLiIncome(income)
//     elDivContainer.appendChild(elIncome)
//   }
// }
