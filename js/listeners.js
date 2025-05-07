function onClickButtonAddIncomeExpense(e) {
  const elInputIncome = document.querySelector('#incomeamount')
  const elInputExpense = document.querySelector('#expenseamount')
  const elButtonEvent = e.target
  const parent = elButtonEvent.parentNode
  // console.log(parent)
  const container = parent.parentNode
  const select = container.querySelector('select')
  // console.log(select)
  const selected = select.options[select.selectedIndex]
  // console.log(selected)
  const selectName = select.name
  // console.log(selectName)
  if (selected.disabled || elInputIncome.value === '') {
    return
  } else {
    if (selectName === 'income') {
      handleSetIncome(selected.value, elInputIncome.value)
      handleAddIncome(selected.value, selectName)
      handleRenderSpanIncome()
    } else {
      handleSetExpense(selected.value, elInputExpense.value)
      handleAddExpense(selected.value, selectName)
      handleRenderSpanIncome()
    }
  }
}

function onClickInputBadgeRemoveTransaction(e) {
  const elId = e.target.parentElement.parentElement.getAttribute('data-id')
  console.log(elId)
  handleRemove(elId)
  handleRenderSpanIncome()
}

function onclickInputBadgeRemoveCategory(e) {
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

// function onClickButtonAddExpense() {
//   const elSelect = document.querySelector('#expense')
//   const selectedOption = elSelect.options[elSelect.selectedIndex]
//   console.log(selectedOption.value)
//   const selectName = elSelect.name
//   console.log(selectName)
//   const elInput = document.querySelector('#expenseamount')
//   if (elInput.value === '' || selectedOption.disabled) {
//     return
//   } else {
//     handleSetExpense(selectedOption.value, elInput.value)
//     handleAddExpense(selectedOption.value, selectName)
//     handleRenderSpanIncome()
//   }
// }

// function onClickButtonAddIncome() {
//   // const elInputEvent = e.target
//   // const parent = elInputEvent.parentNode
//   // const select = parent.querySelector('select')
//   // const selected = select.options[select.selectedIndex]
//   // console.log(selected)

//   const elSelect = document.querySelector('#income')
//   const selectedOption = elSelect.options[elSelect.selectedIndex]
//   console.log(selectedOption.value)
//   const selectName = elSelect.name
//   console.log(selectName)
//   const elInput = document.querySelector('#incomeamount')
//   if (elInput.value === '' || selectedOption.disabled) {
//     return
//   } else {
//     handleSetIncome(selectedOption.value, elInput.value)
//     handleAddIncome(selectedOption.value, selectName)
//     handleRenderSpanIncome()
//   }
// }

//
//      ||     elInputExpense.value === ''
