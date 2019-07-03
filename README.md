Voor toelichting uitwerking opdracht, zie onderaan. 

## Opdracht: 
Maak een clone van deze repo en zet een webapplicatie op met een multiple-select-filter. Zie details hieronder. We willen zien hoe je een webapplicatie opzet en of je weloverwogen technische beslissingen kan maken. 

## Gegeven:
* JSON file met inhoud voor multi-select (470 items)
* Design van multi-select
* Svg van zoek-icon

## Requirements:
* Toon de multi-selector met de JSON als opties
* Maak een zoekfunctie dat frontend filtering doet op de input
* Meerdere resultaten kunnen tegelijk geselecteerd worden
* Geselecteerde items komen bovenin de lijst te staan en worden niet gefilterd
* Bonus: Gebruiker kan door op een knop te klikken de data lokaal opslaan (de data wordt op page refresh opnieuw geladen)

## Belangrijkste challenge punten:
* gestructureerde HTML/CSS/Javascript
* JS architectuur (bijvoorbeeld MVC pattern)
* HTTP/REST
* ES6 / TypeScript

## Optionele challengepunten:
* Advanced css (Less/Sass/Responsive/?)
* Opzetten build street (npm/gulp/webpack/?)
* Data storage

## Requirements:
* Gebruik gestructureerde code (common practices/coding patterns)
* Het product hoeft niet af te zijn, als het maar voldoende inzicht geeft in het technisch niveau. Daarbij helpt het uiteraard wel als een deel van de code functioneert
* Je kan een framework (React, AngularJs) gebruiken waar je vertrouwd mee bent, maar je kan ons ook laten zien dat je begrijpt hoe Javascript werkt en patterns die in frameworks worden gebruikt kan reproduceren door VanillaJS te gebruiken (pré)
* Gebruik Typescript of ES6 (pré)
* Werken met TDD of BDD (pré)

----------------------------------------------------------------

## Uitwerking opdracht

* Er is een APP en een API Folder. De opdracht is uitgewerkt in de APP. Het was de bedoeling om een mock API te maken, maar gezien de tijd heb ik daar uiteindelijk
  van af gezien.
* Je kan de opdracht runnen vanuit je APP folder. Doe uiteraard eerst een 'npm install' en daarna een 'ng serve'. Je kan de website benaderen via localhost:4200. 
* De applicatie is TDD ontwikkeld. Dus eerst unit-test gebouwd en daarna de code. Dit is ook terug te vinden in de commits. Je kan de unit test runnen met het commando 'npm run test'.
* De componenten worden in principe geisoleerd ge-unittest. Alleen bij het multi-select component wordt de filter pipe ook geinjecteerd. Deze zou je idealiter ook willen mokken. Verder wordt uitsluitend de typescript getest. In mijn ervaring wordt de html overgelaten aan de automated e2e test.
* De items.json wordt nu op een lelijke manier geimporteerd via de typescript. Normaal gesproken zou je natuurlijk een http.get doen.
* Mijn prioriteit was om de typescript werkend en testbaar te krijgen. Vervolgens heb ik de CSS meer 'quick and dirty' toegevoegd.  



