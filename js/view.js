const elExpenseSelect = document.querySelector('#expense')
const elExpenseAmount = document.querySelector('#expenseamount')
const elExpenseButtonAdd = document.querySelector('#expenseadd')
const elExpenseButtonRemove = document.querySelector('#outcomelist')

const elIncomeSelect = document.querySelector('#income')
const elIncomeAmount = document.querySelector('#incomeamount')
const elIncomeButtonAdd = document.querySelector('#incomeadd')

elExpenseButtonAdd.onclick = onClickButtonAddExpense
// elExpenseButtonRemove.onclick = onClickRemoveIncome

elIncomeButtonAdd.onclick = onClickButtonAddIncome
