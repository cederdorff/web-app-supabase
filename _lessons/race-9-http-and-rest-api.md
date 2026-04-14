# RACE 9 - Web App: HTTP & REST API - 17-04-2026

## Formål

Vi bygger videre på Supabase, CRUD og REST fra sidst, hvor I allerede har oprettet et Supabase-projekt og testet API-kald i Thunder Client. Nu går vi i dybden med HTTP og REST, så I forstår, hvad der faktisk sker i request/response-flowet, hvorfor metoderne betyder noget, og hvordan vi bruger den forståelse, når vi flytter requests ind i React med `fetch()`.

## Forberedelse

- Du skal have færdiggjort: [Kom i gang med Supabase (products)](https://race.notion.site/Kom-igang-med-Supabase-products-30bbc239db118040b60ec546849ed144) og meget gerne også [Kom i gang med Supabase (Users)](https://github.com/cederdorff/react-supabase-users/blob/main/README.md). Hvis du allerede har et Supabase-projekt, kan du bruge det og sprint til opgave 1.
- Læs artiklen [What Is CRUD? Explained](https://www.codecademy.com/article/what-is-crud-explained).
- Læs artiklen [What Is a REST API?](https://www.codecademy.com/article/what-is-rest-api).

Supplerende artikler (ikke obligatorisk):

- Sektionen med HTTP: [The Valley of Code - HTTP](https://thevalleyofcode.com/lesson/http/)
- Sektionen med Fetch: [The Valley of Code - Fetch](https://thevalleyofcode.com/lesson/fetch/)

## Agenda

<details>
	<summary><strong>1. Opsamling fra sidst</strong></summary>

- I laver en kort opsamling i par: hvad virkede i jeres CRUD-tests fra sidst?
- I formulerer dagens læringsmål i egne ord.
- Vi samler op i plenum og kobler jeres erfaringer til dagens arbejde.

</details>

<details>
	<summary><strong>2. HTTP i dybden</strong></summary>

- I analyserer konkrete requests og responses fra Supabase.
- I identificerer selv method, headers, body og statuskode i hvert eksempel.
- I forklarer i grupper, hvad der sker i netværket, og hvorfor det er vigtigt.

</details>

<details>
	<summary><strong>3. REST i dybden</strong></summary>

- I arbejder med REST-begreberne ressourcer og endpoints i egne eksempler.
- I begrunder, hvorfor GET, POST, PATCH og DELETE signalerer forskellige handlinger.

</details>

<details>
	<summary><strong>4. CRUD koblet til HTTP i Supabase</strong></summary>

- I mapper CRUD-handlinger til konkrete HTTP-kald mod `products`-endpointet.
- I tester sammenhængen mellem databasehandlinger, headers, payload og API-svar.

</details>

<details>
	<summary><strong>5. Analyse af API-kald i Thunder Client</strong></summary>

- I gennemgår jeres egne GET, POST, PATCH og DELETE-kald i Thunder Client.
- I dokumenterer kort: hvad sendte I, hvad fik I tilbage, og hvad overraskede jer?

</details>

<details>
	<summary><strong>6. Fejl og API-svar</strong></summary>

- I arbejder med typiske fejlscenarier og aflæser fejlbeskeder i responses.
- I bruger en fast tjekliste til at fejlfinde systematisk.

</details>

<details>
	<summary><strong>7. Introduktion til fetch</strong></summary>

- I tager udgangspunkt i fetch, som I allerede kender fra tidligere JSON-kald.
- I sammenligner i kode fetch-kald mod lokal JSON med fetch-kald mod Supabase.

</details>

<details>
	<summary><strong>8. Fra fetch til React: GET</strong></summary>

- I implementerer GET i React med `fetch()`.
- I får data fra Supabase vist i jeres UI.

</details>

<details>
	<summary><strong>9. Fra fetch til React: POST og dagens slutmål</strong></summary>

- I starter på POST fra React til Supabase.
- Dagen slutter med, at I er i gang med både GET og POST fra React til Supabase.

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
