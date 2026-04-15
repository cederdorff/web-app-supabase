# RACE 9 - Oevelse: Fra Thunder Client til React

## Formaal

I denne oevlelse skal I oversaette jeres API-kald fra Thunder Client til React med fetch. I skal implementere GET, POST, PATCH og DELETE mod Supabase, og I skal dokumentere hvad der sker i hvert kald.

Maalet er, at I ender med en loesning, der matcher repositoryets loesning i struktur og adfaerd.

## Arbejdsform

- Foelg trin-for-trin i den raekkefolge, de staar her.
- Arbejd gerne to og to eller i smaa grupper.
- Brug jeres egne kald fra Thunder Client som reference, mens I skriver React-koden.

## Trin 1: Vaelg jeres reference-kald

- Find et fungerende GET-kald i Thunder Client.
- Find et fungerende POST-kald i Thunder Client.
- Find et fungerende PATCH-kald i Thunder Client.
- Find et fungerende DELETE-kald i Thunder Client.
- Brug products som ressource i alle fire kald.

## Trin 2: Implementer GET i React

- Lav et fetch-kald, der henter products fra Supabase.
- Giv de noedvendige headers med.
- Vis data i UI.
- Sammenlign React-request med Thunder Client-request.

## Trin 3: Implementer POST i React

- Lav en form, der sender nye product-data.
- Send request med korrekt method, headers og body.
- Opdater UI efter succesfuld oprettelse.
- Sammenlign med POST-kaldet fra Thunder Client.

## Trin 4: Implementer PATCH i React

- Vaelg et product der skal opdateres.
- Send kun de felter, der skal aendres.
- Opdater UI efter succesfuld opdatering.
- Sammenlign med PATCH-kaldet fra Thunder Client.

## Trin 5: Implementer DELETE i React

- Vaelg et product der skal slettes.
- Send DELETE med korrekt endpoint og noedvendige headers.
- Fjern elementet fra UI efter succesfuld response.
- Sammenlign med DELETE-kaldet fra Thunder Client.

## Trin 6: Sammenlign med repository-loesningen

- Sammenlign jeres GET, POST, PATCH og DELETE med loesningen i projektet.
- Noter forskelle i endpoint, headers, payload, state-opdatering og fejlhaandtering.
- Ret til, saa jeres implementation fungerer stabilt i praksis.

## Det skal I skrive ned for hvert kald

Skriv disse punkter for GET, POST, PATCH og DELETE:

- Hvilken method bruger I?
- Hvilket endpoint bruger I?
- Hvilke headers sender I?
- Hvilken payload sender I (hvis relevant)?
- Hvilken statuskode faar I tilbage?
- Hvad indeholder response?
- Hvad sker der i databasen?
- Hvad sker der i UI?
- Hvilken forskel er der mellem Thunder Client og React-kaldet?

## Fast fejl-tjekliste

Hvis noget ikke virker, tjek i denne raekkefolge:

1. Method
2. URL/endpoint
3. Headers
4. Body/payload
5. Statuskode
6. Response-fejlbesked
7. Om data faktisk er aendret i databasen
8. Om state/UI bliver opdateret korrekt
