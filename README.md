# 🎨 Portfólio Profissional de Desenvolvedor

Um portfólio moderno e profissional com design estilo painel administrativo, desenvolvido com Next.js 15, TypeScript e TailwindCSS.

## ✨ Características

- **Design Moderno**: Layout estilo dashboard com sidebar fixa e conteúdo principal
- **Tema Dark/Light**: Alternância de temas com persistência no localStorage
- **Totalmente Responsivo**: Adaptável para desktop, tablet e mobile
- **Animações Suaves**: Transições elegantes entre seções com Framer Motion
- **Formulário Funcional**: Sistema de contato com validação e API backend
- **SEO Otimizado**: Metadados configurados para melhor indexação

## 🚀 Tecnologias

- **Frontend**: Next.js 15 (App Router), React 18, TypeScript
- **Estilo**: TailwindCSS com paleta personalizada (roxo/azul/cinza)
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Tema**: next-themes

## 📂 Estrutura do Projeto

```
/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # API route para formulário de contato
│   ├── layout.tsx              # Layout raiz com ThemeProvider
│   ├── page.tsx                # Página principal com navegação SPA
│   └── globals.css             # Estilos globais
├── components/
│   ├── Sidebar.tsx             # Menu lateral com navegação
│   ├── Footer.tsx              # Rodapé com links sociais
│   ├── ThemeProvider.tsx       # Provider de tema
│   └── sections/
│       ├── Home.tsx            # Seção inicial
│       ├── About.tsx           # Seção sobre
│       ├── Skills.tsx          # Seção habilidades
│       ├── Projects.tsx        # Seção projetos
│       └── Contact.tsx         # Seção contato
└── public/
    └── images/                 # Imagens do projeto
```

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento (porta 5000)
npm run dev

# Build para produção
npm run build

# Rodar versão de produção
npm start
```

## 🎨 Personalização

### Informações Pessoais

Edite os seguintes arquivos para personalizar com suas informações:

1. **Sidebar** (`components/Sidebar.tsx`)
   - Avatar e nome
   - Título profissional

2. **Seção Home** (`components/sections/Home.tsx`)
   - Apresentação e resumo
   - Links para redes sociais

3. **Sobre Mim** (`components/sections/About.tsx`)
   - Trajetória profissional
   - Experiências

4. **Habilidades** (`components/sections/Skills.tsx`)
   - Adicionar/remover tecnologias
   - Ajustar níveis de proficiência

5. **Projetos** (`components/sections/Projects.tsx`)
   - Adicionar seus projetos
   - Links para demo e GitHub

6. **Contato** (`components/sections/Contact.tsx`)
   - Email, telefone e localização

### Cores

Modifique as cores no arquivo `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },  // Roxo
  accent: { ... },   // Azul
}
```

## 📧 Formulário de Contato

O formulário de contato é totalmente funcional com:

- ✅ Validação de campos obrigatórios
- ✅ Validação de formato de email
- ✅ Estados de loading/success/error
- ✅ API route backend em `/api/contact`
- ✅ Mensagens de erro personalizadas

**Nota**: Atualmente, as mensagens são logadas no console do servidor. Para produção, você pode:
- Integrar com EmailJS
- Configurar SendGrid ou outro serviço de email
- Salvar mensagens em banco de dados

## 🌐 Deploy

Este projeto está pronto para deploy na Vercel:

1. Faça push do código para GitHub
2. Conecte o repositório na Vercel
3. Configure variáveis de ambiente (se necessário)
4. Deploy automático!

```bash
# Ou use o Vercel CLI
npx vercel
```

## 📱 Seções

### 1. Home
Apresentação inicial com nome, cargo, resumo e links para redes sociais.

### 2. Sobre Mim
Descrição da trajetória profissional e experiências.

### 3. Habilidades
Grid com barras de progresso mostrando níveis de proficiência em diferentes tecnologias.

### 4. Projetos
Cards com projetos em destaque incluindo:
- Imagem de preview
- Título e descrição
- Tags de tecnologias
- Links para demo e GitHub

### 5. Contato
Formulário funcional com:
- Nome, email e mensagem
- Validação em tempo real
- Feedback visual de envio
- Informações de contato alternativas

## 🎯 Funcionalidades

- ✅ Navegação SPA (sem recarregar página)
- ✅ Animações suaves com Framer Motion
- ✅ Dark/Light mode com persistência
- ✅ Layout responsivo completo
- ✅ Menu lateral recolhível em mobile
- ✅ Formulário de contato funcional
- ✅ SEO básico configurado
- ✅ Scroll suave entre seções

## 📄 Licença

Este projeto está disponível para uso pessoal e comercial.

## 🤝 Contribuições

Sinta-se à vontade para usar este portfólio como base para o seu próprio projeto!

---

Desenvolvido com ❤️ usando Next.js e TailwindCSS
