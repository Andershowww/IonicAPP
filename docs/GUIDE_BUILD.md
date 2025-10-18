# Android Project - Version Control Guide and Build

## Arquivos de Configuração Essenciais

- `build.gradle` (root) - Configuração principal do projeto
- `app/build.gradle` - Configuração específica do módulo app
- `settings.gradle` - Configuração dos módulos
- `gradle.properties` - Propriedades do Gradle
- `variables.gradle` - Variáveis de versão (SDK, etc.)
- `capacitor.settings.gradle` - Configuração dos plugins Capacitor

### Recursos da Aplicação

- `app/src/main/AndroidManifest.xml` - Manifesto da aplicação
- `app/src/main/res/` - Todos os recursos (layouts, strings, ícones, etc.)
  - `values/strings.xml` - Strings da aplicação
  - `mipmap-*/` - Ícones do launcher
  - `drawable-*/` - Imagens e recursos gráficos
  - `layout/` - Arquivos de layout XML
- `app/src/main/java/` - Código Java/Kotlin nativo (se houver)

### Ferramentas e Scripts

- `gradlew` e `gradlew.bat` - Scripts do Gradle Wrapper
- `gradle/wrapper/gradle-wrapper.properties` - Configuração do wrapper

### Configurações do Projeto

- `.gitignore` - Regras de versionamento
- `proguard-rules.pro` - Regras de ofuscação

## Comandos

### Para desenvolvimento

```bash
# Sincronizar com Capacitor
npx cap sync android

# Abrir no Android Studio
npx cap open android

# Build de debug
./gradlew assembleDebug

# Build de release
./gradlew assembleRelease
```

### Para limpar builds

```bash
# Limpar builds
./gradlew clean

# Limpar cache do Gradle
./gradlew cleanBuildCache
```

## Checklist de Versionamento

- [ ] `build.gradle` files estão versionados
- [ ] `AndroidManifest.xml` está versionado
- [ ] Recursos em `res/` estão versionados
- [ ] Gradle wrapper está versionado
- [ ] `.gitignore` está configurado corretamente
- [ ] Arquivos de build estão ignorados
- [ ] Assets gerados estão ignorados
- [ ] Configurações locais estão ignoradas

## Boas Práticas

1. **Sempre use o Gradle Wrapper** (`gradlew`) ao invés do Gradle global
2. **Mantenha as versões do SDK consistentes** no `variables.gradle`
3. **Versione apenas código fonte e configurações** - não builds
4. **Use branches separadas** para mudanças nativas significativas
5. **Teste builds em diferentes máquinas** após mudanças

## 🔍 Troubleshooting

### Build falhando após checkout

```bash
# Limpar e reconstruir
./gradlew clean
npx cap sync android
./gradlew assembleDebug
```

### Problemas com Capacitor

```bash
# Re-sincronizar completamente
rm -rf android/
npx cap add android
npx cap sync android
```

## ATENÇÃO O QUE NÃO DEVE SER VERSIONADO

### Arquivos Gerados Automaticamente

- `build/` - Diretório de build completo
- `.gradle/` - Cache e arquivos temporários do Gradle
- `app/build/` - Build específico do módulo app
- `capacitor-cordova-android-plugins/` - Plugins gerados pelo Capacitor

### Assets Web (Gerados pelo Capacitor)

- `app/src/main/assets/public/` - Assets web copiados
- `app/src/main/assets/capacitor.config.json` - Config gerada
- `app/src/main/assets/capacitor.plugins.json` - Plugins gerados

### Configurações Locais

- `local.properties` - Caminhos locais do SDK
- Arquivos de keystore (`.jks`, `.keystore`)

### IDE e Sistema

- `.idea/` - Configurações do Android Studio
- `*.iml` - Arquivos de módulo IntelliJ
- Arquivos temporários e de cache
