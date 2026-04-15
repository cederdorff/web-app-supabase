# RACE 9 - Web App: HTTP & REST API - 17-04-2026

## Formål

Vi bygger videre på Supabase, CRUD og REST fra sidst, hvor I allerede har oprettet et Supabase-projekt og testet API-kald i Thunder Client. Nu går vi i dybden med HTTP og REST, så I forstår, hvad der faktisk sker i request/response-flowet, hvorfor metoderne betyder noget, og hvordan vi bruger den forståelse, når vi flytter requests ind i React med `fetch()`.

## Forberedelse

- Du skal have færdiggjort: [Kom i gang med Supabase (products)](https://race.notion.site/Kom-igang-med-Supabase-products-30bbc239db118040b60ec546849ed144) og meget gerne også [Kom i gang med Supabase (Users)](https://github.com/cederdorff/react-supabase-users/blob/main/README.md). Hvis du allerede har et Supabase-projekt, kan du bruge det og sprint til opgave 1.

Supplerende artikler (ikke obligatorisk):

- Sektionen med HTTP: [The Valley of Code - HTTP](https://thevalleyofcode.com/lesson/http/)
- Sektionen med Fetch: [The Valley of Code - Fetch](https://thevalleyofcode.com/lesson/fetch/)

## Agenda

> I skal arbejde med agendaen slavisk og bruge den som jeres faste arbejdsguide gennem hele dagen.
> Det er en fordel at arbejde sammen to og to eller i små grupper, så I kan sparre undervejs.
> Lokalet er ledigt, så I har god mulighed for at sidde og arbejde fokuseret med opgaverne.

<details>
	<summary><strong>1. Opsamling fra sidst</strong></summary>

- Reflekterer over, hvad vi lavede sidst, og hvilke muligheder det giver.
- Hvad er Supabase, og hvordan vi kan bruge Supabase, når vi bygger web apps?
- Ud fra den viden I har nu: Hvad er CRUD, HTTP og REST? Og hvad er BaaS?
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

- Start med at skimme artiklen [What Is CRUD? Explained](https://www.codecademy.com/article/what-is-crud-explained).
- Skriv kort med egne ord, hvad CRUD betyder.
- Forklar, hvordan CRUD hænger sammen med HTTP-metoder og REST.
- Lav en oversigt, hvor CRUD kobles til de rigtige HTTP-metoder.
- Brug konkrete eksempler fra Thunder Client og jeres `products`-endpoint på Create, Read, Update og Delete.
- Noter de særlige ting, I skal skrive for hvert eksempel: endpoint, method, headers, payload, statuskode, response og hvad der ændrer sig i databasen.

</details>

<details>
	<summary><strong>5. Øvelse: Fra API-kald i Thunder Client til React App</strong></summary>

- Vi starter React-delen her og arbejder med GET, POST, PATCH og DELETE.
- Brug øvelsen [Fra Thunder Client til React](/_exercises/race-9-oevelse-thunderclient-til-react.md).
- Målet er at oversætte jeres API-kald fra Thunder Client til kode i React, så flowet bliver det samme.
- Delmål i øvelsen: implementer først GET, derefter POST, PATCH og DELETE i React, verificer i database og UI, og sammenlign til sidst med repositoryets løsning.

</details>

## Materialer

### Slides

- API & REST slides (støtte): [https://cederdorff.com/race/slides/api-and-rest.pdf](https://cederdorff.com/race/slides/api-and-rest.pdf)
- Brug især slide 63-110 som støtte til dagens arbejde.

### Opgaver

- [Øvelse: Fra Thunder Client til React](_exercises/race-9-oevelse-thunderclient-til-react.md)

### GitHub-projekter

- Kommer snart

### Links

- [What Is CRUD? Explained](https://www.codecademy.com/article/what-is-crud-explained)
- [What Is a REST API?](https://www.codecademy.com/article/what-is-rest-api)
- [The Valley of Code - HTTP](https://thevalleyofcode.com/lesson/http/)
- [The Valley of Code - Fetch](https://thevalleyofcode.com/lesson/fetch/)
