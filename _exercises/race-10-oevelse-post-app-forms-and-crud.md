# RACE 10 - Øvelse: Post App med Forms & CRUD

## 0. Formål

I denne øvelse skal I bygge en Post App i React med Supabase som backend. Fokus er på:

- controlled forms i React
- GET, POST, PATCH og DELETE med `fetch`
- navigation mellem sider
- at få det grundlæggende CRUD-flow til at virke først

Målet er, at I ender med en lille, men gennemført CRUD-app for `posts`.

## 1. Startprojekt

- Brug dette template repo: [post-app-supabase-template](https://github.com/cederdorff/post-app-supabase-template)
- Opret jeres eget repository ud fra templaten
- Hent derefter jeres eget repository ned lokalt
- Åbn projektet i VS Code
- Kør:

```bash
npm install
npm run dev
```

> Vigtigt: Projektet fungerer ikke fuldt endnu. Før appen kan hente og gemme data, skal I have et Supabase-projekt, en `posts`-tabel og en korrekt `.env` fil.

## 2. Før I starter

I skal have:

- et Supabase-projekt
- en tabel med navnet `posts`
- felterne `id`, `image` og `caption`
- testet GET, POST, PATCH og DELETE i Thunder Client

I må meget gerne bare arbejde videre i det Supabase-projekt, I allerede har fra tidligere.

### Opret `posts`-tabellen i Supabase

Hvis I ikke allerede har en `posts`-tabel, så gør sådan her:

1. Åbn jeres eksisterende Supabase-projekt
2. Gå til **Table Editor**
3. Klik på **Create a new table**
4. Giv tabellen navnet `posts`
5. Sørg for at tabellen har disse kolonner:

| column     | type               |
| ---------- | ------------------ |
| id         | int8 (primary key) |
| created_at | timestampz         |
| image      | text               |
| caption    | text               |

6. Gem tabellen

Hvis `id` ikke autogenereres, så sørg for at `id` er sat op som primary key.

`created_at` bliver ofte oprettet automatisk af Supabase. Det er helt fint. I skal ikke bruge det aktivt i denne øvelse, men det er normalt, at det står i tabellen.

### Gør tabellen unrestricted lige nu

For at gøre det nemt at teste i denne øvelse, skal tabellen være åben for requests lige nu.

1. Gå til **Table Editor**
2. Åbn tabellen `posts`
3. Find **Table settings** eller menuen med de tre prikker
4. Gå til policies / security
5. Sæt tabellen til **unrestricted** eller slå RLS fra for `posts`

Det er kun for at gøre øvelsen enkel. Senere kan I arbejde med sikkerhed og policies igen.

### Indsæt et par test-data

Det er en god ide at indsætte 2-3 rækker med det samme, så I har noget at vise på forsiden.

I må gerne tage udgangspunkt i disse eksempler og kun indsætte `image` og `caption` i Supabase:

```json
[
  {
    "caption": "Beautiful sunset at the beach",
    "image": "https://images.unsplash.com/photo-1566241832378-917a0f30db2c?auto=format&fit=crop&w=500&q=80"
  },
  {
    "caption": "Exploring the city streets of Aarhus",
    "image": "https://images.unsplash.com/photo-1559070169-a3077159ee16?auto=format&fit=crop&w=500&q=80"
  },
  {
    "caption": "Delicious food at the restaurant",
    "image": "https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=500&q=80"
  },
  {
    "caption": "Exploring the city center of Aarhus",
    "image": "https://images.unsplash.com/photo-1612624629424-ddde915d3dc5?auto=format&fit=crop&w=500&q=80"
  },
  {
    "caption": "A cozy morning with coffee",
    "image": "https://images.unsplash.com/photo-1545319261-f3760f9dd64d?auto=format&fit=crop&w=500&q=80"
  },
  {
    "caption": "Serenity of the forest",
    "image": "https://images.unsplash.com/photo-1661505216710-32316e7b5bb3?auto=format&fit=crop&w=500&q=80"
  },
  {
    "caption": "A beautiful morning in Aarhus",
    "image": "https://images.unsplash.com/photo-1573997953524-efed43db70a0?auto=format&fit=crop&w=500&q=80"
  },
  {
    "caption": "Rainbow reflections of the city of Aarhus",
    "image": "https://images.unsplash.com/photo-1558443336-dbb3de50b8b2?auto=format&fit=crop&w=500&q=80"
  }
]
```

I behøver ikke indsætte alle. 3-4 rækker er fint til at starte med.

### Test jeres endpoint

Når tabellen er klar, så lav lige et par hurtige tests i Thunder Client:

- GET alle posts
- POST et nyt post
- Hvis I vil: prøv også PATCH eller DELETE på ét post

Målet er bare at sikre, at endpointet virker, før I går videre til React-koden.

Opret en `.env` fil i projektets rod:

```dotenv
VITE_SUPABASE_URL=https://dit-project-id.supabase.co/rest/v1/posts
VITE_SUPABASE_APIKEY=din_sb_publishable_key
```

## 3. Få overblik over starteren

Kig i disse filer og find `TODO`:

- `src/pages/HomePage.jsx`
- `src/pages/CreatePage.jsx`
- `src/pages/UpdatePage.jsx`
- `src/pages/PostDetailPage.jsx`
- `src/components/PostForm.jsx`

Tal sammen om:

- Hvilke sider findes allerede?
- Hvad er klar?
- Hvad mangler I selv at implementere?

## 4. Implementer GET i HomePage

Mål: Vis alle posts på forsiden.

I skal:

1. Bruge `fetch(URL, { headers })`
2. Konvertere svaret med `await response.json()`
3. Gemme data i `posts`
4. Vise posts i UI
5. Kontrollere i browseren, at data faktisk bliver vist
6. Sammenligne jeres React-kald med GET-kaldet i Thunder Client

Spørgsmål:

- Hvad svarer GET til i CRUD?
- Hvorfor ligger GET-kaldet i `useEffect`?

<details>
<summary>Vejledende løsning</summary>

```jsx
useEffect(() => {
  async function loadPosts() {
    const response = await fetch(URL, { headers });
    const data = await response.json();
    setPosts(data);
  }

  loadPosts();
}, []);
```

</details>

## 5. Forstå og brug den controlled form i PostForm

Mål: Forstå hvordan den eksisterende controlled form i templaten virker.

Kig på `PostForm.jsx`.

I starter-templaten er formularen allerede sat op som en controlled form.

Det betyder, at jeres opgave her ikke er at bygge den fra bunden, men at:

- læse den
- forstå hvorfor den er controlled
- bruge den rigtigt sammen med `onSubmit`

Forklar:

- hvorfor bruger vi `useState` til `image` og `caption`?
- hvad gør `value`?
- hvad gør `onChange`?
- hvorfor bruger vi `event.preventDefault()`?

En controlled component betyder, at inputfeltets værdi bliver styret af React state.

Det vil sige:

- brugeren skriver i et inputfelt
- `onChange` bliver kaldt
- state bliver opdateret
- den nye state-værdi bliver vist tilbage i feltet via `value`

Det er derfor, vi siger, at React “kontrollerer” feltet.

I denne øvelse er både `image` og `caption` controlled inputs i templaten allerede.

Det er smart i React, fordi React så hele tiden kender værdien af formularen.

Det betyder:

- I altid ved, hvad der står i formularen lige nu
- det er nemt at sende data videre i `onSubmit`
- det er nemmere at validere felter
- det er nemmere at genbruge samme formular til både create og update
- UI og data hænger tæt sammen, hvilket passer godt til Reacts måde at arbejde på

I denne Post App er det især smart, fordi:

- samme formular bruges både til create og update
- vi gerne vil kunne sende `image` og `caption` direkte videre i `handleSubmit`
- vi gerne vil kunne vise preview af billedet, mens brugeren skriver

Jeres fokus i dette punkt er derfor:

1. Kig på hvordan `image` og `caption` er bundet til state
2. Kig på hvordan `onChange` opdaterer state
3. Forstå hvorfor `onSubmit({ image, caption })` virker
4. Forstå hvorfor preview af billedet opdateres, når `image` ændrer sig

Kig især efter dette mønster:

```jsx
const [caption, setCaption] = useState("");

<textarea
  value={caption}
  onChange={(e) => setCaption(e.target.value)}
/>
```

Her er pointen:

- `caption` er den aktuelle værdi
- `value={caption}` binder state til feltet
- `onChange` opdaterer state, når brugeren skriver

## 6. Implementer POST i CreatePage

Mål: Opret et nyt post i databasen.

I skal:

1. Lave `handleSubmit(postData)`
2. Sende `POST` med `fetch`
3. Bruge `JSON.stringify(postData)`
4. Navigere tilbage til `/` ved succes
5. Teste at et nyt post bliver gemt i databasen

Tænk flowet sådan her:

1. Brugeren udfylder formularen i `PostForm`
2. `PostForm` kalder `onSubmit({ image, caption })`
3. `CreatePage` modtager data i `handleSubmit(postData)`
4. `handleSubmit` sender data videre med `fetch`
5. Ved succes navigerer appen tilbage til forsiden

Det vigtige her er, at:

- `PostForm` står for formularen
- `CreatePage` står for POST-requesten
- `postData` er det objekt, I sender til Supabase

<details>
<summary>Vejledende løsning</summary>

```jsx
async function handleSubmit(postData) {
  await fetch(URL, {
    method: "POST",
    headers,
    body: JSON.stringify(postData),
  });

  navigate("/");
}
```

</details>

## 7. Implementer GET + PATCH i UpdatePage

Mål: Hent ét post og brug det som startdata i formularen.

Tænk flowet sådan her:

1. Brugeren klikker på edit på detail-siden
2. Appen navigerer til `"/posts/:id/update"`
3. `UpdatePage` læser `id` med `useParams()`
4. `UpdatePage` henter ét post fra Supabase
5. Data gives videre til `PostForm`
6. Brugeren retter billed-URL eller caption
7. `handleSubmit(postData)` sender en PATCH-request
8. Ved succes navigerer appen tilbage til detail-siden

I skal:

1. Bruge `id` fra `useParams()`
2. Hente ét post med querystring:

```js
?id=eq.${id}
```

3. Gemme resultatet i `post`
4. Give `post` videre til `PostForm`
5. Implementere PATCH i `handleSubmit`
6. Navigere tilbage til detail-siden ved succes

Det vigtige her er:

- at I bruger `id` fra URL'en
- at I henter ét post før formularen vises
- at I sender PATCH til det rigtige post med querystring
- at formularen får data ind som props fra `UpdatePage`

Her er det smarte ved genbrug:

- `PostForm` viser allerede felter for `image` og `caption`
- i `CreatePage` bruges formularen uden eksisterende data
- i `UpdatePage` sendes et eksisterende `post` ind som prop
- derfor kan formularen vise de gamle værdier først og derefter lade brugeren redigere dem

Det er netop derfor, det giver mening at bruge samme `PostForm` til både create og update.

Spørgsmål:

- Hvordan kan det lade sig gøre at bruge samme `PostForm` til både create og update?

<details>
<summary>Vejledende løsning</summary>

```jsx
useEffect(() => {
  async function loadPost() {
    const response = await fetch(`${URL}?id=eq.${id}`, { headers });
    const data = await response.json();
    setPost(data[0]);
  }

  loadPost();
}, [id]);

async function handleSubmit(postData) {
  await fetch(`${URL}?id=eq.${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(postData),
  });

  navigate(`/posts/${id}`);
}
```

</details>

## 8. Implementer GET + DELETE i PostDetailPage

Mål: Vis ét post og gør det muligt at slette det.

I skal:

1. Hente ét post med GET
2. Vise billedet og caption
3. Lave en delete-knap
4. Spørge brugeren med `window.confirm(...)`
5. Sende DELETE-request
6. Navigere tilbage til forsiden ved succes

Tænk flowet sådan her:

1. Brugeren klikker på et post på forsiden
2. Appen navigerer til `"/posts/:id"`
3. `PostDetailPage` læser `id` fra URL'en
4. Komponenten henter ét post med GET
5. Billede og caption bliver vist
6. Hvis brugeren klikker delete, spørger appen om bekræftelse
7. Ved bekræftelse sendes DELETE-requesten
8. Ved succes navigerer appen tilbage til forsiden

Det vigtige her er:

- at I genbruger `id` fra URL'en
- at GET og DELETE begge rammer det samme post
- at I først sletter, når brugeren har bekræftet

Her er det smarte ved flowet:

- detail-siden viser ét konkret post ud fra `id` i URL'en
- det samme `id` bruges både til GET og DELETE
- derfor hænger visning og sletning tæt sammen i samme komponent
- det gør det lettere at forstå, hvilket post der bliver vist og hvilket post der bliver slettet

<details>
<summary>Vejledende løsning</summary>

```jsx
useEffect(() => {
  async function loadPost() {
    const response = await fetch(`${URL}?id=eq.${id}`, { headers });
    const data = await response.json();
    setPost(data[0]);
  }

  loadPost();
}, [id]);

async function handleDelete() {
  const confirmed = window.confirm("Delete this post?");

  if (!confirmed) return;

  await fetch(`${URL}?id=eq.${id}`, {
    method: "DELETE",
    headers,
  });

  navigate("/");
}
```

</details>

## 9. Når det grundlæggende virker

Når jeres CRUD-flow og forms virker, kan I lægge det næste lag ovenpå:

- simpel validering i formularen
- loading states
- tom-state på forsiden
- `try/catch`
- simple fejlbeskeder
- `response.ok` checks
- disable af knapper mens requests kører

## 10. Refleksion

Svar kort på disse spørgsmål:

1. Hvad er forskellen på GET, POST, PATCH og DELETE i jeres app?
2. Hvordan hænger controlled forms sammen med `useState`?
3. Hvorfor er `onSubmit` og `event.preventDefault()` vigtige?
4. Hvad var vigtigst for at få jeres forms til at virke?
5. Hvad var sværest i øvelsen?

## 11. Ekstra udfordringer

Hvis I bliver hurtigt færdige:

- Tilføj en besked når der ingen posts er
- Tilføj lidt bedre fejltekst
- Gør loading-teksterne mere tydelige
- Undersøg hvordan man kan samle `URL` og `headers` i én fil
