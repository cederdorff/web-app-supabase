# RACE 9 - Øvelse: Fra Thunder Client til React

## Formål

I denne øvelse skal I oversætte jeres API-kald fra Thunder Client til React med fetch. I skal implementere GET, POST, PATCH og DELETE mod Supabase, og I skal dokumentere, hvad der sker i hvert kald.

Målet er, at I ender med en løsning, der matcher repositoryets løsning i struktur og adfærd.

## Arbejdsform

- Følg trin-for-trin i den rækkefølge, de står her.
- Arbejd gerne to og to eller i små grupper.
- Brug jeres egne kald fra Thunder Client som reference, mens I skriver React-koden.

## Trin 1: Vælg jeres reference-kald

- Find et fungerende GET-kald i Thunder Client.
- Find et fungerende POST-kald i Thunder Client.
- Find et fungerende PATCH-kald i Thunder Client.
- Find et fungerende DELETE-kald i Thunder Client.
- Brug products som ressource i alle fire kald.

## Trin 2: Implementer GET i React

- Lav et fetch-kald, der henter products fra Supabase.
- Giv de nødvendige headers med.
- Vis data i UI.
- Sammenlign React-request med Thunder Client-request.

## Trin 3: Implementer POST i React

- Lav en form, der sender nye product-data.
- Send request med korrekt method, headers og body.
- Opdater UI efter succesfuld oprettelse.
- Sammenlign med POST-kaldet fra Thunder Client.

## Trin 4: Implementer PATCH i React

- Vælg et product der skal opdateres.
- Send kun de felter, der skal ændres.
- Opdater UI efter succesfuld opdatering.
- Sammenlign med PATCH-kaldet fra Thunder Client.

## Trin 5: Implementer DELETE i React

- Vælg et product der skal slettes.
- Send DELETE med korrekt endpoint og nødvendige headers.
- Fjern elementet fra UI efter succesfuld response.
- Sammenlign med DELETE-kaldet fra Thunder Client.

## Trin 6: Sammenlign med repository-løsningen

- Sammenlign jeres GET, POST, PATCH og DELETE med løsningen i projektet.
- Noter forskelle i endpoint, headers, payload, state-opdatering og fejlhåndtering.
- Ret til, så jeres implementation fungerer stabilt i praksis.

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
