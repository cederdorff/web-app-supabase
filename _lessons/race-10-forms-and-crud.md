# RACE 10 - Web App: Forms & CRUD - 23-04-2026

## Formål

Vi skal bygge en Post App i React, hvor data gemmes i Supabase. Fokus er på forms, state, controlled components og komplette CRUD-flows i en rigtig web app.

## Forberedelse

- Du skal have færdiggjort: [RACE 9 – HTTP & REST API](./race-9-http-and-rest-api.md) og øvelsen [Fra Thunder Client til React](../_exercises/race-9-oevelse-thunderclient-til-react.md).
- Genopfrisk de første 4 artikler i sektionen [React State – The Valley of Code](https://thevalleyofcode.com/lesson/react-state/):
  1. [Introduction](https://thevalleyofcode.com/lesson/react-state/)
  2. [Managing state](https://thevalleyofcode.com/lesson/react-state/managing-state/)
  3. [Component props](https://thevalleyofcode.com/lesson/react-state/component-props/)
  4. [Data flow](https://thevalleyofcode.com/lesson/react-state/data-flow/)
- Læs alle 6 artikler i sektionen [React Forms – The Valley of Code](https://thevalleyofcode.com/lesson/react-forms/):
  1. [Introduction](https://thevalleyofcode.com/lesson/react-forms/)
  2. [Managing forms in React](https://thevalleyofcode.com/lesson/react-forms/managing-forms-in-react/)
  3. [Form Actions](https://thevalleyofcode.com/lesson/react-forms/form-actions/)
  4. [React, how to make a checked checkbox editable](https://thevalleyofcode.com/lesson/react-forms/react-checkbox-editable/)
  5. [How I fixed an issue with a React login form state and Browser autofill](https://thevalleyofcode.com/lesson/react-forms/react-form-browser-autofill/)
  6. [How to get the value of an input element in React](https://thevalleyofcode.com/lesson/react-forms/react-how-to-get-value-input/)

## Agenda

<details>
	<summary><strong>1. Opsamling fra RACE 9</strong></summary>

- Vi repeterer kort, hvad I gjorde i RACE 9 med HTTP-metoderne og Thunder Client.
- Vi gennemgår øvelsen "Fra Thunder Client til React" i fællesskab – kigger på, hvordan GET, POST, PATCH og DELETE blev implementeret med `fetch` i React.
- Vi sammenligner jeres løsninger og taler om forskelle, ligheder og fejl I mødte undervejs.
- Vi gennemgår jeres refleksionssvar fra Trin 6 i RACE 9-øvelsen.
- Vi sikrer os, at alle har en fungerende løsning som udgangspunkt for i dag.

---

**Peer Review & Refleksion (makkerøvelse)**

1. Sæt jer sammen to og to og byt kode.
2. Gennemgå koden én CRUD-funktion ad gangen:
   - Start med READ, så CREATE, UPDATE og DELETE.
   - Forklar kort for hinanden, hvordan hver del virker.
   - Notér sammen:
     - Hvad var svært?
     - Hvad er uklart?
     - Hvordan kan I bruge det, I har lært, fremadrettet – fx i jeres web app-eksamensprojekt?
3. Del jeres vigtigste pointer i plenum.

</details>

<details>
	<summary><strong>2. Repetition: REST, HTTP, CRUD, Supabase og BaaS</strong></summary>

- Vi repeterer de centrale begreber fra RACE 8 og RACE 9: hvad er HTTP, REST, CRUD, Supabase og BaaS?
- Vi gennemgår kort, hvad der sker i et request/response-flow fra React til Supabase og tilbage.
- Vi taler om, hvordan GET, POST, PATCH og DELETE mapper til Create, Read, Update og Delete.
- Vi sikrer os, at alle har et fælles fundament at bygge dagens kode på.

</details>

<details>
	<summary><strong>3. Post App med fuld CRUD</strong></summary>

- Vi introducerer Post App: en simpel app hvor brugere kan oprette, læse, redigere og slette indlæg.
- Vi gennemgår den struktur vi skal bygge: sider (HomePage, CreatePage, UpdatePage, PostDetailPage) og komponenter.
- Vi tegner komponenthierarkiet og data-flowet på tavlen.
- Vi opretter `posts`-tabellen i Supabase med felterne `id`, `title` og `body`.
- Vi tester endpointet i Thunder Client før vi går i gang med React.

</details>

<details>
	<summary><strong>4. Forms i React – teori og live demo</strong></summary>

- Vi taler om controlled components og hvorfor det er det rigtige mønster i React.
- Vi demonstrerer, hvordan man bruger `useState` til form fields med `onChange` og `value`.
- Vi viser `onSubmit` og `event.preventDefault()` og hvordan form data sendes med `fetch`.
- Vi bygger GET i fællesskab live: henter alle posts og viser dem i HomePage med `useEffect` og `useState`.

</details>

<details>
	<summary><strong>5. Øvelse: Byg en Post App med fuld CRUD</strong></summary>

- I skal bygge en Post App, hvor brugere kan oprette, læse, redigere og slette indlæg gemt i Supabase.
- Opret en `posts`-tabel i jeres Supabase-projekt med mindst felterne `title` og `body`.
- Byg en React-app med følgende sider og funktionalitet:
  - **HomePage**: hent og vis alle posts med GET
  - **CreatePage**: opret et nyt post med POST via en formular
  - **UpdatePage**: hent ét post og rediger det med PATCH via en formular
  - **PostDetailPage**: vis ét post og slet det med DELETE
- Brug `useState`, `useEffect` og `fetch` med URL og APIKEY fra `.env`.
- Brug controlled components til alle formularfelter.
- Navigér korrekt efter CREATE, UPDATE og DELETE.

</details>

<details>
	<summary><strong>6. Opsamling og best practices</strong></summary>

- Vi taler om, hvordan man holder UI synkroniseret med databasen.
- Vi diskuterer loading states, error handling og user feedback.
- Vi samler op på CRUD-flowet i sin helhed.
- Vi reflekterer over, hvad I har lært denne dag, og hvordan det bruges i rigtige web apps.

</details>

## Materialer

### Slides

- Kommer her

### Opgaver

- Byg en Post App med `posts`-tabel i Supabase
- Implementer READ, CREATE, UPDATE og DELETE i React med `fetch`
- Brug controlled components til CREATE- og UPDATE-formularer

### GitHub-projekter

- Kommer her

### Links

- [React State – Introduction](https://thevalleyofcode.com/lesson/react-state/)
- [Managing state](https://thevalleyofcode.com/lesson/react-state/managing-state/)
- [Component props](https://thevalleyofcode.com/lesson/react-state/component-props/)
- [Data flow](https://thevalleyofcode.com/lesson/react-state/data-flow/)
- [The Valley of Code – React Forms (intro)](https://thevalleyofcode.com/lesson/react-forms/)
- [Managing forms in React](https://thevalleyofcode.com/lesson/react-forms/managing-forms-in-react/)
- [Form Actions (React 19)](https://thevalleyofcode.com/lesson/react-forms/form-actions/)
- [React, how to make a checked checkbox editable](https://thevalleyofcode.com/lesson/react-forms/react-checkbox-editable/)
- [How I fixed an issue with a React login form state and Browser autofill](https://thevalleyofcode.com/lesson/react-forms/react-form-browser-autofill/)
- [How to get the value of an input element in React](https://thevalleyofcode.com/lesson/react-forms/react-how-to-get-value-input/)
- [React – UseState Hook](https://react.dev/reference/react/useState)
- [React – UseEffect Hook](https://react.dev/reference/react/useEffect)
- [MDN – Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [React – Handling Events](https://react.dev/learn/responding-to-events)
