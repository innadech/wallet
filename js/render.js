// function renderCategoryExpense(expenses) {
//   const elOutcomeList = document.querySelector('.container-outcome-list')
//   elOutcomeList.innerHTML = ''
//   for (const expense of expenses) {
//     const elExpense = generateLiExpense(expense)
//     elOutcomeList.appendChild(elExpense)
//   }
// }
// function renderCategoryIncome(incomes) {
//   const elIncomeList = document.querySelector('.container-income-list')
//   elIncomeList.innerHTML = ''
//   for (const income of incomes) {
//     const elIncome = generateLiIncome(income)
//     elIncomeList.appendChild(elIncome)
//   }
// }
function renderCategory(categories) {
  const elIncomeList = document.querySelector('.container-income-list')
  const elOutcomeList = document.querySelector('.container-outcome-list')
  elIncomeList.innerHTML = ''
  elOutcomeList.innerHTML = ''
  for (const category of categories) {
    if (category.type === 'income') {
      const elIncome = generateLiIncome(category)
      elIncomeList.appendChild(elIncome)
    } else {
      const elExpense = generateLiExpense(category)
      elOutcomeList.appendChild(elExpense)
    }
  }
}

function renderSpanIncome(number) {
  const elSpan = document.querySelector('.balance')
  elSpan.innerHTML = 'Balance' + ':' + '$' + number
}
function renderTransactionHistory(transactions) {
  const elTransactionHistory = document.querySelector('.transaction-history')
  elTransactionHistory.innerHTML = ''
  for (const transaction of transactions) {
    if (transaction.type === 'income') {
      const elGenerateIncome = generateLiTransactionHistoryIncome(transaction)
      elTransactionHistory.appendChild(elGenerateIncome)
    } else {
      const elGenerateExpense = generateLiTransactionHistoryExpense(transaction)
      elTransactionHistory.appendChild(elGenerateExpense)
    }
  }
}

function renderInputAddOptionCategoryIncome() {
  const elInput = document.querySelector('#addOptionIncome')
  elInput.value = ''
}
function renderInputAddOptionCategoryExpense() {
  const elInput = document.querySelector('#addOptionExpense')
  elInput.value = ''
}

function renderSelect(categories) {
  const elSelectIncome = document.querySelector('#income')
  const elSelectExpense = document.querySelector('#expense')
  elSelectIncome.innerHTML = ''
  elSelectExpense.innerHTML = ''
  const elIncomeOptionSelected = generateOptionSelected()
  const elExpenseOptionSelected = generateOptionSelected()
  elSelectIncome.appendChild(elIncomeOptionSelected)
  elSelectExpense.appendChild(elExpenseOptionSelected)
  for (const category of categories) {
    if (category.type === 'income') {
      const elIncomeOption = generateOption(category)
      elSelectIncome.appendChild(elIncomeOption)
    } else {
      const elExpenseOption = generateOption(category)
      elSelectExpense.appendChild(elExpenseOption)
    }
  }
}

// function renderSelectIncome(categories) {
//   const elSelectIncome = document.querySelector('#income')
//   for (const category of categories){
//     const elOption = generateOption(category)
//   elSelectIncome.appendChild(elOption)
//   }
// }
// function renderSelectExpense(categories) {
//   const elSelectIncome = document.querySelector('#expense')
//   for (const category of categories){
//     const elOption = generateOption(category)
//     elSelectIncome.appendChild(elOption)
//   }
// }
