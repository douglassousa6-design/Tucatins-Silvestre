/* ==========================================================
   TUCÃTINS SILVESTRE — CADERNO DE CAMPO (LISTA DE ESPÉCIES)
   ==========================================================

   O QUE É ESTE ARQUIVO?
   Aqui ficam os DADOS de cada animal do "Caderno de Campo".
   O arquivo script.js lê esta lista e monta o caderno
   automaticamente: o índice (página da esquerda) e a ficha
   de cada animal (página da direita).

   IMPORTANTE: SÓ DADOS REAIS
   Este caderno mostra apenas animais que o projeto REALMENTE
   registrou (evidências publicadas). Não coloque aqui espécies
   que a equipe ainda não flagrou.

   O CAMPO "registrada"
   Todos os animais atuais têm  registrada: true.
   O código também aceita  registrada: false  (o animal aparece
   como "???" com o carimbo "Não registrado"). Use isso SOMENTE
   se a equipe definir oficialmente uma lista de espécies-alvo
   para as próximas campanhas de campo.

   O QUE É UM "ARRAY DE OBJETOS"?
   - Os colchetes [ ] criam uma LISTA (array).
   - Cada par de chaves { } é um OBJETO: uma "ficha" com
     várias informações (nome, grupo, local...).
   - Cada informação tem um NOME (chave) e um VALOR:
       nome: "Seriema"
   - Os objetos são separados por VÍRGULA.

   SIGNIFICADO DE CADA CAMPO
   nome        -> nome popular
   cientifico  -> nome científico (aparece em itálico)
   grupo       -> "mamifero" ou "ave" (usado nos filtros)
   registrada  -> true (registrada pelo projeto)
   locais      -> lista com "formoso" e/ou "palmas"
   status      -> nível de ameaça, de 1 a 5 (preenche a barrinha de risco):
                    1 = Pouco preocupante   2 = Quase ameaçada
                    3 = Vulnerável          4 = Em perigo
                    5 = Criticamente em perigo
   statusTexto -> texto que aparece ao lado da barrinha
   resumo      -> nota curta sobre o animal
   funcao      -> importância ecológica (o "papel" dele na natureza)
   foto        -> endereço da foto
   credito     -> autor e licença da foto (OBRIGATÓRIO em fotos de outras pessoas!)

   SOBRE AS FOTOS
   Por enquanto usamos fotos ILUSTRATIVAS do Wikimedia Commons,
   um acervo de imagens livres. Elas podem ser usadas desde que
   o autor e a licença sejam citados (por isso o campo "credito").
   Quando o projeto tiver as fotos das câmeras trap:
     1. salve a foto em imagens/especies/ (ex.: seriema.jpg)
     2. troque o campo foto por "imagens/especies/seriema.jpg"
     3. troque o crédito por { autor: "Acervo Tucãtins Silvestre" }

   FONTE DOS DADOS
   Espécies registradas: resumos do projeto na 16ª JICE (IFTO, Gurupi-TO, 2025).
   Status de ameaça: IUCN. Confira sempre em https://www.iucnredlist.org
   e na lista brasileira do ICMBio (https://salve.icmbio.gov.br).
   ========================================================== */

