function generateLiExpense(expense) {
  const elLi = document.createElement('li')

  const elSpan = document.createElement('span')
  const elI = document.createElement('i')
  const elSpanMinusMoney = document.createElement('span')
  const elInput = document.createElement('input')

  elSpan.classList.add('.badge')
  elInput.classList.add('.remove')
  elInput.onclick = onClickRemoveExpense
  elI.textContent = expense.description
  elSpanMinusMoney.textContent = ' ' + '-' + expense.amount

  elInput.setAttribute('type', 'button')
  elInput.setAttribute('value', '❌')
  elLi.appendChild(elSpan)
  elSpan.appendChild(elI)
  elSpan.appendChild(elSpanMinusMoney)
  elSpan.appendChild(elInput)
  return elLi
}
function generateLiIncome(income) {
  const elLi = document.createElement('li')

  const elSpan = document.createElement('span')
  const elI = document.createElement('i')
  const elSpanMinusMoney = document.createElement('span')
  const elInput = document.createElement('input')

  elSpan.classList.add('.badge')
  elInput.classList.add('.remove')
  elInput.onclick = onClickRemoveIncome
  elI.textContent = income.description
  elSpanMinusMoney.textContent = ' ' + income.amount

  elInput.setAttribute('type', 'button')
  elInput.setAttribute('value', '❌')
  elLi.appendChild(elSpan)
  elSpan.appendChild(elI)
  elSpan.appendChild(elSpanMinusMoney)
  elSpan.appendChild(elInput)
  return elLi
}
