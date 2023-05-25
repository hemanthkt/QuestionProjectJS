const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    // console.log(question)

    const btns = question.querySelector(".question-btn")
    // console.log(btns)

    btns.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item != question) {
                item.classList.remove("show-text");
            }
        })




        question.classList.toggle("show-text")
    });
});
