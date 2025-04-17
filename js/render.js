function renderContainerExpense(expenses) {
  const elDivContainer = document.querySelector('.container-outcome-list')
  elDivContainer.innerHTML = ''
  for (const expense of expenses) {
    const elSpanExpense = generateLiExpense(expense)
    elDivContainer.appendChild(elSpanExpense)
  }
}
function renderContainerIncome(incomes) {
  const elDivContainer = document.querySelector('.container-income-list')
  elDivContainer.innerHTML = ''
  for (const income of incomes) {
    const elSpanIncome = generateLiIncome(income)
    elDivContainer.appendChild(elSpanIncome)
  }
}

function renderSpanExpense(number) {
  const elSpan = document.querySelector('.expense-money')
  elSpan.innerHTML = number
}
function renderSpanIncome(number) {
  const elSpan = document.querySelector('.income-money')
  elSpan.innerHTML = number
}
