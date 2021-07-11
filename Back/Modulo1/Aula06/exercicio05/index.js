const comentario = "Esse COVID é muito perigoso!";

const achouCovid = comentario.toLowerCase().includes('covid');

const achouPandemia = comentario.toLowerCase().includes('pandemia');

if (achouCovid || achouPandemia) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado");
}