const especies = [

    /* ============== MAMÍFEROS REGISTRADOS ============== */

    {
        nome: "Tamanduá-bandeira",
        cientifico: "Myrmecophaga tridactyla",
        grupo: "mamifero",
        registrada: true,
        locais: ["formoso"],
        status: 3,
        statusTexto: "Vulnerável",
        resumo: "Flagrado nos fragmentos de Cerrado de Formoso do Araguaia. É o registro mais importante do projeto: uma espécie ameaçada vivendo em pedaços de mata cercados por lavouras.",
        funcao: "Come formigas e cupins e ajuda a controlar essas populações, mantendo o equilíbrio do ecossistema.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Myresluger2.jpg",
        credito: { autor: "Malene Thyssen", licenca: "CC BY-SA 3.0", link: "https://commons.wikimedia.org/wiki/File:Myresluger2.jpg" }
    },

    {
        nome: "Veado-catingueiro",
        cientifico: "Subulo gouazoubira",
        grupo: "mamifero",
        registrada: true,
        locais: ["formoso"],
        status: 1,
        statusTexto: "Pouco preocupante",
        resumo: "Cervídeo de pequeno porte, registrado nos fragmentos de vegetação nativa em meio a áreas agrícolas. Nome científico antigo: Mazama gouazoubira.",
        funcao: "Ao comer frutos, espalha sementes e ajuda a vegetação a se regenerar.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Brocket_deer_Mazama_gouazoubira_Santa_fe_do_Sul_1.jpg/500px-Brocket_deer_Mazama_gouazoubira_Santa_fe_do_Sul_1.jpg",
        credito: { autor: "Miguelrangeljr", licenca: "CC BY-SA 4.0", link: "https://commons.wikimedia.org/wiki/File:Brocket_deer_Mazama_gouazoubira_Santa_fe_do_Sul_1.jpg" }
    },

    {
        nome: "Cachorro-do-mato",
        cientifico: "Cerdocyon thous",
        grupo: "mamifero",
        registrada: true,
        locais: ["palmas"],
        status: 1,
        statusTexto: "Pouco preocupante",
        resumo: "Canídeo silvestre que consegue viver perto das cidades, registrado na mata ciliar do Córrego Sussuapara.",
        funcao: "Tem alimentação variada (frutos, insetos, pequenos animais) e atua na dispersão de sementes.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Crab-eating_Fox_(cropped).JPG/500px-Crab-eating_Fox_(cropped).JPG",
        credito: { autor: "birdphotos.com", licenca: "CC BY 3.0", link: "https://commons.wikimedia.org/wiki/File:Crab-eating_Fox_(cropped).JPG" }
    },

    {
        nome: "Cutia",
        cientifico: "Dasyprocta prymnolopha",
        grupo: "mamifero",
        registrada: true,
        locais: ["palmas"],
        status: 1,
        statusTexto: "Pouco preocupante",
        resumo: "Roedor que vive no chão da mata, registrado em área urbana de Palmas.",
        funcao: "Enterra sementes para comer depois. As que ela esquece germinam e viram novas árvores.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dasyprocta_prymnolopha.jpg/500px-Dasyprocta_prymnolopha.jpg",
        credito: { autor: "Jik jik", licenca: "CC BY-SA 3.0", link: "https://commons.wikimedia.org/wiki/File:Dasyprocta_prymnolopha.jpg" }
    },

    {
        nome: "Gambá-comum",
        cientifico: "Didelphis marsupialis",
        grupo: "mamifero",
        registrada: true,
        locais: ["palmas"],
        status: 1,
        statusTexto: "Pouco preocupante",
        resumo: "Marsupial muito adaptável, comum também perto de casas e quintais.",
        funcao: "Come frutos, insetos e pequenos animais; dispersa sementes e ajuda no controle natural de pragas.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/2/25/Rabipelao2.jpg",
        credito: { autor: "Juan Tello / WolfmanSF", licenca: "CC BY 2.0", link: "https://commons.wikimedia.org/wiki/File:Rabipelao2.jpg" }
    },

    /* ================ AVES REGISTRADAS ================ */

    {
        nome: "Seriema",
        cientifico: "Cariama cristata",
        grupo: "ave",
        registrada: true,
        locais: ["formoso"],
        status: 1,
        statusTexto: "Pouco preocupante",
        resumo: "Ave típica de campos e áreas abertas do Cerrado, conhecida pelo canto alto que se ouve de longe.",
        funcao: "Caça insetos, pequenos répteis e roedores, ajudando a controlar essas populações.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/174_Red-legged_seriema_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg/500px-174_Red-legged_seriema_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg",
        credito: { autor: "Giles Laurent", licenca: "CC BY-SA 4.0", link: "https://commons.wikimedia.org/wiki/File:174_Red-legged_seriema_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg" }
    },

    {
        nome: "Jacupemba",
        cientifico: "Penelope superciliaris",
        grupo: "ave",
        registrada: true,
        locais: ["formoso", "palmas"],
        status: 2,
        statusTexto: "Quase ameaçada (segundo o resumo do projeto)",
        resumo: "A única ave registrada nas duas áreas de estudo, mostrando que se adapta a ambientes diferentes.",
        funcao: "Come muitos frutos e é uma importante dispersora de sementes. Sofre com a caça e a perda de mata.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Penelope_superciliaris-2.JPG/500px-Penelope_superciliaris-2.JPG",
        credito: { autor: "Zimbres", licenca: "CC BY-SA 2.5", link: "https://commons.wikimedia.org/wiki/File:Penelope_superciliaris-2.JPG" }
    },

    {
        nome: "Juriti-pupu",
        cientifico: "Leptotila verreauxi",
        grupo: "ave",
        registrada: true,
        locais: ["palmas"],
        status: 1,
        statusTexto: "Pouco preocupante",
        resumo: "Pomba que anda pelo chão da mata procurando alimento.",
        funcao: "Alimenta-se de sementes e frutos caídos.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/White-tipped_Dove_-_Panama_H8O8470.jpg/500px-White-tipped_Dove_-_Panama_H8O8470.jpg",
        credito: { autor: "Francesco Veronesi", licenca: "CC BY-SA 2.0", link: "https://commons.wikimedia.org/wiki/File:White-tipped_Dove_-_Panama_H8O8470.jpg" }
    },

    {
        nome: "Coró-coró",
        cientifico: "Mesembrinibis cayennensis",
        grupo: "ave",
        registrada: true,
        locais: ["palmas"],
        status: 1,
        statusTexto: "Pouco preocupante",
        resumo: "Ave de bico longo e curvo que vive perto de córregos e matas ciliares.",
        funcao: "Procura minhocas e outros invertebrados no solo úmido. Sua presença indica ambientes ligados à água.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/180_Green_ibis_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg/500px-180_Green_ibis_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg",
        credito: { autor: "Giles Laurent", licenca: "CC BY-SA 4.0", link: "https://commons.wikimedia.org/wiki/File:180_Green_ibis_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg" }
    },

    {
        nome: "Pomba-asa-branca",
        cientifico: "Patagioenas picazuro",
        grupo: "ave",
        registrada: true,
        locais: ["palmas"],
        status: 1,
        statusTexto: "Pouco preocupante",
        resumo: "Pomba grande com uma faixa branca na asa, comum no Cerrado.",
        funcao: "Alimenta-se de sementes e frutos.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Patagioenas_picazuro_-Buenos_Aires,_Argentina-8-4c.jpg/500px-Patagioenas_picazuro_-Buenos_Aires,_Argentina-8-4c.jpg",
        credito: { autor: "dfaulder / Snowmanradio", licenca: "CC BY 2.0", link: "https://commons.wikimedia.org/wiki/File:Patagioenas_picazuro_-Buenos_Aires,_Argentina-8-4c.jpg" }
    },

    {
        nome: "Inhambu-chororó",
        cientifico: "Crypturellus parvirostris",
        grupo: "ave",
        registrada: true,
        locais: ["palmas"],
        status: 1,
        statusTexto: "Pouco preocupante",
        resumo: "Ave que vive no chão, difícil de ver, mas fácil de ouvir pelo canto.",
        funcao: "Come sementes e pequenos insetos encontrados no solo.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/6/67/Crypturellus_parvirostris_2.jpg",
        credito: { autor: "Dario Sanches", licenca: "CC BY-SA 2.0", link: "https://commons.wikimedia.org/wiki/File:Crypturellus_parvirostris_2.jpg" }
    },

    {
        nome: "Bem-te-vi",
        cientifico: "Pitangus sulphuratus",
        grupo: "ave",
        registrada: true,
        locais: ["palmas"],
        status: 1,
        statusTexto: "Pouco preocupante",
        resumo: "Uma das aves mais conhecidas do Brasil, de peito amarelo e canto que lembra o próprio nome.",
        funcao: "Come muitos insetos e ajuda no controle natural deles.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Great_kiskadee_(70240).jpg/500px-Great_kiskadee_(70240).jpg",
        credito: { autor: "Rhododendrites", licenca: "CC BY-SA 4.0", link: "https://commons.wikimedia.org/wiki/File:Great_kiskadee_(70240).jpg" }
    },

    {
        nome: "Alma-de-gato",
        cientifico: "Piaya cayana",
        grupo: "ave",
        registrada: true,
        locais: ["palmas"],
        status: 1,
        statusTexto: "Pouco preocupante",
        resumo: "Ave de cauda longa e cor de canela que pula entre os galhos.",
        funcao: "Come lagartas e insetos grandes, inclusive algumas pragas de plantas.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Squirrel_cuckoo_(Piaya_cayana_mesura)_Sumaco.jpg/500px-Squirrel_cuckoo_(Piaya_cayana_mesura)_Sumaco.jpg",
        credito: { autor: "Charles J. Sharp", licenca: "CC BY-SA 4.0", link: "https://commons.wikimedia.org/wiki/File:Squirrel_cuckoo_(Piaya_cayana_mesura)_Sumaco.jpg" }
    }

    /* PARA ADICIONAR UM NOVO ANIMAL:
       1. Coloque uma vírgula depois do último } acima.
       2. Copie um bloco { ... } inteiro e cole aqui.
       3. Troque as informações (lembre do crédito da foto!).
       4. Atualize o número de espécies na seção "Números do Projeto" do index.html. */
];
