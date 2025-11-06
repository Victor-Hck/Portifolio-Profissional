# Portfólio Profissional de Desenvolvedor

## Overview
Portfólio profissional com layout estilo painel administrativo desenvolvido em Next.js. O projeto apresenta um design moderno com sidebar fixa, múltiplas seções interativas, e sistema de tema dark/light mode.

## Características Principais
- **Layout de Painel**: Sidebar fixa à esquerda com navegação por ícones
- **Design Responsivo**: Layout adaptável para mobile com menu hambúrguer
- **Tema Dark/Light**: Alternância de temas com persistência
- **Animações Suaves**: Transições entre seções com Framer Motion
- **SEO Otimizado**: Metadados configurados para melhor indexação

## Seções do Portfólio
1. **Home**: Apresentação inicial com nome, cargo e links sociais
2. **Sobre Mim**: Descrição da trajetória profissional e experiências
3. **Habilidades**: Barras de progresso mostrando níveis de proficiência
4. **Projetos**: Grid de cards com projetos em destaque
5. **Contato**: Formulário funcional para mensagens

## Stack Tecnológica
- **Frontend**: Next.js 15 (App Router), React 18, TypeScript
- **Estilo**: TailwindCSS com paleta customizada (roxo/azul/cinza)
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Tema**: next-themes

## Estrutura do Projeto
```
/
├── app/
│   ├── layout.tsx          # Layout raiz com ThemeProvider
│   ├── page.tsx            # Página principal com navegação SPA
│   └── globals.css         # Estilos globais
├── components/
│   ├── Sidebar.tsx         # Menu lateral com navegação
│   ├── Footer.tsx          # Rodapé com links sociais
│   ├── ThemeProvider.tsx   # Provider de tema
│   └── sections/
│       ├── Home.tsx        # Seção inicial
│       ├── About.tsx       # Seção sobre
│       ├── Skills.tsx      # Seção habilidades
│       ├── Projects.tsx    # Seção projetos
│       └── Contact.tsx     # Seção contato
└── public/
    └── images/             # Imagens do projeto
```

## Comandos
```bash
npm install          # Instalar dependências
npm run dev          # Rodar em desenvolvimento (porta 5000)
npm run build        # Build para produção
npm start            # Rodar versão de produção
```

## Configurações Importantes
- Servidor dev configurado para porta 5000
- Imagens externas permitidas do Unsplash
- Dark mode como tema padrão
- Scroll suave habilitado globalmente

## Personalização
Para personalizar o portfólio, edite:
- **Dados pessoais**: `components/Sidebar.tsx` (nome, título)
- **Seção Home**: `components/sections/Home.tsx` (apresentação, links)
- **Sobre**: `components/sections/About.tsx` (trajetória, experiências)
- **Habilidades**: `components/sections/Skills.tsx` (tecnologias, níveis)
- **Projetos**: `components/sections/Projects.tsx` (adicionar/remover projetos)
- **Cores**: `tailwind.config.ts` (paleta de cores)

## Deploy
Projeto pronto para deploy na Vercel:
1. Conecte o repositório na Vercel
2. Configure variáveis de ambiente se necessário
3. Deploy automático a cada push

## Recent Changes
- 2025-11-06: Criação inicial do projeto com todas as seções funcionais
- Implementado sistema de navegação SPA com Framer Motion
- Adicionado suporte completo a dark/light mode
- Layout responsivo com sidebar recolhível em mobile
