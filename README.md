# Ignite Shop

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-8257E5?style=for-the-badge" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-%3E%3D24.0.0-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16.1.1-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img alt="Vercel" src="https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
 <img alt="Build Status" src="https://img.shields.io/github/actions/workflow/status/Robson16/ignite-shop/ci.yml?style=for-the-badge&label=build&logo=github&color=8257E5"/>
  <img alt="License" src="https://img.shields.io/badge/License-MIT-8257E5?style=for-the-badge" />
</p>

<p align="center">
  <img alt="Capa do projeto Ignite Shop" title="Ignite Shop" src="./cover.png" />
</p>

## Descrição

O **Ignite Shop** é uma aplicação full-stack de e-commerce que simula uma loja de camisetas, com catálogo de produtos, carrinho de compras e integração de pagamentos com a API do Stripe.

Este projeto representa uma evolução técnica significativa de sua versão original, destacando-se pela **migração completa do Next.js 12 (Pages Router) para a arquitetura mais recente do Next.js (App Router)**. Um desafio central foi a substituição da biblioteca de CSS-in-JS Stitches (descontinuada) por **Styled Components**. Para isso, foi implementado um _Style Registry_ customizado, garantindo a correta extração e hidratação dos estilos em ambiente de renderização no servidor (SSR), eliminando o _layout shift_ e assegurando uma performance de renderização otimizada.

## Tecnologias Utilizadas

- **Next.js** (App Router & Server Components)
- **React**
- **TypeScript**
- **Styled Components** (com implementação de Registry)
- **Stripe API** (Checkout & Webhooks)
- **Keen Slider** (Carrossel de produtos)

## Funcionalidades

- **Catálogo de Produtos**: Página inicial com produtos carregados via Geração de Site Estático (SSG) para máxima performance.
- **Páginas de Produto Dinâmicas**: Detalhes de cada produto gerados estaticamente no momento do build.
- **Carrinho de Compras**: Gerenciamento de estado com Context API e persistência de dados no `localStorage`.
- **Checkout com Múltiplos Itens**: Integração com a API do Stripe para criar sessões de pagamento.
- **Página de Sucesso**: Confirmação da compra renderizada no servidor, exibindo os produtos adquiridos e limpando o carrinho do cliente.

## Estrutura de Diretórios

A organização de pastas do projeto foi adaptada para o App Router, focando em escalabilidade e separação de responsabilidades:

```text
app/
├── api/                # Route Handlers para a API (ex: /api/checkout)
├── product/[id]/       # Rota dinâmica para a página de detalhes do produto
├── success/            # Rota da página de sucesso pós-compra
│   └── _components/    # Componentes de cliente específicos da rota (ex: ClearCartOnSuccess)
├── _components/        # Componentes globais e compartilhados da aplicação
├── _contexts/          # Contextos da aplicação (ex: CartContext)
├── _services/          # Configuração e inicialização de serviços (ex: Stripe)
├── _styles/            # Estilos globais e tema da aplicação
├── layout.tsx          # Layout raiz da aplicação
├── page.tsx            # Página inicial (Home)
└── providers.tsx       # Provedores de contexto para o lado do cliente
public/                 # Ativos estáticos (imagens, fontes, etc.)
```

## Começar

**Pré-requisitos:**

- Node.js 24+ e npm/yarn/pnpm
- Conta no Stripe para obter as chaves de API.

**Instalação:**

```bash
npm install
```

**Configuração:** Crie um arquivo .env.local na raiz com as seguintes chaves:

```code
STRIPE_PUBLIC_KEY=sua_chave_publica
STRIPE_PRIVATE_KEY=sua_chave_privada
NEXT_URL=http://localhost:3000
```

Execução em desenvolvimento:

```bash
npm run dev
```

Abra http://localhost:3000 no navegador.

Build para produção:

```bash
npm run build
npm start
```

## Scripts úteis

- `npm run dev` — Executa em modo desenvolvedor com Turbopack.
- `npm run build` — Compila para produção validando tipos e lint.
- `npm run lint` — Executa a verificação do ESLint.
- `npm run format` — Formata o código com Prettier.

## Layout

Protótipo e especificações do layout estão disponíveis no Figma:

<a href="https://www.figma.com/community/file/1550129859653289562" target="_blank">
  <img alt="Link para o Figma" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%23F24E1E?style=for-the-badge&logo=figma">
</a>

Abra o link para ver telas, fluxo e espaçamentos usados no projeto.

## Scripts úteis

- `npm run dev` — executa em modo desenvolvedor
- `npm run build` — compila para produção
- `npm start` — inicia o servidor de produção

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Feito com 💜 por <a href="https://github.com/Robson16/">Robson H. Rodrigues</a>
