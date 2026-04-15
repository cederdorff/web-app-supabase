# RACE 9 - Øvelse: Fra Thunder Client til React

## Formål

I denne øvelse skal I oversætte jeres API-kald fra Thunder Client til React med fetch. I skal implementere GET, POST, PATCH og DELETE mod Supabase, og I skal dokumentere, hvad der sker i hvert kald.

Målet er, at I ender med en fuld CRUD app for products.

## Arbejdsform

- Følg trin-for-trin i den rækkefølge, de står her.
- Arbejd gerne to og to eller i små grupper, men kod selv.
- Brug jeres egne kald fra Thunder Client som reference, mens I skriver React-koden.

## Trin 0: Startprojekt

- Brug dette template: [react-supabase-products-template](https://github.com/cederdorff/react-supabase-products-template).
- Opret jeres eget repository ud fra templaten.
- Hent derefter jeres eget repository ned via GitHub Desktop.
- Åbn projektet i VS Code fra GitHub Desktop.
- Opret jeres egen branch i GitHub Desktop, før I begynder at kode.
- Åbn terminalen i VS Code og kør:

```bash
npm install
npm run dev
```

- Når `npm run dev` kører, skal I åbne appen i browseren og teste, at projektstrukturen virker:
- Kan I navigere mellem siderne?
- Kan I finde `src/pages` og se TODO-kommentarerne i de relevante filer?
- Stop ikke her, før template-projektet kører stabilt lokalt.
- Kig efter TODO-kommentarer i disse filer:
- `src/pages/HomePage.jsx` (GET alle products)
- `src/pages/CreatePage.jsx` (POST product)
- `src/pages/ProductDetailPage.jsx` (GET ét product + DELETE)
- `src/pages/UpdatePage.jsx` (GET til prefill + PATCH)
- Målet er at erstatte starter-data med rigtige API-kald.

## Trin 1: Opret .env (før I koder)

- I skal bruge en `.env`-fil for at gemme jeres Supabase-oplysninger lokalt.
- En `.env`-fil er en konfigurationsfil med nøgle-værdi-par, som appen læser via Vite.
- Hvorfor bruger vi `.env`:
- For at undgå at hardcode URL og API key direkte i jeres kode.
- For at gøre det nemt at skifte konfiguration mellem projekter/miljøer.
- For at holde følsomme oplysninger adskilt fra appens kildekode.
- Opret en fil med navnet `.env` i roden af projektet (samme niveau som `package.json`).
- Indsæt disse to linjer i filen:

```dotenv
VITE_SUPABASE_URL=https://dit-project-id.supabase.co/rest/v1/products
VITE_SUPABASE_APIKEY=din_sb_publishable_xyz
```

- Find værdierne i jeres tidligere Thunder Client-kald:
- `VITE_SUPABASE_URL`: brug URL'en til jeres `products` endpoint.
- `VITE_SUPABASE_APIKEY`: brug værdien fra headeren `apikey`.
- Gem filen, og genstart jeres dev-server, så nye env-værdier bliver læst.
- Kør i terminalen:

```bash
npm run dev
```

- Bekræft at `.env` bliver læst i runtime (trin-for-trin):
- Åbn `src/pages/HomePage.jsx`.
- Tilføj disse linjer i komponenten (fx i en `useEffect`):

```js
console.log("VITE_SUPABASE_URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("VITE_SUPABASE_APIKEY:", import.meta.env.VITE_SUPABASE_APIKEY);
```

- Gem filen og opdatér browseren.
- Åbn browserens Developer Tools (Inspect -> Console) og tjek at begge værdier vises.
- Hvis de er `undefined`, så tjek filnavnet `.env`, variabelnavnene og at dev-serveren er genstartet.

- Vigtigt:
- Filen skal hedde præcis `.env` (ikke `.env.txt`).
- Del ikke jeres nøgle i chat, screenshots eller commits.

## Trin 2: Implementer GET request i HomePage

- Lav et fetch-kald, der henter products fra Supabase.
- Giv de nødvendige headers med.
- Vis data i UI.
- Erstat starter-data i `HomePage.jsx` med data fra API'et.
- Sammenlign React-request med Thunder Client-request.

## Trin 3: Vælg jeres reference-kald

- Find et fungerende GET-kald i Thunder Client.
- Find et fungerende POST-kald i Thunder Client.
- Find et fungerende PATCH-kald i Thunder Client.
- Find et fungerende DELETE-kald i Thunder Client.
- Brug products som ressource i alle fire kald.

## Trin 4: Implementer POST i React

- Lav en form, der sender nye product-data.
- Send request med korrekt method, headers og body.
- Opdater UI efter succesfuld oprettelse.
- Implementer submit-logik i `CreatePage.jsx`.
- Sammenlign med POST-kaldet fra Thunder Client.

## Trin 5: Implementer PATCH i React

- Vælg et product der skal opdateres.
- Send kun de felter, der skal ændres.
- Opdater UI efter succesfuld opdatering.
- Implementer prefill + submit i `UpdatePage.jsx`.
- Sammenlign med PATCH-kaldet fra Thunder Client.

## Trin 6: Implementer DELETE i React

- Vælg et product der skal slettes.
- Send DELETE med korrekt endpoint og nødvendige headers.
- Fjern elementet fra UI efter succesfuld response.
- Implementer detail-load + delete i `ProductDetailPage.jsx`.
- Sammenlign med DELETE-kaldet fra Thunder Client.

## Trin 7: Sammenlign med repository-løsningen

- Sammenlign jeres GET, POST, PATCH og DELETE med løsningen i projektet.
- Noter forskelle i endpoint, headers, payload, state-opdatering og fejlhåndtering.
- Ret til, så jeres implementering fungerer stabilt i praksis.

## Det skal I skrive ned for hvert kald

Skriv disse punkter for GET, POST, PATCH og DELETE:

- Hvilken method bruger I?
- Hvilket endpoint bruger I?
- Hvilke headers sender I?
- Hvilken payload sender I (hvis relevant)?
- Hvilken statuskode får I tilbage?
- Hvad indeholder response?
- Hvad sker der i databasen?
- Hvad sker der i UI?
- Hvilken forskel er der mellem Thunder Client og React-kaldet?

## Fast fejl-tjekliste

Hvis noget ikke virker, tjek i denne rækkefølge:

1. Method
2. URL/endpoint
3. Headers
4. Body/payload
5. Statuskode
6. Response-fejlbesked
7. Om data faktisk er ændret i databasen
8. Om state/UI bliver opdateret korrekt
