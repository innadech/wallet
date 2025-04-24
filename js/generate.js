function generateLiTransactionHistoryExpense(expense) {
  const elLi = document.createElement('li')
  const elInput = document.createElement('input')
  const elSpan = document.createElement('span')

  elLi.classList.add('outcome')
  elSpan.classList.add('badge')
  // elInput.onclick = onClickRemoveExpense
  elSpan.textContent = 'Затраты' + ' ' + '-' + expense

  elInput.setAttribute('type', 'button')
  elInput.setAttribute('value', '❌')

  elLi.appendChild(elSpan)
  elSpan.appendChild(elInput)
  return elLi
}

function generateLiTransactionHistoryIncome(income) {
  const elLi = document.createElement('li')
  const elSpan = document.createElement('span')
  const elInput = document.createElement('input')

  elLi.classList.add('income')
  elSpan.classList.add('badge')
  // elInput.onclick = onClickRemoveIncome
  elSpan.textContent = 'Доходы' + ' ' + '+' + income

  elInput.setAttribute('type', 'button')
  elInput.setAttribute('value', '🗙')

  elLi.appendChild(elSpan)
  elSpan.appendChild(elInput)
  return elLi
}

function generateLiExpense(expense) {
  const elSpan = document.createElement('span')
  const elI = document.createElement('i')
  const elInput = document.createElement('input')

  elSpan.classList.add('badge')
  // elInput.onclick = onClickRemoveExpense
  elI.textContent = expense.category

  elInput.setAttribute('type', 'button')
  elInput.setAttribute('value', '🗙')

  elSpan.appendChild(elI)
  elSpan.appendChild(elInput)
  return elSpan
}
function generateLiIncome(income) {
  const elSpan = document.createElement('span')
  const elI = document.createElement('i')
  const elInput = document.createElement('input')

  elSpan.classList.add('badge')
  // elInput.onclick = onClickRemoveIncome
  elI.textContent = income.category

  elInput.setAttribute('type', 'button')
  elInput.setAttribute('value', '🗙')

  elSpan.appendChild(elI)
  elSpan.appendChild(elInput)
  return elSpan
}
