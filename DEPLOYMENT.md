# 🚀 GitHub Pages Deployment Guide

## Voraussetzungen

1. GitHub Account
2. Git installiert
3. Node.js 18.0.0 oder höher installiert
4. npm 8.0.0 oder höher installiert

## Schritt-für-Schritt Anleitung

### 1. Repository erstellen

1. Gehe zu [GitHub](https://github.com) und erstelle ein neues Repository
2. Repository-Name: `groofish`
3. Repository als **Public** erstellen (GitHub Pages funktioniert nur mit public Repositories)
4. **NICHT** README, .gitignore oder Lizenz hinzufügen (da bereits vorhanden)

### 2. Code hochladen

```bash
# Falls noch nicht geschehen, initialisiere Git
git init

# Remote Repository hinzufügen (ersetze YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/groofish.git

# Code committen und pushen
git add .
git commit -m "Initial commit: Groofish band website"
git branch -M main
git push -u origin main
```

### 3. GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (Tab)
3. Scrolle runter zu **Pages** (linke Sidebar)
4. Unter **Source** wähle **GitHub Actions**
5. Klicke **Save**

### 4. Automatisches Deployment

Das GitHub Actions Workflow wird automatisch ausgeführt:
- Bei jedem Push zum `main` Branch
- Buildet die Website automatisch
- Deployt zu GitHub Pages

### 5. Website ist live! 🎉

Deine Website ist jetzt unter `https://YOUR_USERNAME.github.io/groofish/` verfügbar.

**Hinweis**: Das erste Deployment kann 5-10 Minuten dauern.

## Troubleshooting

### Problem: 404 Error nach Deployment
- Warte 5-10 Minuten - GitHub Pages braucht Zeit zum Deployen
- Überprüfe die GitHub Actions Logs unter **Actions** Tab
- Stelle sicher, dass das Repository public ist
- Überprüfe, ob GitHub Pages auf **GitHub Actions** gesetzt ist

### Problem: Assets werden nicht geladen
- Überprüfe, ob `vite.config.js` die korrekte `base` URL hat: `base: '/groofish/'`
- Stelle sicher, dass alle Pfade relativ sind
- Überprüfe die GitHub Actions Logs für Build-Fehler

### Problem: Build Fehler
```bash
# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install

# Dann erneut deployen
npm run deploy
```

## Automatisches Deployment

Für automatisches Deployment bei jedem Push:

1. Gehe zu **Settings** → **Actions** → **General**
2. Unter **Workflow permissions** wähle **Read and write permissions**
3. Erstelle `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Nützliche Commands

```bash
# Lokal testen
npm run dev

# Produktions-Build testen
npm run build
npm run preview

# Deployen
npm run deploy

# Status prüfen
git status
git log --oneline
```

## Support

Bei Problemen:
1. Überprüfe die GitHub Actions Logs
2. Schaue in die Browser Developer Tools
3. Teste lokal mit `npm run dev`
4. Erstelle ein Issue im Repository

---

**Viel Erfolg beim Deployen! 🎵** 