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
const elSelectIncome = document.querySelector('#income')
const elSelectExpense = document.querySelector('#expense')
const elInputBoxIncome = document.querySelector('#incomeamount')
const elInputBoxExpense = document.querySelector('#expenseamount')

elSelectIncome.onchange = onChangeSelectIncome
elSelectExpense.onchange = onChangeSelectExpense
elInputBoxIncome.oninput = onInputInputIncome
elInputBoxExpense.oninput = onInputInputExpense

elExpenseButtonAdd.onclick = onClickButtonAddTransactionExpense
elIncomeButtonAdd.onclick = onClickButtonAddTransactionIncome
elButtonAddOptionIncome.onclick = onClickButtonAddOptionIncome
elButtonAddOptionExpense.onclick = onClickButtonAddOptionExpense
