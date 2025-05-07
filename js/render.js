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
