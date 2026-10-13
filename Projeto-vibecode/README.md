# musiletras

Site de letras de músicas feito em **HTML, CSS e JavaScript puro**, desenvolvido em parceria com a IA Claude (*vibecoding*). A ideia é funcionar como o vagalume.com: o videoclipe do YouTube toca de um lado e a letra da música aparece ao lado dele.

## Sobre o projeto

O tema escolhido foi um site de letras de músicas, inspirado nos sites de letras do estilo anos 2000. Escolhi esse tema porque é algo esteticamente marcante para mim, já que admirava bastante esse tipo de site, e porque parecia um desenvolvimento interessante de se produzir.

O projeto foi construído aos poucos, em uma conversa com a IA, em vez de um único prompt gigante. Os prompts usados estão documentados na seção [Processo de desenvolvimento com IA](#processo-de-desenvolvimento-com-ia).

## Funcionalidades

**Página inicial (`index.html`)**
- Topo com a logo do site e os botões **Músicas** e **Contato**.
- Link para a lista de músicas.
- Seção de **reviews** com carrossel: setas para trocar de avaliação, nota em estrelas, imagens e comentários simulando usuários do site.

**Lista de músicas (`musicas.html`)**
- Links para as páginas de cada música.

**Contato (`contato.html`)**
- Página base, criada para ser desenvolvida depois.

**Páginas de música (`musica1.html` e `musica2.html`)**
- `musica1.html`: *Boulevard of Broken Dreams*, do Green Day.
- `musica2.html`: *Californication*, do Red Hot Chili Peppers.
- Topo com três botões: **Página inicial**, **Músicas** e **Contato**.
- Botões **Letra original** (aparece primeiro ao carregar a página) e **Tradução** (troca o texto da letra).
- Vídeo do YouTube exibido a partir do link colocado na página.
- Área de informações abaixo do vídeo: imagem, nome da banda e um texto com o ano da música e o álbum.
- Imagem da capa borrada como fundo da página.

## Tecnologias

- HTML5
- CSS3 (dois arquivos: um para as páginas gerais e outro para as páginas de música)
- JavaScript puro, em um único arquivo compartilhado pelas páginas de música e outro para o carrossel
- Fontes do Google Fonts (Bricolage Grotesque e DM Sans)

O carrossel de reviews foi inspirado no projeto de Bootstrap da aula, mas foi escrito em HTML, CSS e JavaScript puro, sem depender do Bootstrap.

## Estrutura de pastas

```text
musiletras/
├── index.html
├── musicas.html
├── contato.html
├── musica1.html
├── musica2.html
├── css/
│   ├── style.css
│   └── stylemusicas.css
├── script/
│   ├── scriptmusicas.js
│   └── reviews.js
└── img/
    ├── greenday.jpg
    ├── redhot.jpg
    ├── assinante1.png
    ├── assinante2.png
    └── assinante3.png
```

## Como executar

1. Baixe e extraia o projeto, mantendo as pastas como estão.
2. Abra o `index.html` no navegador.
3. Para o vídeo do YouTube funcionar, abra o projeto por um servidor local. O YouTube pode recusar o player quando a página é aberta direto pelo arquivo. Duas opções:
   - extensão **Live Server** do VS Code;
   - `python -m http.server` na pasta do projeto, e depois acessar `http://localhost:8000`.

## Como adicionar o vídeo e a letra de uma música

- **Vídeo:** nas páginas de música, cole o link do YouTube no atributo `data-video` da div `quadro-video`, por exemplo `data-video="https://www.youtube.com/watch?v=ID_DO_VIDEO"`. O `scriptmusicas.js` converte o link no player do YouTube. Funcionam links `watch?v=`, `youtu.be/`, `embed/` e `shorts/`.
- **Letra:** cole a letra original no parágrafo `letra-original` e a tradução no parágrafo `letra-traducao`. O botão **Tradução** alterna entre os dois.

## Processo de desenvolvimento com IA

**Ferramenta e configuração:** Claude, modelo Sonnet 5.5 com desempenho alto, na versão gratuita.

Cada etapa abaixo mostra o que foi pedido e o que a IA gerou. O texto completo de cada prompt está dentro do bloco "Ver prompt".

### 1. Página inicial

O prompt gerou um HTML puro, com elementos `button` e `div`. Porém, o estilo foi incluído diretamente na página HTML, sem um CSS separado.

<details>
<summary>Ver prompt inicial</summary>

```text
Olá Claude, gostaria de produzir um projeto em html como você como vibecoding. O tema será "Site de músicas", seu nome será musiletras. Ele irá funcionar como o site vagalume.com, com um vídeo do youtube passando do lado direito da tela e, do lado esquerdo, a letra do que está sendo passado no vídeo. Gere para mim um index.html de uma página inicial e nessa página inclua: Uma div com a logo do site, um botão de músicas e um botão de contato; No body da página, inclua um link para uma página musica.html; Não precisa exagerar muito nos elementos visuais nem elementos funcionais na página, apenas comece com estes elementos ditos na página inicial.
```

</details>

### 2. Correção: CSS separado

A mudança gerou o HTML e o `style.css` em arquivos separados.

<details>
<summary>Ver prompt de correção 1</summary>

```text
Gere o css em um style.css separado, por favor.
```

</details>

### 3. Correção: topo centralizado e novas páginas

<details>
<summary>Ver prompt de correção 2</summary>

```text
Obrigado. Agora, no css, organize as divs para os elementos da class "topo", fiquem centralizados. Também crie, um html das páginas "músicas" e "contato", para desenvolvermos depois.
```

</details>

### 4. Páginas das músicas: lista de músicas

<details>
<summary>Ver prompt 1</summary>

```text
Agora em músicas.html:
Deixe as divs iguais às da página inicial, com a diferença que o botão de músicas vai levar à pagina inicial;
No escopo da página, gere dois links, um para a página da música "Boulevard of Broken dreams" e um para a música "Californication"
```

</details>

### 5. Páginas das músicas: `musica1.html`, `musica2.html` e `stylemusicas.css`

O prompt gerou as duas páginas, com a letra e o link do YouTube a serem incluídos no vídeo.

<details>
<summary>Ver prompt 2</summary>

```text
Agora, gere dois arquivos, onde cada link de musicas.html levará: "boulevard of broken dreams" levará para musica1.html; "Californication" levará para musica2.html. Os elementos das duas páginas serão praticamente iguais, além de ter a div padrão, porém, quero que inclua também 3 links em vez de dois. No caso, a div vai ficar: "Página inicial", "musicas" e "contato". Gere também um css diferente para a página de músicas, com o nome: stylemusicas.css. Faça um css básico nela.
```

</details>

### 6. Botões de letra, área de informações e layout em três seções

Este prompt gerou o HTML das páginas com a mecânica de trocar a letra, em JavaScript.

<details>
<summary>Ver prompt</summary>

```text
Agora, tanto em musica1.html quanto para musica2.html, quero que adicione os seguintes elementos:
1 botão de "letra original", que será a letra original que irá aparecer primeiro ao carregar a página
1 botão de "tradução", onde ao clicar nele, irá mudar o texto da letra para outra cadeia de texto.
uma área abaixo de onde vai aparecer o vídeo da música. Nessa área, deve ter:
uma imagem; Abaixo da imagem, o nome da banda. Abaixo do nome da banda, um pequeno texto com o ano de produção da música e de qual álbum da banda ela faz parte.
A organização da tela ficará dividida em três seções:
lado esquerdo: Botões de "letra original" e "Tradução"
meio: Área da letra da música
Lado direito: Video do youtube tocando e abaixo do vídeo, a área de informações. musica1.html terá informações da banda Green day e de sua música "Boulevard of broken dreams". musica2.html terá informações da banda Red Hot Chili Peppers e de sua música "Californication".
```

</details>

### 7. JavaScript separado

Como eu queria que o HTML fosse somente HTML puro, pedi para a IA criar um JavaScript separado, compartilhado pelas duas páginas, para fazer a troca de letras. O prompt gerou o arquivo `scriptmusicas.js`.

<details>
<summary>Ver prompt do JavaScript</summary>

```text
Obrigado. Gostaria que o javascript fosse separado dos dois html em um só, para que a mecânica fosse utilizada compartilhada entre os html
```

</details>

### 8. Teste e correção de erros

Este prompt resolveu o problema de estilo das páginas `musica1.html` e `musica2.html`, que não estavam funcionando da maneira correta.

<details>
<summary>Ver prompt de correção</summary>

```text
Realize o teste do projeto. Analise os erros e corrija-os para mim
```

</details>

### 9. Personalização: vídeo por link, reviews e fundo borrado

Neste ponto, os conhecimentos de HTML que eu domino já tinham sido completamente utilizados. Então resolvi aprender e pedir para o Claude personalizar o site conforme ele gostaria, para testar a originalidade da IA.

Pedi para ele incluir a funcionalidade de aparecer um vídeo do YouTube na página da letra das músicas e também criar uma página de reviews, inspirada na aula de Bootstrap que tive anteriormente. Também pedi que, nas páginas de música, houvesse uma imagem do álbum borrada como background do body da página.

O Claude gerou um zip com as mudanças pedidas, funcionando e como foi pedido.

<details>
<summary>Ver prompt</summary>

```text
Obrigado. Agora, faça uma funcionalidade onde, ao incluir o link do vídeo no texto, ele apareça como extensão do próprio youtube, mostrando o videoclipe disponível na plataforma.

Também gostaria que, baseado neste anexo [projeto de bootstrap], crie uma seção de "reviews" na página inicial, com setinhas para mostrar diferentes análises dos usuários. Esta seção deve ter:
A nota em estrelas
as imagens utilizadas no projeto original
uma seção de texto, simulando os comentários dos usuários sobre o site.
Por último, na parte de musica1.html e musica2.html, inclua um background da imagem da capa, modificado para ficar borrado, para servir de background na página.
```

</details>

## Reflexões

Com a última mudança, o projeto chegou à sua versão final. Senti que podia mudar mais algo no design do site, mas acabei não fazendo, por falta de ideias. Também posso ter usado conceitos muito mais avançados do que os apresentados em aula, mas o intuito do *vibecoding* se manteve.

Gostei muito de explorar o desenvolvimento em conjunto com a IA, em vez de simplesmente gerar tudo com um único prompt. Isso mostra que, usada de maneira cuidadosa, a IA pode gerar um resultado profissional.

## Observações

Este é um projeto educacional. As letras, as capas dos álbuns e os videoclipes pertencem aos seus respectivos autores.
