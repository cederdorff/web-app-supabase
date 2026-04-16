# RACE 9 - Øvelse: Fra Thunder Client til React

## Formål

I denne øvelse skal I oversætte jeres API-kald fra Thunder Client til React med fetch. I skal implementere GET, POST, PATCH og DELETE mod Supabase, og I skal dokumentere, hvad der sker i hvert kald.

Målet er, at I ender med en fuld CRUD app for products.

## Arbejdsform

- Følg trin-for-trin i den rækkefølge, de står her.
- Arbejd gerne to og to eller i små grupper, men kod selv.
- Brug jeres egne kald fra Thunder Client som reference, mens I skriver React-koden.

## Forberedelse (vigtig!)

**Du skal have færdiggjort denne opgave fra tidligere undervisning:** [Kom i gang med Supabase (products)](https://race.notion.site/Kom-igang-med-Supabase-products-30bbc239db118040b60ec546849ed144)

Grunden: I den opgave sætter I Supabase op, opretter `products`-tabel, og tester API-kaldet i Thunder Client. Du skal have fungerende GET, POST, PATCH og DELETE-kald fra Thunder Client før du starter denne øvelse her.

Hvis du allerede har et Supabase-projekt med en `products`-tabel og har testet API-kald i Thunder Client, kan du springe direkte til Trin 0 her.

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

Brug Trin 1 til at sætte miljøvariabler op korrekt, før I laver API-kald.

### Hvorfor bruger vi `.env`?

- For at undgå at hardcode URL og API key direkte i jeres kode.
- For at gøre det nemt at skifte konfiguration mellem projekter/miljøer.
- For at holde følsomme oplysninger adskilt fra appens kildekode.

### Opret filen

1. Opret en fil med navnet `.env` i roden af projektet (samme niveau som `package.json`).
2. Indsæt disse to linjer i filen:

```dotenv
VITE_SUPABASE_URL=https://dit-project-id.supabase.co/rest/v1/products
VITE_SUPABASE_APIKEY=din_sb_publishable_xyz
```

3. Find værdierne i jeres tidligere Thunder Client-kald:

- `VITE_SUPABASE_URL`: brug URL'en til jeres `products` endpoint.
- `VITE_SUPABASE_APIKEY`: brug værdien fra headeren `apikey`.

4. Gem filen, og genstart jeres dev-server, så nye env-værdier bliver læst.
5. Kør i terminalen:

```bash
npm run dev
```

### Test at `.env` virker i runtime

1. Åbn `src/pages/HomePage.jsx`.
2. Gem først værdierne i variabler i komponenten:

```js
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;
```

3. Log derefter variablerne (fx i en `useEffect`):

```js
console.log("VITE_SUPABASE_URL:", URL);
console.log("VITE_SUPABASE_APIKEY:", APIKEY);
```

4. Gem filen og opdatér browseren.
5. Åbn browserens Developer Tools (Inspect -> Console) og tjek at begge værdier vises.
6. Hvis de er `undefined`, så tjek filnavnet `.env`, variabelnavnene og at dev-serveren er genstartet.

### Vigtigt

- Filen skal hedde præcis `.env` (ikke `.env.txt`).
- Del ikke jeres nøgle i chat, screenshots eller commits.

## Trin 2: Implementer GET request i HomePage (READ)

Mål: I kan hente products fra Supabase og vise dem i HomePage.

### Del A: Forstå GET-kaldet i Thunder Client

1. Åbn jeres fungerende GET-kald i Thunder Client.
2. Noter disse fire ting:

- Method (`GET`)
- URL (jeres `products` endpoint)
- Headers (`apikey`, evt. `Content-Type`)
- Response (JSON-array med products)

### Del B: Oversæt kaldet til React i `HomePage.jsx`

1. Importér `useEffect` og `useState`.
2. Opret `URL` og `APIKEY` variabler fra `import.meta.env`.
3. Opret state til products (`const [products, setProducts] = useState([])`).
4. Lav `useEffect`, hvor I kalder `fetch` med URL + headers.
5. Konvertér response til JSON og gem data i state med `setProducts(data)`.
6. Fjern starter-data, så listen vises fra API'et.

Ekstra hjælp (første gang I bruger fetch med URL + APIKEY):

Vigtigt: Denne kode skal ligge inde i en `async` funktion, som kaldes fra `useEffect`.

```js
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

const response = await fetch(URL, {
  headers: {
    apikey: APIKEY,
    "Content-Type": "application/json",
  },
});
const data = await response.json();
```

Det vigtigste at forstå:

- `URL` er endpointet (hvor requesten sendes hen).
- `apikey` i headers giver adgang til Supabase Data API.
- `await response.json()` konverterer svaret til JavaScript-data, som kan gemmes i state.

### Del C: Test og forklar

1. Genindlæs appen og tjek at products vises i UI.
2. Sammenlign React-request med Thunder Client-request.
3. Forklar kort hvad der er 1:1 det samme (method, URL, headers, response-format).

### Typiske fejl i Trin 2

- `URL` eller `APIKEY` er `undefined` -> tjek `.env` og genstart dev-server.
- Forkert endpoint -> tjek at URL slutter på `/rest/v1/products`.
- Manglende header -> tjek `apikey`.

<details>
<summary>Løsningsforslag - Trin 2 (GET i HomePage)</summary>

```jsx
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch(URL, {
        headers: {
          apikey: APIKEY,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <main className="app">
      <h1 className="page-title">All Products</h1>
      <section className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
```

</details>

## Trin 3: Implementer POST i React (CREATE)

Mål: I kan oprette et nyt product via formularen.

### Del A: Forstå POST-kaldet i Thunder Client

1. Åbn jeres POST-kald i Thunder Client.
2. Noter method, URL, headers og body (payload).
3. Noter statuskode og response ved succes.

### Del B: Implementer i `CreatePage.jsx`

1. Brug `URL` og `APIKEY` variabler.
2. Implementer `handleSubmit(productData)`.
3. Send `fetch` med:

- `method: "POST"`
- korrekte headers
- `body: JSON.stringify(productData)`

4. Navigér tilbage til forsiden efter succes (fx `navigate("/")`).

Eksempel (POST syntaks):

```js
await fetch(URL, {
  method: "POST",
  headers: {
    apikey: APIKEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(productData),
});
```

### Del C: Test og forklar

1. Opret et nyt product i UI.
2. Tjek at product findes i databasen.
3. Sammenlign React-POST med Thunder Client-POST.

<details>
<summary>Løsningsforslag - Trin 3 (POST i CreatePage)</summary>

```jsx
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

async function handleSubmit(productData) {
  await fetch(URL, {
    method: "POST",
    headers: {
      apikey: APIKEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  navigate("/");
}
```

</details>

## Trin 4: Implementer PATCH i React (UPDATE)

Mål: I kan opdatere et eksisterende product.

### Del A: Forstå PATCH-kaldet i Thunder Client

1. Åbn jeres PATCH-kald i Thunder Client.
2. Noter URL med filter (`?id=eq.X`), headers og body.
3. Noter hvilke felter I faktisk opdaterer.

### Del B: Implementer i `UpdatePage.jsx`

1. Hent `id` fra route params.
2. Lav GET til at hente eksisterende product og prefill formularen.
3. Implementer submit med `PATCH` til `${URL}?id=eq.${id}`.
4. Send kun de felter der skal ændres.
5. Navigér tilbage til detail-siden efter succes.

### Del C: Test og forklar

1. Redigér et product i UI.
2. Tjek at ændringen ses i både database og app.
3. Sammenlign React-PATCH med Thunder Client-PATCH.

<details>
<summary>Løsningsforslag - Trin 4 (PATCH i UpdatePage)</summary>

```jsx
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

async function handleSubmit(productData) {
  await fetch(`${URL}?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      apikey: APIKEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  navigate(`/products/${id}`);
}
```

</details>

## Trin 5: Implementer DELETE i React

Mål: I kan slette et product fra detail-siden.

### Del A: Forstå DELETE-kaldet i Thunder Client

1. Åbn jeres DELETE-kald i Thunder Client.
2. Noter URL med id-filter, headers og statuskode.

### Del B: Implementer i `ProductDetailPage.jsx`

1. Lav en `handleDelete` funktion.
2. Spørg brugeren om bekræftelse (`window.confirm`).
3. Send `DELETE` til `${URL}?id=eq.${id}` med headers.
4. Navigér tilbage til forsiden efter succes.

### Del C: Test og forklar

1. Slet et product i UI.
2. Tjek at det er væk i både database og UI.
3. Sammenlign React-DELETE med Thunder Client-DELETE.

<details>
<summary>Løsningsforslag - Trin 5 (DELETE i ProductDetailPage)</summary>

```jsx
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

async function handleDelete() {
  const confirmed = window.confirm("Delete this product?");
  if (!confirmed) return;

  await fetch(`${URL}?id=eq.${id}`, {
    method: "DELETE",
    headers: {
      apikey: APIKEY,
      "Content-Type": "application/json",
    },
  });

  navigate("/");
}
```

</details>

## Trin 6: Refleksionsøvelse

- Skriv kort med egne ord, hvad I lærte ved at oversætte API-kald fra Thunder Client til React.
- Beskriv én ting der var nem, og én ting der var svær.
- Vælg ét af jeres kald (GET, POST, PATCH eller DELETE) og forklar, hvad der var 1:1 det samme i Thunder Client og i React-koden.
- Beskriv kort, hvordan `.env` hjalp jer i opgaven.
- Noter hvilken fejl I mødte undervejs, og hvordan I løste den.
