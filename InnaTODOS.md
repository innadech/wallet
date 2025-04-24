у состояния income и expense убрать id
id должен генерироваться автоматически при добавлении дохода или рахода в список
свойство active у объекта истории переделать в type = 'income' type = 'expense'
списки incomes, expenses, wtfs, histories переделать в один список
ОДИН ИСТОЧНИК ИСТИНЫ под названием transactionHistory
transactionHistory = []
transaction = {
  id: 42,
  type: 'income',
  amount: 42000,
  category: 'зарплата',
}
а объект transaction создается из объектика income или объектика expense

createTransactionFromIncome(income)
createTransactionFromExpense(expence)

addTransactionFromIncome(income)
addTransactionFromExpense(expence)

все строки с названиями категорий будут в нижнем регистре
toLowerCase будем делать при добавлении категории

createCategory('income','зарплата')
createCategory('expence','продукты')

categories = []
category = {
  id: 33,
  caption: 'зарплата'
  type: 'income'
}

categoriesIncomes = ['зарплата']
categoriesExpenses = ['продукты']
