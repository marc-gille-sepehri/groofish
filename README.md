# Groofish - Band Website

Eine moderne, responsive Website für die deutsche Pop-Funk-Jazz Band **Groofish**.

## 🎵 Über Groofish

Groofish ist eine aufstrebende Band aus Deutschland, die die Grenzen zwischen Pop, Funk und Jazz sprengt. Mit ihrer einzigartigen Mischung aus catchy Melodien, funky Basslines und jazzigen Soli schaffen sie einen Sound, der sowohl Ohrwurm als auch musikalische Tiefe bietet.

## 🚀 Features

- **Modernes Design**: Elegante UI mit Gradienten und Animationen
- **Vollständig Responsive**: Optimiert für alle Geräte
- **Smooth Animations**: Framer Motion für flüssige Übergänge
- **Deutsche Lokalisierung**: Vollständig auf Deutsch
- **SEO Optimiert**: Meta-Tags und semantisches HTML
- **GitHub Pages Ready**: Einfache Deployment-Konfiguration

## 🛠️ Technologien

- **React 19** - Moderne React mit Hooks
- **Vite 4.5** - Schneller Build-Tool (kompatibel mit Node.js 18+)
- **Framer Motion** - Animationen und Übergänge
- **Lucide React** - Moderne Icons
- **CSS3** - Moderne Styling mit CSS Variables
- **GitHub Pages** - Hosting

## 📋 Voraussetzungen

- **Node.js** 18.0.0 oder höher
- **npm** 8.0.0 oder höher

## 📦 Installation

1. Repository klonen:
```bash
git clone https://github.com/yourusername/groofish.git
cd groofish
```

2. Dependencies installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

Die Website ist dann unter `http://localhost:5173` verfügbar.

## 🎨 Anpassungen

### Logo hinzufügen
1. Logo-Datei in den `public/` Ordner legen
2. In `index.html` den Favicon-Link aktualisieren:
```html
<link rel="icon" type="image/svg+xml" href="/your-logo.svg" />
```

### Farben anpassen
Die Farben können in `src/App.css` unter `:root` angepasst werden:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  /* ... weitere Farben */
}
```

### Inhalte bearbeiten
- **Band-Informationen**: `src/App.jsx` - About Section
- **Konzerte**: `src/App.jsx` - Shows Section  
- **Kontaktdaten**: `src/App.jsx` - Contact Section
- **Social Media Links**: `src/App.jsx` - Social Links

## 🚀 Deployment auf GitHub Pages

1. Repository auf GitHub erstellen
2. Code pushen:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. GitHub Pages aktivieren:
   - Repository Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`

4. Website deployen:
```bash
npm run deploy
```

Die Website ist dann unter `https://yourusername.github.io/groofish/` verfügbar.

## 📱 Responsive Design

Die Website ist für folgende Breakpoints optimiert:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 SEO & Performance

- **Meta Tags**: Vollständige SEO-Meta-Tags
- **Semantisches HTML**: Korrekte HTML-Struktur
- **Lazy Loading**: Optimierte Bildladung
- **Accessibility**: WCAG-konforme Implementierung
- **Performance**: Optimierte Builds mit Vite

## 🔧 Scripts

- `npm run dev` - Entwicklungsserver starten
- `npm run build` - Produktions-Build erstellen
- `npm run preview` - Produktions-Build lokal testen
- `npm run deploy` - Auf GitHub Pages deployen

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.

## 🤝 Kontakt

Für Fragen oder Anregungen:
- **Email**: info@groofish.de
- **Booking**: booking@groofish.de

---

**Groofish** - Pop • Funk • Jazz 🎵
