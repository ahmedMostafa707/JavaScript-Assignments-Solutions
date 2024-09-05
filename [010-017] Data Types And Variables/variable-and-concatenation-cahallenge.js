let articleTitle = "Elzero",
  articleDescription = "Elzero Web School",
  articleDate = "25/10";

let card = `
        <div> 
          <h3>Hello ${articleTitle}</h3>
          <p>${articleDescription}</p>
          <span>${articleDate}</span>
        </div>
      `;

document.write(card.repeat(4));
