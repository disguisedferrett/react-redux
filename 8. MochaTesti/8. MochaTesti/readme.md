# Testaus Mocha ja chai kirjastoilla

## 1. Luodaan projektikansio
## 2. Luodaan package.json
````shell
nmp init -y
````
## 3. Asennetaan mocha ja chai

npm install mocha chai --save-dev

## 4. Muokataan package.json `scrpts`
````json
"scripts": {
    "test": "mocha"
  }
  ````

## 5. Tehdään testejä varten kansio test