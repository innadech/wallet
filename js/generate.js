function generateLiTransaction(transaction) {
  const elLi = document.createElement('li')
  const elSpan = document.createElement('span')
  const elInput = document.createElement('input')
  elLi.setAttribute('data-id', transaction.id)
  elLi.classList.add(transaction.type)
  elSpan.classList.add('badge')
  elInput.onclick = onClickInputBadgeRemoveTransaction
  elSpan.textContent = transaction.type + ' ' + '$' + transaction.amount
  elInput.setAttribute('type', 'button')
  elInput.setAttribute('value', '🗙')
  elLi.appendChild(elSpan)
  elSpan.appendChild(elInput)
  return elLi
}

function generateLiCategory(category) {
  const elSpan = document.createElement('span')
  const elI = document.createElement('i')
  const elInput = document.createElement('input')
  elSpan.setAttribute('data-id', category.id)
  elSpan.setAttribute('data-type', category.type) // !!!
  elSpan.classList.add('badge')
  elInput.onclick = onclickInputBadgeRemoveCategory
  elI.textContent = category.caption
  elInput.setAttribute('type', 'button')
  elInput.setAttribute('value', '🗙')
  elSpan.appendChild(elI)
  elSpan.appendChild(elInput)
  return elSpan
}

function generateOptionSelected() {
  const elOption = generateOption({ caption: 'Выберите категорию' })
  elOption.setAttribute('hidden', '')
  elOption.setAttribute('disabled', '')
  elOption.setAttribute('selected', '')
  elOption.setAttribute('value', '')
  return elOption
}

function generateOption(category) {
  const elOption = document.createElement('option')
  elOption.textContent = category.caption
  return elOption
}
