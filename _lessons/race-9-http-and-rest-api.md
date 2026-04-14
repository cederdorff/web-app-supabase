# RACE 9 - Web App: HTTP & REST API - 17-04-2026

## Formål

Vi bygger videre på Supabase, CRUD og REST fra sidst, hvor I allerede har oprettet et Supabase-projekt og testet API-kald i Thunder Client. Nu går vi i dybden med HTTP og REST, så I forstår, hvad der faktisk sker i request/response-flowet, hvorfor metoderne betyder noget, og hvordan vi bruger den forståelse, når vi flytter requests ind i React med `fetch()`.

## Forberedelse

- Du skal have færdiggjort: [Kom i gang med Supabase (products)](https://race.notion.site/Kom-igang-med-Supabase-products-30bbc239db118040b60ec546849ed144) og meget gerne også [Kom i gang med Supabase (Users)](https://github.com/cederdorff/react-supabase-users/blob/main/README.md). Hvis du allerede har et Supabase-projekt, kan du bruge det og sprint til opgave 1.
- Læs artiklen [What Is CRUD? Explained](https://www.codecademy.com/article/what-is-crud-explained).

Supplerende artikler (ikke obligatorisk):

- Sektionen med HTTP: [The Valley of Code - HTTP](https://thevalleyofcode.com/lesson/http/)
- Sektionen med Fetch: [The Valley of Code - Fetch](https://thevalleyofcode.com/lesson/fetch/)

## Agenda

<details>
	<summary><strong>1. Opsamling fra sidst</strong></summary>

- Reflekterer over, hvad vi lavede sidst, og hvilke muligheder det giver.
- Hvad er Supabase, og hvordan vi kan bruge Supabase, når vi bygger web apps?
- Ud fra den viden du har nu: Hvad er CRUD, HTTP og REST? Og hvad er BaaS?
- Hvad bruger vi Thunder Client til i workflowet?

</details>

<details>
	<summary><strong>2. HTTP i dybden</strong></summary>
    
- Læs artiklen [What Is HTTP?](https://www.codecademy.com/article/what-is-http).
- Skriv med egne ord: Hvad er en request, og hvad er en response?
- Skriv med egne ord: Hvad bruger vi HTTP-metoder til?
- Find mindst to konkrete eksempler i Thunder Client, fx en GET og en POST.
- Peg i hvert eksempel på method, URL, headers, body og statuskode.
- Forklar kort, hvordan eksemplerne fra Thunder Client hænger sammen med det, artiklen beskriver.

</details>

<details>
	<summary><strong>3. REST i dybden</strong></summary>

- Læs artiklen [What Is a REST API?](https://www.codecademy.com/article/what-is-rest-api).
- Skriv med egne ord: Hvad er REST?
- Skriv med egne ord: Hvordan hænger REST og HTTP sammen?
- Skriv kort, hvorfor GET, POST, PATCH og DELETE signalerer forskellige handlinger i et REST API.
- Brug mindst to konkrete eksempler fra Thunder Client eller jeres Supabase-projekt, og forklar hvilken ressource I arbejder med, hvilket endpoint I bruger, og hvorfor metoden passer til handlingen.

</details>

<details>
	<summary><strong>4. CRUD koblet til HTTP i Supabase</strong></summary>

- Lav en oversigt, hvor CRUD kobles til de rigtige HTTP-metoder.
- Brug `products`-endpointet til at skrive konkrete eksempler på Create, Read, Update og Delete.
- Noter for hvert eksempel hvilke headers, hvilken payload og hvilken type response der hører til.

</details>

<details>
	<summary><strong>5. Analyse af API-kald i Thunder Client</strong></summary>

- Gennemgå jeres egne GET, POST, PATCH og DELETE-kald i Thunder Client.
- Dokumenter for hvert kald: hvad blev sendt, hvad kom tilbage, og hvad skete der i databasen?
- Noter også, hvis noget overraskede, eller hvis der var noget, der var uklart.

</details>

<details>
	<summary><strong>6. Fejl og API-svar</strong></summary>

- Prøv bevidst at lave en eller to fejl i Thunder Client, fx forkert endpoint eller manglende headers.
- Læs fejlbeskederne i response og skriv, hvad fejlen fortæller.
- Brug en fast tjekliste: method, URL, headers, body og statuskode.

</details>

<details>
	<summary><strong>7. Introduktion til fetch</strong></summary>

- Tager udgangspunkt i fetch, som allerede er kendt fra tidligere JSON-kald.
- Sammenligner i kode fetch-kald mod lokal JSON med fetch-kald mod Supabase.

</details>

<details>
	<summary><strong>8. Fra fetch til React: GET</strong></summary>

- Implementerer GET i React med `fetch()`.
- Får data fra Supabase vist i UI.

</details>

<details>
	<summary><strong>9. Fra fetch til React: POST og dagens slutmål</strong></summary>

- Starter på POST fra React til Supabase.
- Afslutter dagen med at være i gang med både GET og POST fra React til Supabase.

</details>

## Materialer

### Slides

- HTTP & REST API: slides vil blive tilgængelige her

### Opgaver

- README-opgaven i dette repository
- Thunder Client-opgaver med GET, POST, PATCH og DELETE

### GitHub-projekter

- Kommer snart

### Links

- [What Is CRUD? Explained](https://www.codecademy.com/article/what-is-crud-explained)
- [What Is a REST API?](https://www.codecademy.com/article/what-is-rest-api)
- [The Valley of Code - HTTP](https://thevalleyofcode.com/lesson/http/)
- [The Valley of Code - Fetch](https://thevalleyofcode.com/lesson/fetch/)
