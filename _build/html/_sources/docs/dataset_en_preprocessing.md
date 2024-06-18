# Dataset en preprocessing

In de eerste teamvergadering besloten we snel welke datasets we wilden onderzoeken. We kozen ervoor om ons te richten op datasets over klimaatverandering en bespraken de verschillende perspectieven die we hierbij konden gebruiken. Uiteindelijk selecteerden we twee datasets: de eerste betreft het aantal natuurrampen van 1900-2024 in de wereld, en de tweede heeft betrekking op de broeikasgasuitstoot van 1970-2022 van alle landen per sector. We behouden de relevante variabelen en jaartallen uit beide datasets om verder de correlaties tussen het aantal natuurrampen en de broeikasgasuitstoot te onderzoeken.

### Cleaning

Om een helder overzicht van de data te krijgen, was het noodzakelijk om beide datasets op te schonen. De dataset over natuurrampen vereiste weinig aanpassingen, terwijl de dataset over broeikasgasuitstoot een grondige herstructurering nodig had.

Allereerst filterden we de irrelevante jaartallen (1900-1969) en de bijbehorende informatie uit de dataset over natuurrampen. Vervolgens richtten we ons op de tweede dataset, de dataset over broeikasgasuitstoot. We transformeerden de jaartallen, die oorspronkelijk als variabelen waren opgenomen, naar rijen. Hierdoor werd 'Year' een kolom met waarden van 1970 tot 2022, wat een beter overzicht bood van de broeikasgasuitstoot door de jaren heen. Daarna maakten we de dataset compacter door irrelevante variabelen te verwijderen die geen invloed hadden op de correlaties tussen de datasets.

Uiteindelijk herstructureerden we de dataset zodat de variabelen `Emission`, `Substance`, `Sector` en `Year` als kolommen werden gepresenteerd. Hierdoor hadden we nu vier kolommen in plaats van 57 en 1.379 rijen in plaats van 213.

Na het opschonen hebben we nu in totaal 7 kolommen en 2524 rijen verspreid over de twee datasets

### Variable descriptions

De gebruikte variabelen zijn: Disasters, Year, Entity, Substance, Emissions en Sector

Deze variabelen kunnen we verder classificeren onder verschillende combinaties van meetniveaus:

- Discrete & Nominal variables: `Sector`, `Substance`, `Entity`
- Discrete & Interval variables: `Year`
- Discrete & Ratio variables: `Disasters`, `Emissions`

Deze classificatie helpt bij het bepalen van de juiste statistische methoden en analyse benaderingen voor elk type variabele.

### Aggregaties

De laatste stap in het voorbereiden van de datasets was het samenvoegen ervan. We wilden vooral de correlaties tussen de toename van broeikasgasuitstoot en het aantal natuurrampen onderzoeken. Daarom combineerden we eerst het totale aantal natuurrampen met de totale broeikasgasuitstoot van 1970-2022. Hierdoor kregen we een overzicht van de veranderingen in de jaarlijkse broeikasgasuitstoot en het aantal natuurrampen. Vervolgens vergeleken we de broeikasgasuitstoot van de sectoren individueel met de verschillende typen rampen. Hierdoor kregen we inzicht in de correlatie tussen sectoren en rampsoorten.
