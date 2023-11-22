document.addEventListener("DOMContentLoaded",function() {
    const character = document.querySelectorAll("[data-character]");
    const questions = document.querySelectorAll("[data-faq-question]");




    for (let i = 0; i < character.length; i++){
        character[i].addEventListener("mouseenter", function(elemento){
            const elementoAlvo = elemento.target;

            elementoAlvo.classList.add("war__content__poles__item--is-open")
        });
        character[i].addEventListener("mouseleave", function(elemento){
            const elementoAlvo = elemento.target;

            elementoAlvo.classList.remove("war__content__poles__item--is-open")
        });
    }
    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener("click", abreFechaResposta);
    }
})
function abreFechaResposta(elemento){
    const classe = "questions__list__item--is-open";
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}
