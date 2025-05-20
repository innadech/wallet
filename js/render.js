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

function renderCategoriesList(categories) {
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
/// ???? renderBalance
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

function renderSelect(categories, type, currentCategory) {
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
  console.log(currentCategory)
  elSelectIncome.value = currentCategory ?? 'www'
}

function renderContainerIncomeAppender(incomeCategories, currentIncome) {
  const elInput = document.querySelector('#incomeamount')
  elInput.value = currentIncome.value
  renderSelect(incomeCategories, type, currentIncome.category)
}
