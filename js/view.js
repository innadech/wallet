const elExpenseSelect = document.querySelector('#expense')
const elExpenseAmount = document.querySelector('#expenseamount')
const elExpenseButtonAdd = document.querySelector('#expenseadd')

const elIncomeSelect = document.querySelector('#income')
const elIncomeAmount = document.querySelector('#incomeamount')
const elIncomeButtonAdd = document.querySelector('#incomeadd')

elExpenseSelect.onchange = onChangeSelectExpenseDescri
elExpenseAmount.oninput = onInputExpenseAmount
elExpenseButtonAdd.onclick = onClickButtonAddExpense

elIncomeSelect.onchange = onChangeSelectIncomeDescri
elIncomeAmount.oninput = onInputIncomeAmount
elIncomeButtonAdd.onclick = onClickButtonAddIncome
