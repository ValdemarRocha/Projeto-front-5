// Carrossel de avaliações da página inicial
const reviews = document.querySelectorAll(".review");
const contador = document.getElementById("review-contador");
let atual = 0;

function mostrarReview(indice) {
  atual = (indice + reviews.length) % reviews.length;
  reviews.forEach((review, i) => { review.hidden = i !== atual; });
  contador.textContent = `${atual + 1} de ${reviews.length}`;
}

document.getElementById("review-anterior").addEventListener("click", () => mostrarReview(atual - 1));
document.getElementById("review-proximo").addEventListener("click", () => mostrarReview(atual + 1));

// As setas do teclado também trocam de avaliação quando o carrossel está em foco
document.querySelector(".carrossel").addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") mostrarReview(atual - 1);
  if (e.key === "ArrowRight") mostrarReview(atual + 1);
});

mostrarReview(0);
