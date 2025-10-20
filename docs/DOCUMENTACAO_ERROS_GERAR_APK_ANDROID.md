# Documentação de Solução de Erros de Build Android - Ionic/Capacitor

Este guia reúne os principais erros enfrentados ao compilar projetos Ionic/Capacitor para Android e detalha os passos para corrigir cada um, especialmente relacionados à configuração do Android SDK.

---

## Erro mais comum: **SDK location not found**

**Mensagem de erro:**
```
SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in your project's local properties file at '.../android/local.properties'.
```

---

## Passo a Passo para Solucionar

### 1. Descubra o Caminho do Android SDK

- **Linux/Mac:** geralmente está em `~/Android/Sdk`
- **Windows:** geralmente está em `C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk`

**Como encontrar no Android Studio:**
1. Abra o Android Studio.
2. Vá em **File > Settings > Appearance & Behavior > System Settings > Android SDK**.
3. O caminho do SDK estará indicado no topo da tela.

---

### 2. Criar ou Editar o Arquivo `local.properties`

#### **A) Criando a pasta e arquivo**

1. Acesse a raiz do seu projeto Ionic/Capacitor.
2. Navegue até a pasta `android/`:
    - Se não existir, crie manualmente:
      ```sh
      mkdir -p android
      ```
3. Dentro de `android/`, verifique se existe o arquivo `local.properties`:
    - Se não existir, crie com o comando:
      ```sh
      touch android/local.properties
      ```

#### **B) Editando o arquivo**

4. Abra o arquivo `android/local.properties` em seu editor de texto.
5. Adicione a seguinte linha (ajuste o caminho conforme seu sistema):

   - **Linux/Mac:**
     ```
     sdk.dir=/home/seu_usuario/Android/Sdk
     ```
   - **Windows:**
     ```
     sdk.dir=C:\\Users\\SEU_USUARIO\\AppData\\Local\\Android\\Sdk
     ```

6. Salve o arquivo.

---

### 3. Alternativa: Variável de Ambiente ANDROID_HOME

Se preferir, você pode configurar a variável de ambiente:

- **Linux/Mac:**
  ```sh
  export ANDROID_HOME=$HOME/Android/Sdk
  export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools
  ```
  (Adicione ao `.bashrc` ou `.zshrc` para tornar permanente)

- **Windows (cmd):**
  ```bat
  set ANDROID_HOME=C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk
  set PATH=%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools
  ```

---

### 4. Tente compilar novamente

- No Android Studio: **Build > Make Project**
- Ou em terminal:
  ```sh
  npx cap open android
  ```

---

## Outros Erros Relacionados

### **Erro: Could not find the web assets directory: ./build**
**Solução:**  
Verifique se o arquivo `capacitor.config.ts` (ou `capacitor.config.json`) tem o campo `webDir` apontando para a pasta correta (`build`, `dist` ou `www`).
- Rode no terminal:
  ```sh
  npm run build
  npx cap sync android
  ```

---

### **Erro: Android Studio not found**
**Solução:**  
Configure a variável de ambiente para o executável do Android Studio:
- **Linux/Mac:**
  ```sh
  export CAPACITOR_ANDROID_STUDIO_PATH="/opt/android-studio/bin/studio.sh"
  ```
- **Windows:**
  ```bat
  set CAPACITOR_ANDROID_STUDIO_PATH="C:\Program Files\Android\Android Studio\bin\studio.exe"
  ```

---

## Checklist final

- [ ] Caminho do Android SDK confirmado
- [ ] Arquivo `android/local.properties` criado com `sdk.dir` correto
- [ ] Variável de ambiente `ANDROID_HOME` configurada (opcional)
- [ ] Build web gerado com `npm run build`
- [ ] Sincronização feita com `npx cap sync android`
- [ ] Projeto aberto e compilado no Android Studio

---

**Se continuar com problemas, envie a mensagem de erro completa para análise!**