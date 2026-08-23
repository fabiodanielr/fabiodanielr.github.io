# Fábio Rodrigues — Modern Portfolio

Website estático preparado para GitHub Pages.

## Como substituir o site atual

1. Extrai o ZIP.
2. Abre o repositório `fabiodanielr.github.io`.
3. `Add file` → `Upload files`.
4. Arrasta **index.html** e a pasta **assets**.
5. Faz `Commit changes`.
6. O GitHub Pages atualiza automaticamente.

## Design

Esta versão é deliberadamente muito mais cinematográfica:
- hero em vídeo fullscreen
- fundo escuro
- vídeos apresentados em grande
- thumbnails ocupam quase toda a largura
- player abre em fullscreen/modal
- layout editorial em desktop
- versão mobile simplificada
- secção de casamento
- about e contacto minimalistas

## Vídeo principal

O hero utiliza temporariamente este Vimeo:

`787224671`

No `index.html`, procura:

`player.vimeo.com/video/787224671`

e substitui pelo ID do vídeo/reel que quiseres usar como showreel principal.

Para melhor resultado, usa um vídeo de 30–60 segundos, sem som, com cortes rápidos e os teus melhores planos.

## Projetos

Cada projeto tem:

`data-video="vimeo:ID"`

ou

`data-video="youtube:ID"`

Exemplos:

`data-video="vimeo:679709095"`

`data-video="youtube:IGG30ogbrkc"`

Assim, basta trocar o ID para alterar o vídeo.

## Imagens

As thumbnails desta primeira versão ainda usam os endereços do teu Wix.

Antes de cancelares o Wix, o ideal é:
1. exportar/descarregar os originais;
2. colocá-los em `assets/images/`;
3. alterar os `src` no `index.html`.

## Domínio

Não é necessário mudar o domínio enquanto estás a testar.
Quando o site estiver finalizado, podes apontar `www.fabio-rodrigues.com` para o GitHub Pages.
