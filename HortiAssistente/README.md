# 🌿 HortiAssistente

![Ionic](https://img.shields.io/badge/Ionic-8.7.5-3880FF?style=flat&logo=ionic)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=flat&logo=vite)
![Capacitor](https://img.shields.io/badge/Capacitor-7.4.3-119EFF?style=flat&logo=capacitor)

**HortiAssistente** é um aplicativo móvel desenvolvido com Ionic React para facilitar a compra e venda de produtos.
O app oferece uma experiência moderna e intuitiva para conectar consumidores a produtos.

## Funcionalidades

- **Home** - Visualização de produtos em destaque e ofertas
- **Busca** - Sistema de busca de produtos
- **Favoritos** - Liste seus produtos preferidos
- **Carrinho** - Gerenciamento de compras
- **Perfil** - Gerenciamento de conta do usuário
- **Responsivo** - Interface adaptável para diferentes dispositivos
- **Dark Mode** - Suporte a tema escuro automático do sistema

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[Ionic Framework](https://ionicframework.com/)** - Framework para desenvolvimento de apps híbridos
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool rápido e moderno
- **[Capacitor](https://capacitorjs.com/)** - Runtime nativo para apps web
- **[React Router](https://reactrouter.com/)** - Gerenciamento de rotas
- **[Ionicons](https://ionic.io/ionicons)** - Biblioteca de ícones
- **[Cypress](https://www.cypress.io/)** - Framework de testes E2E
- **[Vitest](https://vitest.dev/)** - Framework de testes unitários

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (versão 18 ou superior)
- **[npm](https://www.npmjs.com/)** (geralmente instalado com o Node.js)
- **[Git](https://git-scm.com/)** (para clonar o repositório)

### Verificar instalações

```bash
node --version
npm --version
git --version
```

## Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/Andershowww/IonicAPP.git
cd IonicAPP/HortiAssistente
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em **`http://localhost:5173`**

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria a build de produção (TypeScript + Vite) |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run test.unit` | Executa testes unitários com Vitest |
| `npm run test.e2e` | Executa testes E2E com Cypress |
| `npm run lint` | Verifica erros de código com ESLint |

## Executar em Dispositivos Móveis

### Android

1. Sincronize o projeto com Capacitor:

```bash
npx cap sync android
```

2.Abra no Android Studio:

```bash
npx cap open android
```

3.Execute o app no emulador ou dispositivo conectado

### iOS (apenas macOS)

1. Sincronize o projeto com Capacitor:

```bash
npx cap sync ios
```

2.Abra no Xcode:

```bash
npx cap open ios
```

3.Execute o app no simulador ou dispositivo conectado

## Estrutura do Projeto

```bash

HortiAssistente/
├── public/              # Arquivos públicos estáticos
│   └── manifest.json    # Manifest da aplicação
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── CategoryList.tsx
│   │   ├── OfferBanner.tsx
│   │   └── ProductCard.tsx
│   ├── pages/           # Páginas da aplicação
│   │   ├── Home.tsx
│   │   ├── Search.tsx
│   │   ├── Favourite.tsx
│   │   ├── Menu.tsx
│   │   ├── Profile.tsx
│   │   ├── ProductDetail.tsx
│   │   └── MainTabs.tsx
│   ├── theme/           # Tema e variáveis CSS
│   │   └── variables.css
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada
│   └── setupTests.ts    # Configuração de testes
├── cypress/             # Testes E2E
├── capacitor.config.ts  # Configuração do Capacitor
├── vite.config.ts       # Configuração do Vite
├── tsconfig.json        # Configuração do TypeScript
└── package.json         # Dependências e scripts
```

## Testes

### Testes Unitários

```bash
npm run test.unit
```

### Testes E2E

```bash
npm run test.e2e
```

## Personalização

### Tema

O tema da aplicação pode ser personalizado editando o arquivo:

```bash
src/theme/variables.css
```

### Dark Mode

O modo escuro está configurado para seguir as preferências do sistema. Para forçar sempre dark mode, edite `src/App.tsx` e descomente:

```typescript
import '@ionic/react/css/palettes/dark.always.css';
```

## Resolução de Problemas

### Erro ao instalar dependências

```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Erro ao executar no dispositivo

```bash
# Reconstrua as plataformas nativas
npx cap sync
```

### Porta 5173 já em uso

```bash
# O Vite escolherá automaticamente outra porta
# Ou especifique uma porta diferente em vite.config.ts
```

## Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Anderson** - [GitHub](https://github.com/Andershowww)
