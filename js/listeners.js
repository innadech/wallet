function onClickButtonAddIncome() {
  const elSelect = document.querySelector('#income')
  const selectedOption = elSelect.options[elSelect.selectedIndex]
  console.log(selectedOption.value)
  const selectName = elSelect.name
  console.log(selectName)
  const elInput = document.querySelector('#incomeamount')
  handleSetIncome(selectedOption.value, elInput.value)
  handleAddIncome(selectedOption.value, selectName)
  handleRenderSpanIncome()
}
function onClickButtonAddExpense() {
  const elSelect = document.querySelector('#expense')
  const selectedOption = elSelect.options[elSelect.selectedIndex]
  console.log(selectedOption.value)
  const selectName = elSelect.name
  console.log(selectName)
  const elInput = document.querySelector('#expenseamount')
  handleSetExpense(selectedOption.value, elInput.value)
  handleAddExpense(selectedOption.value, selectName)
  handleRenderSpanIncome()
}

function onClickRemove(e) {
  const elId = e.target.parentElement.parentElement.getAttribute('data-id')
  console.log(elId)
  handleRemove(elId)
  handleRenderSpanIncome()
}

function onclickRemoveCategory(e) {
  const elId = e.target.parentElement.getAttribute('data-id')
  console.log(elId)
  handleRemoveCategory(elId)
}

function onClickButtonAddOptionIncome() {
  const elInput = document.querySelector('#addOptionIncome')
  const elCaption = elInput.value
  const elType = 'income'
  if (elInput.value === '') {
    return
  } else {
    handleAddOptionToSelectIncome(elCaption, elType)
  }
}
function onClickButtonAddOptionExpense() {
  const elInput = document.querySelector('#addOptionExpense')
  const elCaption = elInput.value
  const elType = 'expense'
  if (elInput.value === '') {
    return
  } else {
    handleAddOptionToSelectExpense(elCaption, elType)
  }
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
