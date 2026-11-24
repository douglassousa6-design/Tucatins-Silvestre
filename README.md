# 🐾 Tucãtins Silvestre

Site do projeto **Tucãtins Silvestre**, do **Instituto Federal do Tocantins (IFTO)**.
O projeto monitora a fauna do Cerrado com **câmeras trap** em **Formoso do Araguaia (TO)** e usa os registros em ações de **educação ambiental**.

Instagram: [@tucatinsilvestre](https://www.instagram.com/tucatinsilvestre/)

---

## 📁 Como o projeto está organizado

```
Tucatins-Silvestre/
├── index.html        → CONTEÚDO da página (textos e seções)
├── css/
│   └── style.css     → APARÊNCIA (cores, tamanhos, layout)
├── js/
│   ├── especies.js   → DADOS das espécies registradas
│   └── script.js     → COMPORTAMENTO (menu, filtros, animações)
└── imagens/
    ├── onca-familia.jpg   → foto da capa
    ├── especies/          → uma foto por espécie
    ├── galeria/           → fotos da galeria
    └── parceiros/         → logos dos parceiros
```

> 💡 **Dica:** os três arquivos (HTML, CSS e JS) seguem a **mesma ordem de seções** e têm comentários explicando cada parte. Se quiser mudar algo em "Equipe", procure "EQUIPE" nos três arquivos.

---

## ▶️ Como abrir o site

1. Abra a pasta no **VS Code**.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito no `index.html` → **Open with Live Server**.

Também funciona dando dois cliques no `index.html`.

---

## ✏️ Tarefas comuns

### O Caderno de Campo
A seção de espécies funciona como um **diário de naturalista** (inspirado nos compêndios de animais de jogos de exploração):
- **Página da esquerda:** índice numerado dos animais registrados ("13 espécies registradas • 5 mamíferos • 8 aves").
- **Página da direita:** ficha do animal escolhido, com foto, carimbo "Registrado", barrinha de ameaça e anotações "à mão".
- O caderno mostra **apenas espécies realmente registradas pelo projeto**. O campo `registrada: false` (animal como **???**) só deve ser usado se a equipe definir oficialmente espécies-alvo.

Tudo é montado pelo JavaScript a partir de `js/especies.js`.

### Registrar um animal novo
- Em `js/especies.js`, copie um bloco `{ ... }`, cole no final da lista (não esqueça a **vírgula** entre os blocos) e troque as informações.

Lembre de atualizar o número de espécies na seção **Números do Projeto** do `index.html` (`data-numero="13"`).

### Fotos dos animais
Por enquanto as fotos são **ilustrativas**, do [Wikimedia Commons](https://commons.wikimedia.org) (acervo de imagens livres). Elas são carregadas direto da internet e **exigem crédito** ao autor: por isso cada animal tem o campo `credito`, que aparece embaixo da foto na ficha.

Quando tiverem as fotos das câmeras trap:
1. Salve a foto em `imagens/especies/` (ex.: `seriema.jpg`).
2. Em `especies.js`, troque o `foto` por `"imagens/especies/seriema.jpg"`.
3. Troque o crédito por `{ autor: "Acervo Tucãtins Silvestre", licenca: "Todos os direitos reservados", link: "#" }`.

### Outras fotos
Se uma foto não for encontrada, o site mostra um quadro **"Foto em breve"** no lugar, então nada fica quebrado.

| Onde aparece | Pasta | Nomes esperados |
|---|---|---|
| Logo e ícone da aba | `imagens/` | `logo.png` |
| Galeria | `imagens/galeria/` | `campo-formoso.jpg`, `instalacao-camera.jpg`, `registro-tamandua.jpg`, `registro-seriema.jpg`, `corrego-sussuapara.jpg`, `jice-2025.jpg` |

> 📷 Prefira fotos do **próprio projeto** (câmeras trap e campo). Se usar foto de outra pessoa, peça autorização e coloque o crédito.
> 🗜️ Reduza o tamanho das fotos antes de colocar no site (ex.: [squoosh.app](https://squoosh.app)). A foto da capa tem 2,5 MB e pode ficar bem menor.

### Ativar o formulário de contato por e-mail
Em `js/script.js`, no topo, preencha:
```js
const EMAIL_CONTATO = "email-do-projeto@exemplo.com";
```
Enquanto estiver vazio, o formulário copia a mensagem e abre o Instagram.

---

## ✅ Pendências (o que falta a equipe preencher)

- [x] Logo do projeto (`imagens/logo.png`)
- [ ] Trocar as fotos ilustrativas pelas fotos das câmeras trap
- [ ] Fotos da galeria
- [ ] E-mail oficial do projeto (`EMAIL_CONTATO` em `script.js`)
- [ ] Confirmar a lista da equipe e adicionar links do Currículo Lattes
- [ ] Confirmar parcerias (ICMBio, Sertão Silvestre, Roraima Silvestre estão comentados no HTML)
- [ ] Conferir o status de ameaça das espécies na [IUCN](https://www.iucnredlist.org) e no [ICMBio/SALVE](https://salve.icmbio.gov.br)
- [ ] Atualizar números e linha do tempo a cada nova campanha de campo

---

## 📚 Fonte dos dados

Os dados de espécies, metodologia e datas vêm dos resumos do projeto apresentados na **16ª JICE – IFTO (Gurupi-TO, 2025)**:

- [Tucãtins Silvestre: conservação e ecologia de mamíferos no Cerrado](https://static.even3.com/anais/1260819.pdf)
- [Tucãtins Silvestre: conservação e ecologia de aves no Cerrado](https://static.even3.com/anais/1260777.pdf)
- [Tucãtins Silvestre: educação ambiental e conservação da biodiversidade](https://static.even3.com/anais/1260380.pdf)

---

## 🛠️ Tecnologias

- HTML5, CSS3 e JavaScript puro (sem frameworks)
- [Font Awesome](https://fontawesome.com) (ícones)
- [Google Fonts](https://fonts.google.com) – Cinzel, Poppins, IM Fell English e Caveat
- [OpenStreetMap](https://www.openstreetmap.org) (mapa)
- [Wikimedia Commons](https://commons.wikimedia.org) (fotos ilustrativas dos animais)

---

## 🤝 Apoio no desenvolvimento

O site contou com o apoio do **[Claude](https://claude.ai)**, assistente de inteligência artificial da Anthropic, como ferramenta de suporte. Ele ajudou a:

- revisar o conteúdo e alinhar o site aos dados publicados pelo projeto;
- reorganizar o código e escrever os comentários explicativos;
- criar o Caderno de Campo, a área de estudo e as novas seções;
- testar o funcionamento no computador e no celular.

As informações científicas vêm dos trabalhos da equipe, e todas as alterações foram revisadas pelos integrantes do projeto.
