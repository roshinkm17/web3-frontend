# Web3 Frontend Application

A modern React-based web3 frontend application built with TypeScript, featuring wallet authentication, message signing, and verification capabilities.

## 🚀 Quick Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** package manager
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   VITE_ENVIRONMENT_ID=your_dynamic_environment_id
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries
├── modules/             # Feature-based modules
├── pages/               # Page components
├── store/               # Redux store configuration
├── utils/               # Utility functions
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── App.css              # Application styles
└── index.css            # Global styles
```

### Key Directories Explained

- **`/components`** - Reusable UI components including shadcn/ui components
- **`/modules`** - Feature-based modules containing related components and logic
- **`/store`** - Redux store slices for state management
- **`/hooks`** - Custom React hooks for shared logic
- **`/utils`** - Utility functions and API communication
- **`/pages`** - Top-level page components

## 🛠️ Tools & Technologies

### Core Framework

- **React 19.1.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 7.1.2** - Build tool and dev server

### State Management

- **Redux Toolkit 2.9.0** - Predictable state container
- **React Redux 9.2.0** - React bindings for Redux

### Web3 Integration

- **Dynamic Labs SDK** - Wallet connection and authentication
  - `@dynamic-labs/sdk-react-core`
  - `@dynamic-labs/ethereum`
  - `@dynamic-labs/ethers-v6`
- **Viem 2.37.2** - Ethereum library

### UI & Styling

- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Headless UI components
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-icons`
  - `@radix-ui/react-label`
  - `@radix-ui/react-slot`
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variant management

### Development Tools

- **ESLint 9.33.0** - Code linting
- **Prettier 3.6.2** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

### HTTP Client

- **Axios 1.11.0** - HTTP client for API requests

### Additional Libraries

- **clsx** - Conditional className utility
- **tailwind-merge** - Tailwind class merging
- **input-otp** - OTP input component

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with React plugin and Tailwind
- `tsconfig.json` - TypeScript configuration with path aliases
- `eslint.config.js` - ESLint configuration with React and TypeScript rules
- `components.json` - shadcn/ui configuration
- `package.json` - Dependencies and scripts

## 🌐 Environment Variables

Create a `.env` file in the root directory with:

```env
VITE_ENVIRONMENT_ID=your_dynamic_environment_id
```

## 📝 Features

- **Wallet Authentication** - Connect with various Ethereum wallets
- **Message Signing** - Sign messages with connected wallet
- **Message Verification** - Verify signed messages
- **Message History** - View and manage message history
- **Responsive Design** - Mobile-first responsive UI
- **Type Safety** - Full TypeScript support
- **Modern UI** - Clean, accessible interface with shadcn/ui components

## 🚀 Deployment

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Preview the build**

   ```bash
   npm run preview
   ```

3. **Deploy the `dist` folder** to your preferred hosting service
