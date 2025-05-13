function renderCategory(categories) {
  const elems = {
    income: document.querySelector('.container-income-list'),
    expense: document.querySelector('.container-outcome-list'),
  }
  elems.income.innerHTML = ''
  elems.expense.innerHTML = ''
  for (const category of categories) {
    const elLi = generateLiCategory(category)
    elems[category.type].appendChild(elLi)
    // elems[category.type].innerHTML = ''
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
      const elGenerateIncome = generateLiTransaction(transaction)
      elTransactionHistory.appendChild(elGenerateIncome)
    } else {
      const elGenerateExpense = generateLiTransaction(transaction)
      elTransactionHistory.appendChild(elGenerateExpense)
    }
  }
}

// function renderSelect(categories) {
//   const elSelectIncome = document.querySelector('#income')
//   const elSelectExpense = document.querySelector('#expense')
//   // elSelectIncome.innerHTML = ''
//   // elSelectExpense.innerHTML = ''
//   const elIncomeOptionSelected = generateOptionSelected()
//   const elExpenseOptionSelected = generateOptionSelected()
//   elSelectIncome.appendChild(elIncomeOptionSelected)
//   elSelectExpense.appendChild(elExpenseOptionSelected)
//   for (const category of categories) {
//     if (category.type === 'income') {
//       const elIncomeOption = generateOption(category)
//       elSelectIncome.appendChild(elIncomeOption)
//     } else {
//       const elExpenseOption = generateOption(category)
//       elSelectExpense.appendChild(elExpenseOption)
//     }
//   }
// }
function renderSelectIncome(categories) {
  const elSelectIncome = document.querySelector('#income')
  elSelectIncome.innerHTML = ''
  const elIncomeOptionSelected = generateOptionSelected()
  elSelectIncome.appendChild(elIncomeOptionSelected)
  for (const category of categories) {
    if (category.type === 'income') {
      const elIncomeOption = generateOption(category)
      elSelectIncome.appendChild(elIncomeOption)
    }
  }
}
function renderSelectExpense(categories) {
  const elSelectExpense = document.querySelector('#expense')
  elSelectExpense.innerHTML = ''
  const elExpenseOptionSelected = generateOptionSelected()
  elSelectExpense.appendChild(elExpenseOptionSelected)
  for (const category of categories) {
    if (category.type === 'expense') {
      const elExpenseOption = generateOption(category)
      elSelectExpense.appendChild(elExpenseOption)
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

function renderInputAddSumIncome() {
  const elInput = document.querySelector('#incomeamount')
  elInput.value = ''
}
function renderInputAddSumExpense() {
  const elInput = document.querySelector('#expenseamount')
  elInput.value = ''
}
function renderBoxIncome(incomeCategories, currentIncome) {}
