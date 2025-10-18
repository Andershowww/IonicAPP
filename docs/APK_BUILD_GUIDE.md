# Guia Prático para Gerar APK do Projeto IonicAPP (Android)

Este documento resume os passos e pré-requisitos para gerar e instalar o arquivo `.APK` do projeto [IonicAPP](https://github.com/Andershowww/IonicAPP) em dispositivos Android físicos ou emuladores, com foco exclusivo em Android (Capacitor/Ionic).

---

## Pré-requisitos

- **Node.js** e **npm** instalados (recomendado Node.js versão 20 ou superior).
- **Ionic CLI** instalado globalmente:

  ```bash
  npm install -g @ionic/cli
  ```

- **Android Studio** instalado (Windows/Linux/Mac), incluindo:
  - Android SDK - (ou sua IDE de preferencia)
  - Ferramentas de build do Gradle
  - Java JDK 11 ou superior
- **Capacitor** já integrado ao projeto (presente nas dependências)

---

## Passos para Gerar o APK

### 1. Instale as dependências do projeto

No terminal, na raiz do projeto, rode:

```bash
npm install
```

### 2. Build do aplicativo Ionic

```bash
ionic build
```

> Isso irá gerar os arquivos finais do app na pasta `www` (padrão Capacitor).

### 3. Sincronize com o Capacitor

```bash
npx cap sync
```

### 4. Abra o projeto Android no Android Studio

- Abra o **Android Studio** manualmente (pelo menu ou atalho).
- Selecione **Open** ou **Open an existing project**.
- Navegue até a pasta `/android` do projeto e abra.

### 5. Aguarde o Gradle Sync

- Deixe o Android Studio sincronizar e indexar o projeto.

### 6. Gere o APK

No Android Studio:

- Menu **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
- Aguarde a conclusão e clique em **locate** para abrir a pasta do APK.

**Local padrão do APK gerado:**

```bash
android/app/build/outputs/apk/debug/app-debug.apk
```

Para APK de produção (release):

```bash
android/app/build/outputs/apk/release/app-release.apk
```

---

## 2. Como configurar as variáveis de ambiente

### **ANDROID_HOME**

- Certifique-se de que a variável `ANDROID_HOME` está configurada e aponta para a pasta do Android SDK.
  - Windows: Normalmente em `C:\Users\<seu-user>\AppData\Local\Android\Sdk`
  - Linux/Mac: Normalmente em `$HOME/Android/Sdk`
- Também inclua as ferramentas do SDK no `PATH`:
  - Windows: Adicione `platform-tools` e `tools` ao PATH do sistema.
  - Linux/Mac: Adicione ao arquivo `.bashrc` ou `.zshrc`.

### **CAPACITOR_ANDROID_STUDIO_PATH**

- Se necessário, configure a variável para o executável do Android Studio:
  - Windows: `C:\Program Files\Android\Android Studio\bin\studio.exe`
  - Linux: `/opt/android-studio/bin/studio.sh` (evite Snap para automação)
- No geral, abrir o Android Studio manualmente funciona em todos os sistemas.

---

## 3. Observações importantes

- **Sempre abra apenas a pasta `/android` no Android Studio, não a raiz do projeto.**
- O comando `npx cap open android` pode não funcionar corretamente em instalações via Snap ou em alguns ambientes Windows; abrir o Android Studio manualmente é mais confiável.
- O APK de debug é suficiente para testes; para produção, use o menu **Generate Signed Bundle / APK** e configure um keystore.
- Após o build, o APK está pronto para ser instalado via ADB ou transferido para o dispositivo.
- Para instalar via ADB:

  ```bash
  adb install app-debug.apk
  ```

- Certifique-se de ativar a **Depuração USB** no dispositivo físico.
- Em ambientes Windows, utilize o terminal do Android Studio ou o CMD para rodar comandos ADB.

---

## Referências

- [Documentação Oficial Capacitor Android](https://capacitorjs.com/docs/v5/android)
- [Documentação Oficial Ionic](https://ionicframework.com/docs)
- [Documentação Android Studio](https://developer.android.com/studio)
