/* ==========================================================
   TUCÃTINS SILVESTRE — COMPORTAMENTO DO SITE (script.js)
   ==========================================================

   O QUE O JAVASCRIPT FAZ AQUI?
   O HTML é o conteúdo, o CSS é a aparência e o JavaScript é
   o COMPORTAMENTO: o que acontece quando a pessoa clica,
   rola a página etc.

   ÍNDICE
   0. Configurações (coisas fáceis de trocar)
   1. Cabeçalho que muda de cor ao rolar
   2. Menu do celular (abrir e fechar)
   3. Rolagem suave até as seções
   4. Botão "voltar ao topo"
   5. Caderno de Campo: funções de apoio
   6. Caderno de Campo: página da esquerda (índice)
   7. Caderno de Campo: página da direita (ficha) e abas de filtro
   8. Animação de aparecer ao rolar
   9. Contadores animados (números do projeto)
   10. Formulário de contato
   11. Ano automático no rodapé

   PALAVRAS-CHAVE ÚTEIS
   const      -> cria uma variável que NÃO muda de valor
   let        -> cria uma variável que PODE mudar
   function   -> cria um bloco de código reutilizável
   document.querySelector("x")    -> pega o PRIMEIRO elemento que combina com "x"
   document.querySelectorAll("x") -> pega TODOS os elementos que combinam com "x"
   addEventListener("evento", ...) -> "quando acontecer tal evento, faça isso"
   ========================================================== */


/* ==========================================================
   0. CONFIGURAÇÕES
   Coloque aqui o e-mail oficial do projeto, entre as aspas.
   Exemplo: const EMAIL_CONTATO = "tucatinsilvestre@gmail.com";
   Enquanto estiver vazio (""), o formulário manda a pessoa
   para o Instagram.
   ========================================================== */

const EMAIL_CONTATO = "";
const INSTAGRAM_URL = "https://www.instagram.com/tucatinsilvestre/";


/* ==========================================================
   1. CABEÇALHO QUE MUDA DE COR AO ROLAR
   Em vez de mudar a cor direto pelo JavaScript, só
   adicionamos/removemos a classe "rolando". Quem decide a
   cor é o CSS (header.rolando). Assim cada arquivo cuida
   da sua parte.
   ========================================================== */

const header = document.querySelector("header");

function atualizarHeader() {
    // window.scrollY = quantos pixels a página já foi rolada
    if (window.scrollY > 80) {
        header.classList.add("rolando");
    } else {
        header.classList.remove("rolando");
    }
}

window.addEventListener("scroll", atualizarHeader);
atualizarHeader(); // roda uma vez ao abrir (caso a página já abra rolada)


/* ==========================================================
   2. MENU DO CELULAR
   Em telas pequenas o menu fica escondido. O botão ☰
   adiciona ou remove a classe "aberto" no <nav>.
   classList.toggle() = se tem a classe, tira; se não tem, coloca.
   ========================================================== */

const menuBotao = document.querySelector(".menu-botao");
const menu = document.querySelector(".menu");

