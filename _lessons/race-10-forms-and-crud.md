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

- Kort opsamling på RACE 9 og arbejdet med HTTP-metoder og Thunder Client.
- Fælles gennemgang af øvelsen "Fra Thunder Client til React" og CRUD med `fetch`.
- Sammenligning af løsninger, forskelle og typiske fejl.
- Gennemgang af refleksionssvar fra Trin 6.
- Sikring af et fælles udgangspunkt for dagens arbejde.

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
3. Vær klar til at dele jeres vigtigste pointer i plenum.

</details>

<details>
	<summary><strong>2. Repetition: REST API, HTTP, CRUD, Supabase og BaaS</strong></summary>

- Repetition af HTTP, REST API, CRUD, Supabase og BaaS.
- Kort gennemgang af request/response-flowet mellem React og Supabase.
- Kobling mellem GET, POST, PATCH, DELETE og CRUD.
- Et fælles fagligt fundament for resten af timen.

</details>

<details>
  <summary><strong>3. Post App med fuld CRUD</strong></summary>

- Introduktion til Post App og overblik over sider og komponenter.
- Tegn komponenthierarki og data-flow.
- Opret en `posts`-tabel i Supabase med `id`, `image` og `caption`.
- Test endpoints i Thunder Client.
- Byg appen med fuld CRUD: opret, læs, redigér og slet indlæg.
- Byg en React-app med disse sider:
  - **HomePage**: vis alle posts (GET)
  - **CreatePage**: opret nyt post med billede og caption (POST)
  - **UpdatePage**: redigér billede og caption for et post (PATCH)
  - **PostDetailPage**: vis og slet et post (DELETE)
- Brug `useState`, `useEffect` og `fetch` med URL og APIKEY fra `.env`.
- Brug controlled components til formularfelter.
- Sørg for korrekt navigation efter CREATE, UPDATE og DELETE.

</details>

<details>
	<summary><strong>4. Forms i React – teori og live demo</strong></summary>

- Introduktion til controlled components i React.
- Demo af `useState`, `onChange` og `value` i formularfelter.
- Gennemgang af `onSubmit`, `event.preventDefault()` og `fetch`.
- Live demo af GET med `useEffect` og `useState` på `HomePage`.

</details>

<details>
	<summary><strong>5. Opsamling og best practices</strong></summary>

- Hvordan UI holdes synkroniseret med databasen.
- Loading states, error handling og user feedback.
- Opsamling på CRUD-flowet som helhed.
- Refleksion over dagens læring og brug i rigtige web apps.

</details>

## Materialer

### Slides

- [Supabase](https://cederdorff.com/race/slides/supabase.pdf)
- [API and REST](https://cederdorff.com/race/slides/api-and-rest.pdf)

### Opgaver

- [Øvelse: Post App - Forms & CRUD](../_exercises/race-10-oevelse-post-app-forms-and-crud.md)

### GitHub-projekter

- [post-app-supabase-template](https://github.com/cederdorff/post-app-supabase-template)
- [post-app-supabase](https://github.com/cederdorff/post-app-supabase)

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
