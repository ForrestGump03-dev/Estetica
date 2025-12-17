# Estetica Landing Page

Questo è il sito web del centro estetico, costruito con React e Vite.

## 🚀 Guida Rapida per lo Sviluppo

### Prerequisiti
- Node.js e npm installati.

### Avvio
1. Installa le dipendenze:
   ```bash
   npm install
   ```
2. Avvia il server locale:
   ```bash
   npm run dev
   ```
   Il sito sarà visibile su `http://localhost:5173`.

---

## 📝 Guida Gestione Contenuti (DatoCMS)

Questa sezione spiega come aggiornare la sezione **"Novità & Promozioni"** del sito utilizzando DatoCMS.

### 1. Accesso
Accedi al pannello di amministrazione di DatoCMS con le credenziali fornite.

### 2. Inserire una Nuova Notizia/Promozione
1. Nel menu a sinistra, clicca su **"News Item"** (o "Novità").
2. Clicca sul pulsante **"Crea nuovo record"** (o "+").

### 3. Compilare i Campi
Ecco come compilare correttamente ogni campo:

- **Title (Titolo):** Il titolo breve della news o promozione (es. "Sconto Primavera", "Nuovo Trattamento").
- **Category (Categoria):** Scegli una delle opzioni:
  - `promo`: Per offerte e sconti (apparirà con etichetta rossa).
  - `news`: Per avvisi generali o novità (etichetta arancione).
  - `video`: Se stai caricando un video (etichetta blu).
- **Description (Descrizione Breve):** Un riassunto di 1-2 frasi che appare nella card principale.
- **Full Description (Descrizione Completa):** Il testo lungo che appare quando si apre la notizia. Qui puoi spiegare i dettagli del trattamento o dell'offerta.
- **Date (Data):** La data di pubblicazione.
- **Image (Immagine):**
  - Carica una foto rappresentativa.
  - **Nota Privacy:** Se usi foto di clienti (es. Prima/Dopo), assicurati di aver censurato gli occhi o reso irriconoscibile il volto se richiesto.
  - Se non carichi nessuna immagine, il sito ne userà una automatica in base alla categoria.

### 4. Gestione Video (Campo "Video URL")
Se hai selezionato la categoria `video`, incolla qui il link. Il sito supporta automaticamente:

- **YouTube:**
  - Link normali: `https://www.youtube.com/watch?v=...`
  - Link brevi: `https://youtu.be/...`
  - *Risultato:* Il video si vedrà direttamente nel sito.

- **Instagram:**
  - Link Reel/Post: `https://www.instagram.com/reel/...`
  - *Risultato:* Apparirà una copertina con il pulsante "Guarda su Instagram".

- **Facebook:**
  - Link Video/Reel: `https://www.facebook.com/reel/...`
  - *Risultato:* Apparirà una copertina con il pulsante "Guarda su Facebook".

### 5. Pubblicazione
Una volta compilati i campi, clicca su **"Salva"** (o "Save") e poi su **"Pubblica"** (o "Publish") in alto a destra. Le modifiche appariranno sul sito in pochi istanti (potrebbe essere necessario ricaricare la pagina).



