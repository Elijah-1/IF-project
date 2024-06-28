# Dataset en preprocessing

In de eerste teamvergadering besloten we snel welke datasets we wilden onderzoeken. We kozen ervoor om ons te richten op datasets over klimaatverandering en bespraken de verschillende perspectieven die we hierbij konden gebruiken. Uiteindelijk selecteerden we drie datasets: de eerste betreft het aantal natuurrampen van 1900-2024 in de wereld, de tweede heeft betrekking op de broeikasgasuitstoot van 1970-2022 van alle landen per sector en de derde dataset geeft informatie over de olieproductie, olieprijzen en andere relevante informatie over olie van 1932-2014. We behouden de relevante variabelen en jaartallen uit drie datasets om verder de correlaties tussen het aantal natuurrampen en de broeikasgasuitstoot te onderzoeken.

### Cleaning

Om een helder overzicht van de data te krijgen, was het noodzakelijk om de datasets op te schonen. De dataset over natuurrampen vereiste weinig aanpassingen, terwijl de datasets over broeikasgasuitstoot en olieproductie een grondige herstructurering nodig hadden.

Allereerst filterden we de irrelevante jaartallen (1900-1969) en de bijbehorende informatie uit de dataset over natuurrampen. Deze dataset heeft maar 3 variabelen: `Entity`, `Year`, `Disaster`, met informatie over verschillende typen natuurrampen. Door deze dataset op een andere manier te interpreteren, kunnen we de verschillende typen natuurrampen omzetten in variabelen, waardoor de dataset aanzienlijk uitgebreid wordt met meer variabelen.

Vervolgens richtten we ons op de tweede dataset, de dataset over broeikasgasuitstoot. We transformeerden de jaartallen, die oorspronkelijk als variabelen waren opgenomen, naar rijen. Hierdoor werd `Year` een kolom met waarden van 1970 tot 2022, wat een beter overzicht bood van de broeikasgasuitstoot door de jaren heen. Daarna maakten we de dataset compacter door irrelevante variabelen te verwijderen die geen invloed hadden op de correlaties tussen de datasets.

Uiteindelijk herstructureerden we de dataset zodat de variabelen `Emission`, `Sector` en `Year` als kolommen werden gepresenteerd. Hierdoor hadden we nu drie kolommen in plaats van 57 en 1.379 rijen in plaats van 213

We verwijderden als laatste stap de irrelevante jaartallen (1932-1969) uit de dataset over olieproductie. Daarnaast filterden we de variabelen die we niet gebruiken, waardoor we het aantal variabelen in de dataset van zes naar drie reduceerden.

Na het opschonen hebben we nu in totaal 9 kolommen en 2570 rijen verspreid over de drie datasets, waarbij de variabel `Year` in meerdere datasets voorkomt.

### Variabele

De gebruikte variabelen zijn: `Disasters`, `Year`, `Entity`, `Emissions`, `Sector`, `earthquake` en `oil_prod`.

Deze variabelen kunnen we verder classificeren onder verschillende combinaties van meetniveaus:

- Discrete & Nominal variables: `Sector`, `Entity`
- Discrete & Interval variables: `Year`
- Discrete & Ratio variables: `Disasters`, `Emissions`, `oil_prod`, `earthquake`

Deze classificatie helpt bij het bepalen van de juiste statistische methoden en analyse benaderingen voor elk type variabele.

### Aggregaties

De laatste stap in het voorbereiden van de datasets was het samenvoegen ervan. We wilden vooral de correlaties tussen de toename van broeikasgasuitstoot en het aantal natuurrampen onderzoeken. Daarom combineerden we eerst het totale aantal natuurrampen met de totale broeikasgasuitstoot van 1970-2022. Hierdoor kregen we een overzicht van de veranderingen in de jaarlijkse broeikasgasuitstoot en het aantal natuurrampen. Vervolgens vergeleken we de broeikasgasuitstoot van de sectoren individueel met de verschillende typen rampen. Hierdoor kregen we inzicht in de correlatie tussen sectoren en rampsoorten.

Als laatste combineerden we de olieproductie per land tot een totale olieproductie per jaar. Vervolgens voegden we deze gegevens samen met de gegevens over aardbevingen, zodat we de totale olieproductie per ton per jaar konden vergelijken met het aantal aardbevingen.
