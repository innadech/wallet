function onClickInputBadgeRemoveTransaction(e) {
  const elId = e.target.parentElement.parentElement.getAttribute('data-id')
  console.log(elId)
  handleRemoveTransaction(elId)
  handleRenderSpanIncome()
}

function onclickInputBadgeRemoveCategory(e) {
  const id = e.target.parentElement.getAttribute('data-id')
  const type = e.target.parentElement.getAttribute('data-type')
  if (type === 'income') {
    handleRemoveIncomeCategories(id, type)
  } else {
    handleRemoveExpenseCategories(id, type)
  }
}

function onClickButtonAddOptionIncome() {
  const elInput = document.querySelector('#addOptionIncome')
  const caption = elInput.value
  if (elInput.value === '') return
  handleAddOptionToSelectIncome(caption, 'income')
  // elInput.value = ''
}
function onClickButtonAddOptionExpense() {
  const elInput = document.querySelector('#addOptionExpense')
  const caption = elInput.value
  if (elInput.value === '') return
  handleAddOptionToSelectExpense(caption, 'expense')
  // elInput.value = ''
}

function onChangeSelectIncome(e) {
  const categoryCaption = e.target.value
  handleSetCategoryIncome(categoryCaption)
}

function onInputInputIncome(e) {
  const transactionAmount = e.target.value
  handleSetAmountIncome(transactionAmount)
}
function onChangeSelectExpense(e) {
  const categoryCaption = e.target.value
  handleSetCategoryExpense(categoryCaption)
}

function onInputInputExpense(e) {
  const transactionAmount = e.target.value
  handleSetAmountExpense(transactionAmount)
}

function onClickButtonAddTransactionIncome() {
  const elSelect = document.querySelector('#income')
  const selectedOption = elSelect.options[elSelect.selectedIndex]
  const selectName = elSelect.name
  const elInput = document.querySelector('#incomeamount')
  if (selectedOption.disabled) {
    elSelect.style.border = '2px solid red'
    return
  } else {
    elSelect.style.border = ''
  }
  if (elInput.value === '' || +elInput.value === 0) {
    elInput.style.border = '2px solid red'
    return
  } else {
    elInput.style.border = ''
  }
  handleAddTransactionIncome(selectedOption.value, selectName)
  handleRenderSpanIncome()
  elInput.value = ''
}
function onClickButtonAddTransactionExpense() {
  const elSelect = document.querySelector('#expense')
  const elSelectedOption = elSelect.options[elSelect.selectedIndex]
  const selectName = elSelect.name
  // const elInput = document.querySelector('#expenseamount')

  // const validSelect = !elSelectedOption.disabled
  // const validInput = !!+elInput.value
  renderSelectRedExpense()
  renderInputRedExpense()
  handleAddTransactionExpense(elSelectedOption.value, selectName)
  handleRenderSpanIncome()
  elInput.value = ''
}