menuBotao.addEventListener("click", function () {
    const estaAberto = menu.classList.toggle("aberto");

    // Atualiza o atributo de acessibilidade (true/false)
    menuBotao.setAttribute("aria-expanded", estaAberto);

    // Troca o ícone: ☰ quando fechado, X quando aberto
    menuBotao.innerHTML = estaAberto
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Fecha o menu quando a pessoa clica em um dos links
document.querySelectorAll(".menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        menuBotao.setAttribute("aria-expanded", false);
        menuBotao.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});


/* ==========================================================
   3. ROLAGEM SUAVE
   Para todos os links que começam com "#", em vez de "pular"
   direto para a seção, a página desliza até ela.
   ========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (evento) {

        const destino = document.querySelector(this.getAttribute("href"));

        // Só faz a rolagem se a seção existir.
        // (Antes, um link "#" vazio causava erro no console.)
        if (destino) {
            evento.preventDefault(); // impede o "pulo" padrão do navegador
            destino.scrollIntoView({ behavior: "smooth" });
        }
    });
});


/* ==========================================================
   4. BOTÃO "VOLTAR AO TOPO"
   O botão é criado pelo próprio JavaScript e só aparece
   depois que a pessoa rola 500 pixels.
   ========================================================== */

const botaoTopo = document.createElement("a");    // cria um <a>
botaoTopo.href = "#topo";
botaoTopo.className = "botao-topo";
botaoTopo.setAttribute("aria-label", "Voltar ao topo");
botaoTopo.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.body.appendChild(botaoTopo);             // coloca no final da página

botaoTopo.addEventListener("click", function (evento) {
    evento.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
    botaoTopo.classList.toggle("visivel", window.scrollY > 500);
});


/* ==========================================================
   5. CADERNO DE CAMPO — FUNÇÕES DE APOIO
   A lista "especies" vem do arquivo js/especies.js.
   Aqui criamos pequenas funções que ajudam a montar
   o caderno. Cada função faz UMA coisa só: isso deixa
   o código mais fácil de entender e de consertar.
   ========================================================== */

const indiceEspecies = document.querySelector("#indice-especies");
const fichaEspecie = document.querySelector("#ficha-especie");

// "Tradução" dos códigos usados na lista para textos bonitos
const nomesLocais = {
    formoso: "Formoso do Araguaia",
    palmas: "Córrego Sussuapara, Palmas"
};

const nomesGrupos = {
    mamifero: "Mamífero",
    ave: "Ave"
};

// Guarda qual animal está aberto na página da direita (posição na lista)
let especieAtual = 0;

// Transforma 1 em "001", 12 em "012"... (padStart completa com zeros à esquerda)
function numeroFormatado(posicao) {
    return "Nº " + String(posicao + 1).padStart(3, "0");
}

// Se a foto não carregar (sem internet, por exemplo), troca por um aviso.
// Esta função é chamada pelo atributo onerror das imagens.
function trocarPorAviso(imagem) {
    const aviso = document.createElement("div");
    aviso.className = "foto-placeholder";
    aviso.innerHTML =
        '<i class="fa-solid fa-camera"></i>' +
        '<span>Foto em breve</span>' +
        '<small>' + imagem.alt + '</small>';
    imagem.replaceWith(aviso);
}

// Fotos "em pé" (retrato), como as do bem-te-vi e da alma-de-gato, ficariam
// cortadas na moldura horizontal da ficha. Quando a foto termina de carregar
// (evento onload), comparamos altura e largura: se for mais alta que larga,
// ganha a classe "foto-retrato" e o CSS mostra a foto inteira.
function ajustarFoto(imagem) {
    if (imagem.naturalHeight > imagem.naturalWidth) {
        imagem.classList.add("foto-retrato");
    }
}

// Cria a barrinha de risco com 5 quadradinhos.
// Ex.: status 3 -> ■■■□□
function barraDeRisco(nivel) {
    let quadrados = "";
    for (let i = 1; i <= 5; i++) {
        // Se i for menor ou igual ao nível, o quadrado fica "cheio"
        const classe = i <= nivel ? "cheio" : "";
        quadrados += '<span class="' + classe + '"></span>';
    }
    return '<div class="risco risco-' + nivel + '">' + quadrados + '</div>';
}


/* ==========================================================
   6. CADERNO DE CAMPO — PÁGINA DA ESQUERDA (ÍNDICE)
   Para cada animal, criamos um item <li> com a miniatura
   e o nome. Os não registrados aparecem como "???".
   ========================================================== */

function criarItemIndice(especie, posicao) {

    // Operador ternário:  condição ? valorSeVerdadeiro : valorSeFalso
    const nomeMostrado = especie.registrada ? especie.nome : "???";
    const classeExtra = especie.registrada ? "" : "pendente";

    // As crases ` ` permitem escrever HTML em várias linhas
    // e colocar variáveis no meio usando ${ }
    return `
        <li>
            <button class="item-indice ${classeExtra}"
                    data-posicao="${posicao}"
                    data-grupo="${especie.grupo}"
                    data-locais="${especie.locais.join(" ")}"
                    data-registrada="${especie.registrada}">
                <span class="item-numero">${numeroFormatado(posicao)}</span>
                <span class="item-foto">
                    <img src="${especie.foto}" alt="${especie.nome}" loading="lazy" onerror="trocarPorAviso(this)">
                </span>
                <span class="item-nome">${nomeMostrado}</span>
            </button>
        </li>
    `;
}

function montarIndice() {
    // .map() cria um item para cada espécie; .join("") junta tudo em um texto só
    indiceEspecies.innerHTML = especies.map(criarItemIndice).join("");

    // Cada item do índice abre a ficha do animal ao ser clicado
    document.querySelectorAll(".item-indice").forEach(function (item) {
        item.addEventListener("click", function () {
            abrirFicha(Number(item.dataset.posicao));

            // No celular, as páginas ficam uma embaixo da outra:
            // então rolamos até a ficha para a pessoa ver o resultado.
            if (window.innerWidth < 992) {
                fichaEspecie.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
}

// Escreve o resumo do caderno, ex.: "13 espécies registradas • 5 mamíferos • 8 aves"
function atualizarProgresso() {
    // .filter() devolve só os itens que passam no teste
    const registrados = especies.filter(function (e) { return e.registrada; });
    const mamiferos = registrados.filter(function (e) { return e.grupo === "mamifero"; }).length;
    const aves = registrados.filter(function (e) { return e.grupo === "ave"; }).length;

    document.querySelector("#progresso-texto").textContent =
        registrados.length + " espécies registradas • " + mamiferos + " mamíferos • " + aves + " aves";
}


/* ==========================================================
   7. CADERNO DE CAMPO — PÁGINA DA DIREITA (FICHA)
   Mostra todos os detalhes do animal escolhido.
   ========================================================== */

function criarFicha(especie, posicao) {

    // Carimbo: "REGISTRADO" (vermelho) ou "NÃO REGISTRADO" (cinza)
    const carimbo = especie.registrada
        ? '<span class="carimbo">Registrado</span>'
        : '<span class="carimbo carimbo-pendente">Não registrado</span>';

    // Texto dos locais. Se a lista estiver vazia, mostra outra frase.
    const locais = especie.locais.length > 0
        ? especie.locais.map(function (l) { return nomesLocais[l]; }).join(" e ")
        : "Ainda não flagrado pelas câmeras";

    // Anotação "à mão" diferente para animais ainda não registrados
    const anotacao = especie.registrada
        ? especie.resumo
        : especie.resumo + " Ainda não apareceu nas nossas câmeras... será que vamos encontrá-lo?";

    return `
        <div class="ficha-topo">
            <span class="ficha-numero">${numeroFormatado(posicao)}</span>
            <span class="ficha-grupo">${nomesGrupos[especie.grupo]}</span>
        </div>

        <figure class="ficha-ilustracao ${especie.registrada ? "" : "pendente"}">
            <img src="${especie.foto}" alt="Foto ilustrativa: ${especie.nome}" onload="ajustarFoto(this)" onerror="trocarPorAviso(this)">
            ${especie.registrada ? "" : '<span class="ficha-interrogacao">?</span>'}
            <figcaption>
                Foto ilustrativa: <a href="${especie.credito.link}" target="_blank" rel="noopener">${especie.credito.autor}</a>
                (${especie.credito.licenca})
            </figcaption>
        </figure>

        <div class="ficha-titulo">
            <h3>${especie.nome}</h3>
            ${carimbo}
        </div>
        <p class="ficha-cientifico">${especie.cientifico}</p>

        <dl class="ficha-dados">
            <div>
                <dt>Local do registro</dt>
                <dd>${locais}</dd>
            </div>
            <div>
                <dt>Método</dt>
                <dd>${especie.registrada ? "Câmera trap" : "—"}</dd>
            </div>
            <div>
                <dt>Grau de ameaça</dt>
                <dd>${barraDeRisco(especie.status)} <small>${especie.statusTexto}</small></dd>
            </div>
        </dl>

        <div class="ficha-notas">
            <h4>Anotações de campo</h4>
            <p>${anotacao}</p>
            <p><strong>Papel na natureza:</strong> ${especie.funcao}</p>
        </div>

        <nav class="ficha-navegacao" aria-label="Navegar entre as fichas">
            <button class="virar" data-direcao="-1"><i class="fa-solid fa-chevron-left"></i> Anterior</button>
            <button class="virar" data-direcao="1">Próxima <i class="fa-solid fa-chevron-right"></i></button>
        </nav>
    `;
}

function abrirFicha(posicao) {

    // Se passar do último, volta para o primeiro (e vice-versa).
    // O operador % ("resto da divisão") faz essa volta.
    const total = especies.length;
    especieAtual = (posicao + total) % total;

    // Animação de "virar a página": tira e coloca a classe de novo
    fichaEspecie.classList.remove("virando");
    void fichaEspecie.offsetWidth;  // truque para o navegador reiniciar a animação
    fichaEspecie.classList.add("virando");

    fichaEspecie.innerHTML = criarFicha(especies[especieAtual], especieAtual);

    // Destaca no índice o item que está aberto
    document.querySelectorAll(".item-indice").forEach(function (item) {
        item.classList.toggle("selecionado", Number(item.dataset.posicao) === especieAtual);
    });

    // Botões "Anterior" e "Próxima"
    fichaEspecie.querySelectorAll(".virar").forEach(function (botao) {
        botao.addEventListener("click", function () {
            abrirFicha(especieAtual + Number(botao.dataset.direcao));
        });
    });
}

// Monta o caderno assim que a página carrega.
// "typeof especies !== 'undefined'" confere se o arquivo especies.js carregou.
if (indiceEspecies && typeof especies !== "undefined") {
    montarIndice();
    atualizarProgresso();
    abrirFicha(0);  // começa aberto no primeiro animal (tamanduá-bandeira)
}


/* ==========================================================
   7.1 CADERNO DE CAMPO — ABAS DE FILTRO
   Cada aba tem um data-filtro ("todas", "ave", "formoso"...).
   Ao clicar, escondemos os itens do índice que não combinam.
   ========================================================== */

const abas = document.querySelectorAll(".aba");

abas.forEach(function (aba) {

    aba.addEventListener("click", function () {

        const filtro = aba.dataset.filtro; // lê o valor de data-filtro

        // Tira o destaque de todas as abas e coloca só na clicada
        abas.forEach(function (a) { a.classList.remove("ativo"); });
        aba.classList.add("ativo");

        // Passa por todos os itens e decide se mostra ou esconde
        document.querySelectorAll(".item-indice").forEach(function (item) {

            const grupo = item.dataset.grupo;                    // ex.: "ave"
            const locais = item.dataset.locais;                  // ex.: "formoso palmas"

            const mostrar =
                filtro === "todas" ||
                filtro === grupo ||
                locais.includes(filtro);

            // Escondemos o <li> inteiro (o "pai" do botão)
            item.parentElement.classList.toggle("escondido", !mostrar);
        });
    });
});


/* ==========================================================
   7.2 OUTRAS IMAGENS QUE AINDA NÃO EXISTEM
   As imagens da galeria ficam no HTML. Se não forem
   encontradas, usamos a mesma função trocarPorAviso().
   ========================================================== */

document.querySelectorAll(".galeria img").forEach(function (imagem) {

    // Caso 1: a imagem ainda está carregando e vai falhar depois
    imagem.addEventListener("error", function () {
        trocarPorAviso(imagem);
    });

    // Caso 2: a imagem já terminou de carregar e falhou
    // (naturalWidth 0 = nenhuma imagem de verdade foi carregada)
    if (imagem.complete && imagem.naturalWidth === 0) {
        trocarPorAviso(imagem);
    }
});


/* ==========================================================
   8. ANIMAÇÃO DE APARECER AO ROLAR
   O IntersectionObserver "observa" os elementos e avisa
   quando eles entram na tela. Aí adicionamos a classe
   "visivel", e o CSS faz a animação de subir e aparecer.
   ========================================================== */

const elementosAnimados = document.querySelectorAll(
    ".atuacao-card, .missao-card, .area-card, .passo, " +
    ".publicacao, .membro, .timeline-item, .educacao-coluna, .caderno"
);

const observadorAnimacao = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observadorAnimacao.unobserve(entrada.target); // anima só uma vez
        }
    });
}, { threshold: 0.15 }); // 0.15 = quando 15% do elemento estiver visível

elementosAnimados.forEach(function (elemento) {
    elemento.classList.add("animar");   // estado inicial: invisível
    observadorAnimacao.observe(elemento);
});


/* ==========================================================
   9. CONTADORES ANIMADOS
   Quando a seção de números aparece na tela, cada número
   conta de 0 até o valor de data-numero.
   ========================================================== */

function animarContador(elemento) {

    const alvo = Number(elemento.dataset.numero); // valor final
    const duracao = 1500;                         // em milissegundos (1,5 s)
    const inicio = performance.now();             // momento em que começou

    function passo(agora) {
        // progresso vai de 0 (início) até 1 (fim)
        const progresso = Math.min((agora - inicio) / duracao, 1);
        elemento.textContent = Math.floor(progresso * alvo);

        if (progresso < 1) {
            requestAnimationFrame(passo); // pede o próximo quadro da animação
        } else {
            elemento.textContent = alvo;
        }
    }

    requestAnimationFrame(passo);
}

const secaoNumeros = document.querySelector(".numeros");

if (secaoNumeros) {
    const observadorNumeros = new IntersectionObserver(function (entradas) {
        if (entradas[0].isIntersecting) {
            document.querySelectorAll("[data-numero]").forEach(animarContador);
            observadorNumeros.disconnect(); // conta só uma vez
        }
    });
    observadorNumeros.observe(secaoNumeros);
}


/* ==========================================================
   10. FORMULÁRIO DE CONTATO
   Um site feito só com HTML, CSS e JS não tem servidor para
   guardar mensagens. A solução simples:
   - Se houver EMAIL_CONTATO: abre o aplicativo de e-mail da
     pessoa com a mensagem já escrita (link "mailto:").
   - Se não houver: copia a mensagem e abre o Instagram.
   Para receber mensagens direto, no futuro dá para usar um
   serviço gratuito de formulários (ex.: Formspree).
   ========================================================== */

const formulario = document.querySelector("#formulario");
const aviso = document.querySelector("#formulario-aviso");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault(); // impede a página de recarregar

    // .value = o texto digitado; .trim() tira espaços sobrando
    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    const textoCompleto =
        "Nome: " + nome + "\n" +
        "E-mail: " + email + "\n\n" +
        mensagem;

    if (EMAIL_CONTATO !== "") {

        // encodeURIComponent deixa o texto seguro para usar em um link
        const link =
            "mailto:" + EMAIL_CONTATO +
            "?subject=" + encodeURIComponent("Contato pelo site - " + nome) +
            "&body=" + encodeURIComponent(textoCompleto);

        window.location.href = link;
        aviso.textContent = "Abrindo seu aplicativo de e-mail...";

    } else {

        // Copia a mensagem para a área de transferência (Ctrl+V depois)
        if (navigator.clipboard) {
            navigator.clipboard.writeText(textoCompleto);
        }

        aviso.textContent =
            "Sua mensagem foi copiada! Cole no Direct do nosso Instagram, que vai abrir em uma nova aba.";

        window.open(INSTAGRAM_URL, "_blank", "noopener");
    }

    formulario.reset(); // limpa os campos
});


/* ==========================================================
   11. ANO AUTOMÁTICO NO RODAPÉ
   new Date().getFullYear() devolve o ano atual. Assim o
   rodapé nunca fica desatualizado.
   ========================================================== */

document.querySelector("#ano").textContent = new Date().getFullYear();
