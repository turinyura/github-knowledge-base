
[🏠 Главная](../README.md) / [📚 Основы](README.md) / Настройка окружения

# ⚙️ Настройка окружения

Перед началом работы с Git и GitHub необходимо правильно настроить локальное окружение. Это обеспечит корректную идентификацию ваших изменений и безопасное соединение с удаленным репозиторием.

## 1. Установка Git

### Windows
Скачайте установщик с официального сайта [git-scm.com](https://git-scm.com/download/win) и следуйте инструкциям мастера установки. Рекомендуется оставить настройки по умолчанию.

### macOS
Если у вас установлен Homebrew, выполните в терминале:
```bash
brew install git
```
Или скачайте установщик с [git-scm.com](https://git-scm.com/download/mac).

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install git
```

## 2. Базовая конфигурация пользователя

Git должен знать, кто делает коммиты. Укажите имя и email, которые будут ассоциированы с вашими изменениями. **Используйте тот же email, что и в аккаунте GitHub.**

```bash
git config --global user.name "Ваше Имя"
git config --global user.email "your.email@example.com"
```

Проверка настроек:
```bash
git config --list
```

## 3. Настройка SSH для GitHub

Использование SSH позволяет подключаться к GitHub без ввода пароля при каждом пуше.

### Генерация ключа
Выполните команду (замените email на свой):
```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```
Нажимайте `Enter`, соглашаясь с путем сохранения по умолчанию.

### Добавление ключа в агент SSH
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### Добавление ключа в GitHub
1. Скопируйте содержимое публичного ключа:
   - **Windows (PowerShell):** `cat ~/.ssh/id_ed25519.pub | clip`
   - **macOS:** `pbcopy < ~/.ssh/id_ed25519.pub`
   - **Linux:** `xclip -sel clip < ~/.ssh/id_ed25519.pub` (или просто выведите содержимое через `cat`)
2. Перейдите в настройки GitHub: **Settings** → **SSH and GPG keys** → **New SSH key**.
3. Вставьте ключ и сохраните.

### Проверка соединения
```bash
ssh -T git@github.com
```
Вы должны увидеть сообщение: `Hi username! You've successfully authenticated...`

## 4. Рекомендуемые глобальные настройки

Для удобства работы и соответствия современным стандартам рекомендуется выполнить следующие команды:

**Установка ветки по умолчанию в `main`:**
```bash
git config --global init.defaultBranch main
```

**Настройка редактора кода (например, VS Code):**
```bash
git config --global core.editor "code --wait"
```

**Автоматическая расцветка вывода:**
```bash
git config --global color.ui true
```

## 5. Проверка готовности

Убедитесь, что Git установлен и настроен:
```bash
git --version
```

Теперь ваше окружение готово к работе! Вы можете клонировать репозитории и создавать свои проекты.

---
**Следующий шаг:** [Изучение терминологии](terminology.md) или переход к [Рабочему процессу](../02_Workflow/README.md).
