function renderSelectRedExpense() {
  const elSelect = document.querySelector('#expense')
  const elSelectedOption = elSelect.options[elSelect.selectedIndex]
  if (elSelectedOption.disabled) {
    elSelect.style.border = '2px solid red'
    return
  }
  elSelect.style.border = ''
}

function renderInputRedExpense() {
  const elInput = document.querySelector('#expenseamount')
  if (+elInput.value) {
    elInput.style.border = '2px solid red'
    return
  }
  elInput.style.border = ''
}

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
function renderSelect(categories, type) {
  // const elSelectIncome = document.querySelector('#income') // type
  const elSelectIncome = document.querySelector('#' + type) // type
  elSelectIncome.innerHTML = ''
  const elIncomeOptionSelected = generateOptionSelected()
  elSelectIncome.appendChild(elIncomeOptionSelected)
  for (const category of categories) {
    if (category.type === type) {
      const elIncomeOption = generateOption(category)
      elSelectIncome.appendChild(elIncomeOption)
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
