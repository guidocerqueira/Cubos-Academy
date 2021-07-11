const base_url = 'https://desafio-m03.herokuapp.com/';

async function post(resource, data) {
    const resposta = await fetch(base_url+resource, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const dados = await resposta.json();

    return { dados, erro: !resposta.ok }
}

async function get(resource) {
    const resposta = await fetch(base_url+resource);

    return resposta.json();
}

async function del(resource) {
    const resposta = await fetch(base_url+resource, {
        method: 'DELETE',
    });

    return resposta.json();
}

export { post, get, del };