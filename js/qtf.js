class QuestionList extends HTMLElement {
    constructor() {
        super();
    }

    async generateQuestion(categoryId) {
        
        const response = await fetch(`https://opentdb.com/api.php?amount=1&category=${categoryId}`);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            this.questions.push(data.results[0]);
        }
    }
}

customElements.define('question-list', QuestionList);