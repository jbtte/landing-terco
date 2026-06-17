# Terço dos Homens — Paróquia São João Paulo II

Landing page do grupo de oração **Terço dos Homens** da Paróquia São João Paulo II, Park Sul, Brasília/DF.

## Sobre

Grupo vinculado ao movimento nacional [Terço dos Homens — Mãe Rainha](https://tercodoshomens.org.br/).  
Reuniões toda **terça-feira**, após a missa das **19h30**.  
Instagram: [@thmr_terco_dos_homens_sjp2](https://www.instagram.com/thmr_terco_dos_homens_sjp2)

## Estrutura

```
landing-terco/
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── img/
        └── hero.jpg
```

## Tecnologias

- HTML5 / CSS3 / JavaScript puro (sem frameworks)
- Fontes: [Cinzel](https://fonts.google.com/specimen/Cinzel) + [Montserrat](https://fonts.google.com/specimen/Montserrat) via Google Fonts

## Funcionalidades

- **Hero section** em tela cheia com foto de fundo
- **Carrossel de citações** com 11 frases de santos e papas sobre o Rosário — troca automática a cada 10s, com swipe para mobile
- **Seção Quem Somos** com cards de horário e localização linkados ao Google Maps
- **Seção Venha Rezar** com link direto para o Instagram
- Layout totalmente **responsivo** (mobile-first)

## Publicação no GitHub Pages

1. Crie um repositório no GitHub (ex: `terco-dos-homens`)
2. Suba os arquivos:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/terco-dos-homens.git
   git push -u origin main
   ```
3. No repositório, vá em **Settings → Pages**
4. Em *Source*, selecione a branch `main` e a pasta `/ (root)`
5. Salve — a página estará disponível em `https://SEU_USUARIO.github.io/terco-dos-homens/`

## Manutenção

| O que alterar | Onde |
|---|---|
| Textos e estrutura | `index.html` |
| Cores, fontes, espaçamentos | `assets/css/style.css` |
| Carrossel e animações | `assets/js/main.js` |
| Foto hero | `assets/img/hero.jpg` |
| Intervalo do carrossel | `main.js` → `AUTO_DELAY` (em milissegundos) |
