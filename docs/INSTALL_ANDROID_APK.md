# Como Instalar o APK Android em um Dispositivo Real

Este guia prático mostra como instalar o arquivo `.apk` gerado no Android Studio em um celular Android físico.

---

## Pré-requisitos

- APK já gerado (ex: `app-debug.apk` ou `app-release.apk`)
- Dispositivo Android e cabo USB
- **Opção 1:** Ter o [Android Platform Tools](https://developer.android.com/tools/releases/platform-tools) instalado (inclui o comando `adb`)
- **Opção 2:** Ou transferir o APK diretamente para o celular e instalar manualmente

---

## Opção 1: Instalação via ADB (Recomendado para Desenvolvedores)

### 1. Ative a Depuração USB no Android

- Vá em **Configurações > Sobre o telefone**
- Toque várias vezes em **Número da versão** até ver "Você agora é um desenvolvedor"
- Volte em **Configurações > Sistema > Opções do desenvolvedor**
- Ative **Depuração USB**

### 2. Conecte o aparelho ao computador via USB

### 3. Confirme a conexão

No computador, abra o terminal/CMD e rode:

```bash
adb devices
```

- O dispositivo deve aparecer na lista. Aceite a permissão no celular, se solicitado.

### 4. Instale o APK

Navegue até a pasta do APK no terminal/CMD e execute:

```bash
adb install nome-do-arquivo.apk
```

Exemplo:

```bash
adb install app-debug.apk
```

- Aguarde a mensagem de sucesso. O app estará disponível na lista de aplicativos do celular.

---

## Opção 2: Instalação Manual (sem ADB)

### 1. Transfira o APK para o celular

- Use cabo USB, Google Drive, e-mail ou Bluetooth para mover o arquivo `.apk` para o aparelho.

### 2. No celular, abra um gerenciador de arquivos

- Navegue até o local do arquivo `.apk`
- Toque sobre o arquivo para instalar

### 3. Permita instalações de fontes desconhecidas

- Se solicitado, habilite a permissão para instalar apps de fontes desconhecidas

### 4. Conclua a instalação

- O app estará disponível na lista de aplicativos do celular

---

## Observações

- Para APK de produção, prefira arquivos assinados (release).
- Sempre ative a depuração USB apenas quando necessário e desative para maior segurança.
- Em caso de erro, confira se o APK é compatível com a versão do Android do dispositivo.

---

## Referências

- [Documentação oficial ADB](https://developer.android.com/studio/command-line/adb)
- [Como instalar APK manualmente](https://www.androidcentral.com/how-sideload-apps-android)
