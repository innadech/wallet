const elExpenseSelect = document.querySelector('#expense')
const elExpenseAmount = document.querySelector('#expenseamount')
const elExpenseButtonAdd = document.querySelector('#expenseadd')
const elExpenseButtonRemove = document.querySelector('#outcomelist')

const elIncomeSelect = document.querySelector('#income')
const elIncomeAmount = document.querySelector('#incomeamount')
const elIncomeButtonAdd = document.querySelector('#incomeadd')
const elButtonAddOptionIncome = document.querySelector('#addOptionIncomeButton')
const elButtonAddOptionExpense = document.querySelector(
  '#addOptionExpenseButton'
)

elExpenseButtonAdd.onclick = onClickButtonAddExpense
// elExpenseButtonRemove.onclick = onClickRemoveIncome

elIncomeButtonAdd.onclick = onClickButtonAddIncome
elButtonAddOptionIncome.onclick = onClickButtonAddOptionIncome
elButtonAddOptionExpense.onclick = onClickButtonAddOptionExpense
