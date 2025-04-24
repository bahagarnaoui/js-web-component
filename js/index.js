import './listCategory.js';
import './qtf.js';
document.getElementById('generateBtn').addEventListener('click', () => {
    const questionList = document.querySelector('question-list');
    const categoryList = document.querySelector('category-list');
    const selectedCategory = categoryList.selectedCategory;
    if (selectedCategory) {
        questionList.generateQuestion(selectedCategory);
    }
});