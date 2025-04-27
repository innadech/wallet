function saveCategory(category) {
  const stringifiedCategory = JSON.stringify(category)
  localStorage.setItem('category', stringifiedCategory)
}

function restoreCategory() {
  const categoryJson = localStorage.getItem('category')
  const category = JSON.parse(categoryJson)
  if (category) return category
  return { id: 0, caption: 0, type: '' }
}

function saveCategories() {
  const stringifiedCategories = JSON.stringify(categories)
  localStorage.setItem('categories', stringifiedCategories)
}
function restoreCategories() {
  const categoriesJson = localStorage.getItem('categories')
  const categories = JSON.parse(categoriesJson)
  if (categories) return categories
  return []
}
