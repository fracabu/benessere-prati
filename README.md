# 🧘‍♀️ Benessere Prati - Yoga, Shiatsu & Reiki a Roma

Sito web ufficiale per **Benessere Prati**, centro di benessere specializzato in yoga, shiatsu e reiki situato a Roma, quartiere Prati.

## 📋 Descrizione

Questo progetto è una landing page moderna e responsive realizzata per promuovere i servizi di benessere offerti dal centro. Include sezioni per servizi, prenotazioni, testimonianze, informazioni sulla location e contatti.

## 🚀 Tecnologie Utilizzate

- **React 19.2.0** - Library UI
- **TypeScript 5.8.2** - Type safety
- **Vite 6.2.0** - Build tool e dev server
- **React DOM 19.2.0** - DOM rendering

## 📦 Installazione

### Prerequisiti

- Node.js (versione >= 20.19.0 consigliata, minimo v20.16.0)
- npm (incluso con Node.js)

### Setup

1. **Clona il repository:**
   ```bash
   git clone https://github.com/fracabu/benessere-prati.git
   cd benessere-prati
   ```

2. **Installa le dipendenze:**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

4. **Apri il browser:**
   - Local: http://localhost:3000/
   - Vedrai l'app in esecuzione 🎉

## 🛠️ Comandi Disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm install` | Installa le dipendenze del progetto |
| `npm run dev` | Avvia il server di sviluppo Vite |
| `npm run build` | Crea build di produzione |
| `npm run preview` | Preview della build di produzione |

## 📁 Struttura del Progetto

```
benessere-prati/
├── components/           # Componenti React riutilizzabili
│   ├── About.tsx        # Sezione Chi Siamo
│   ├── Booking.tsx      # Form prenotazioni
│   ├── Footer.tsx       # Footer del sito
│   ├── Header.tsx       # Intestazione e navigazione
│   ├── Hero.tsx         # Hero section principale
│   ├── Location.tsx     # Informazioni sede e mappa
│   ├── LogoIcon.tsx     # Logo componente
│   ├── Services.tsx     # Servizi offerti
│   └── Testimonials.tsx # Recensioni clienti
├── App.tsx              # Componente principale
├── constants.tsx        # Costanti e configurazioni
├── types.ts             # Tipi TypeScript
├── index.tsx            # Entry point React
├── index.html           # Template HTML
├── package.json         # Dipendenze e script
├── tsconfig.json        # Configurazione TypeScript
├── vite.config.ts       # Configurazione Vite
├── metadata.json        # Metadati applicazione
└── README.md            # Questo file
```

## 🌟 Funzionalità

- ✅ Design responsive mobile-first
- ✅ Sezione servizi (Yoga, Shiatsu, Reiki)
- ✅ Sistema di prenotazioni
- ✅ Testimonianze clienti
- ✅ Integrazione mappa per location
- ✅ Informazioni di contatto
- ✅ Interfaccia moderna e accessibile

## 🔧 Sviluppo

### Build di Produzione

Per creare una build ottimizzata per la produzione:

```bash
npm run build
```

I file compilati saranno nella cartella `dist/`.

### Preview Build di Produzione

Per testare la build di produzione localmente:

```bash
npm run preview
```

## 📝 Note

- Se vedi warning di Browserslist, aggiorna i database con: `npx update-browserslist-db@latest`
- Il progetto usa porta **3000** per il dev server (non la porta predefinita 5173 di Vite)
- Warning EBADENGINE per `@vitejs/plugin-react` possono essere ignorati se Node >= v20.16.0

## 👤 Autore

**Francesco Capurso**
- GitHub: [@fracabu](https://github.com/fracabu)

## 📄 Licenza

Questo progetto è privato e proprietario di Benessere Prati.

## 🤝 Contributi

Per qualsiasi richiesta o modifica, contatta il proprietario del repository.

---

Made with ❤️ for Benessere Prati - Roma

