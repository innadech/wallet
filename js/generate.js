function generateLiTransactionHistoryExpense(expense) {
  const elLi = document.createElement('li')
  const elInput = document.createElement('input')
  const elSpan = document.createElement('span')

  elLi.setAttribute('data-id', expense.id)

  elLi.classList.add('outcome')
  elSpan.classList.add('badge')
  elInput.onclick = onClickRemove
  elSpan.textContent = 'Затраты' + ' ' + '$' + expense.amount

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

  elLi.setAttribute('data-id', income.id)

  elLi.classList.add('income')
  elSpan.classList.add('badge')
  elInput.onclick = onClickRemove
  elSpan.textContent = 'Доходы' + ' ' + '$' + income.amount

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

  elSpan.setAttribute('data-id', expense.id)

  elSpan.classList.add('badge')
  elInput.onclick = onclickRemoveCategory
  elI.textContent = expense.caption

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

  elSpan.setAttribute('data-id', income.id)

  elSpan.classList.add('badge')
  elInput.onclick = onclickRemoveCategory
  elI.textContent = income.caption
  console.log(income.caption)

  elInput.setAttribute('type', 'button')
  elInput.setAttribute('value', '🗙')

  elSpan.appendChild(elI)
  elSpan.appendChild(elInput)
  return elSpan
}

function generateOption(category) {
  const elOptionSelected = document.createElement('option')
  const elOption = document.createElement('option')
  elOption.textContent = category.caption
  elOptionSelected.textContent = 'Выберите категорию'
  elOptionSelected.hidden = true
  elOptionSelected.disabled = true
  elOptionSelected.selected = true
  return elOption
}
