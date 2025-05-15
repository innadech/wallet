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
  const type = 'income'
  if (elInput.value === '') return
  handleAddOptionToSelectIncome(caption, type)
}
function onClickButtonAddOptionExpense() {
  const elInput = document.querySelector('#addOptionExpense')
  const elCaption = elInput.value
  const elType = 'expense'
  if (elInput.value === '') return
  handleAddOptionToSelectExpense(elCaption, elType)
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
}

// const id =
//     e.target.parentElement.parentElement.parentElement.getAttribute(
//       'data-product-id'
//     )

// function onChangeSelectExpenseDescri(e) {
//   const selectedOption = e.target.options[e.target.selectedIndex].text
//   // console.log(selectedOption)
//   handleSetDescriptionExpense(selectedOption)
// }
// function onChangeSelectIncomeDescri(e) {
//   const selectedOption = e.target.options[e.target.selectedIndex].text
//   // console.log(selectedOption)
//   handleSetDescriptionIncome(selectedOption)
// }
// function onInputExpenseAmount(e) {
//   const expenseAmount = e.target.value
//   // console.log(expenseAmount)
//   handleSetAmountExpense(expenseAmount)
// }
// function onInputIncomeAmount(e) {
//   const incomeAmount = e.target.value
//   // console.log(incomeAmount)
//   handleSetAmountIncome(incomeAmount)
// }
// function onClickButtonAddExpense() {
//   handleAddExpense()
//   // handleRenderSpanExpense()
//   elExpenseAmount.value = ''
// }
// function onClickButtonAddIncome() {
//   handleAddIncome()
//   handleRenderSpanIncome()
//   elIncomeAmount.value = ''
// }
// function onClickRemoveExpense(e) {
//   const elExpense = e.target.previousElementSibling.textContent
//   // console.log(elExpense)
//   handleRemoveExpense(elExpense)
//   // handleRenderSpanExpense()
// }
// function onClickRemoveIncome(e) {
//   const elIncome =
//     e.target.previousElementSibling.previousElementSibling.textContent
//   // console.log(elIncome)
//   handleRemoveIncome(elIncome)
//   handleRenderSpanIncome()
// }
// function onclickInputBadgeRemoveCategory(e) {
//   const id = e.target.parentElement.getAttribute('data-id')
//   const type = e.target.parentElement.getAttribute('data-type') // !!!
//   handleRemoveCategory(id, type)
// }
