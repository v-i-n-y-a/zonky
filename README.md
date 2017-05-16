# Tržiště Zonky

Naprogramuj single-page aplikaci, která bude každých 5 minut kontrolovat nové půjčky na tržišti zonky.cz a vypíše je do seznamu.<br />
Seznam půjček bude obsahovat obrázek, jméno a příběh omezený na 20 slov s celkovou maximální délkou příběhu 200 znaků. <br />
Seznam půjček bude možné řadit podle délky trvání, ratingu, požadované částky a deadlinu. <br />
Každou z půjček si uživatel může rozkliknout, aby viděl její detail se všemi údaji z API. <br />
Pro vývoj aplikace použij React <br />
K aplikaci napiš alespoň dva testy <br />

## Application description

**Tržiště Zonky** is a single page application that repersents a list actual loans from zonky.cz. <br />
Problems for zonky api: CORS weren't open. <br />
It's also has a defence from **Allow-Control-Allow-Origin: * chrome plugin.** It gives me **403 error**, when plugin is activated. 
I moved api to localhost: http://127.0.0.1:8080/loans/marketplace using urllib.

## Instructions to run

1. Clone repository  ` git clone https://github.com/v-i-n-y-a/zonky.git `
. Navigate to **zonky** folder
3. Install project ` npm install -s`
4. Build **app.min.js** ` npm run build `
4. Start server `api=<zonky api url> npm start `
5. Application will be running on http://127.0.0.1:8080
6. List of the loands http://127.0.0.1:8080/loans/marketplace
7. Run tests: `npm test `

