const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Document chargé");
  const modal = $.querySelector(".modal");
  const body = $.querySelector("body");
  const header = $.querySelector("header");

  $.querySelector(".btn-signup").addEventListener("click", () => {
    // Display modal
    modal.classList.remove("hidden");
    // Disable scroll
    body.classList.add("disable");
  });
  $.querySelector(".icon-uniE02C").addEventListener("click", () => {
    // Hide modal
    modal.classList.add("hidden");
    // Enable scroll
    body.classList.remove("disable");
  });

  $.addEventListener("click", () => {
    console.log(click);
  });

  // $.querySelector("#contact-form")
  const contactForm = $.querySelector("#contactForm");
  const button = $.querySelector("button");
  const a = $.querySelector("a");
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("Soumission du form");

    const data = {
      firstname: $.querySelector("#firstname").Value,
      lastename: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      message: $.querySelector("#message").value,
    };
    console.log(data);

    const response = await axios.post(
      "https://tripadvisor-backend-orion21.herokuapp.com/form",
      data
    );
    console.log(response);
    if (response.status === 200) {
      alert("Le formulaire a bien été envoyé !");
      contactForm.reset();
    } else {
      alert("Le formulaire n'a pas pu être envoyé !");
    }
  });
});
