- если категория не выбрана, по при клике на кнопку "добавить", пометить select красной рамкой

- запрет добавлять категории с одинаковым названием

- при добавлении или удалении категории доходов перерисовывать ТОЛЬКО select категорий доходов. причем сохранять текущую выбранную катерию в select`e

твои income и expence. не синхронизированы с отображением
я бы их вообще переименовал в currentIncome и currentExpence

renderContainerIncomeAppender(incomeCategories, currentIncome) {

}

transactionHistory - один список
сategoriesIncome
categoriesExpense

categories transactions
