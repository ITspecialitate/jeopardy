let currentQuestionId = '';

        function showQuestion(id, element) {
            currentQuestionId = id;
            element.classList.add('crossed');
            document.getElementById('question-content').innerHTML = questions[id].question;
            document.getElementById('answer-content').innerHTML = ''; // Clear previous answer
            document.getElementById('question-box').style.display = 'flex';
        }

        function showAnswer() {
            document.getElementById('answer-content').innerHTML = questions[currentQuestionId].answer;
            document.getElementById('answer-content').classList.remove('hidden');
        }

        function closeQuestion() {
            document.getElementById('question-box').style.display = 'none';
            document.getElementById('answer-content').classList.add('hidden');
        }