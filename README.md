# Comunità L'Incontro — Sito web

Sito statico multipagina per una comunità/associazione che si occupa di disabilità
psichiatriche nel Veneto. Nessuna dipendenza: solo HTML, CSS e un pizzico di
JavaScript. Puoi aprirlo direttamente nel browser o hostarlo su qualsiasi
servizio statico (Netlify, GitHub Pages, cPanel, ecc.).

## Pagine

| File | Contenuto |
|------|-----------|
| `index.html` | Home: messaggio di benvenuto, servizi in evidenza, missione, attività, CTA |
| `chi-siamo.html` | Storia (timeline), missione, valori, team |
| `servizi.html` | I 5 ambiti di servizio in dettaglio + "per chi" + come si accede |
| `attivita.html` | Laboratori, calendario settimanale, FAQ |
| `contatti.html` | Sedi, telefoni, orari, mappa e modulo di contatto |

## Struttura

```
progetto03/
├── index.html
├── chi-siamo.html
├── servizi.html
├── attivita.html
├── contatti.html
├── css/
│   └── style.css      ← tutti gli stili condivisi (token di design in alto)
├── js/
│   └── main.js        ← menu mobile, intestazione, form, anno nel footer
└── README.md
```

## Come personalizzarlo

1. **Nome e identità** — il nome "Comunità L'Incontro" compare in ogni pagina
   (testo del logo, `<title>`, meta description, footer). Cerca e sostituisci per
   adattarlo al nome reale. Il logo è un'icona SVG inline: sostituisci il `<svg>`
   dentro `.brand-mark` con il vostro.
2. **Contatti reali** — indirizzo, telefono, email e P.IVA sono fittizi. Sono
   ripetuti in `contatti.html` e in ogni footer: aggiorna tutte le occorrenze.
3. **Colori e font** — tutti i colori e i font sono in cima a `css/style.css`,
   dentro `:root`. Cambia `--primary`, `--accent`, `--bg`, ecc. per rifare il tema
   senza toccare il resto.
4. **Numeri e testo** — le statistiche (anni, n. abitazioni, ecc.) sono esempi:
   modifica in `index.html`.
5. **Mappa** — in `contatti.html` il riquadro "mappa" è un segnaposto: sostituiscilo
   con un embed di Google Maps (un `<iframe>`).
6. **Form di contatto** — al momento il modulo simula l'invio (mostra un messaggio
   di conferma). Per farlo funzionare davvero collega la `submit` in `js/main.js` a
   un tuo endpoint o a un servizio tipo Formspree / EmailJS.

## Note

- **Accessibilità**: link di salto, landmark semantici, focus visibile, menu mobile
  da tastiera (Esc per chiudere), contrasto curato e supporto a
  `prefers-reduced-motion`.
- **Responsive**: layout fluido da mobile a desktop, menu a "hamburger" sotto gli
  860px.
- I contenuti (storia, team, servizi) sono un modello realistico ma generico:
  adattare nomi, date e dettagli ai fatti reali prima della pubblicazione.
