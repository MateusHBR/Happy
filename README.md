

<h1 align="center">
	<img src="./logo.svg" alt="Logo"/>    
</h1>


​	

<p align="center">
	<a href="#about"> Sobre o desafio </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  	<a href="#techs"> Tecnologias </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   	<a href="#clone"> Clonando Repositório </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#exec"> Executar código </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#routes"> Rotas </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#contribute"> Contribuir </a>
</p>





## Sobre 🏷<a name="about" />

O **Happy** é uma plataforma para que pessoas encontrem orfanatos perto de sua localização e leve mais felicidade para as crianças, e foi pensada pois estamos próximo ao dia das crianças.



## Techs ​⚙ ​<a name="techs" />

- TypeScript

- ReactJS

- Node.js

  

## Clonando Repositório 🧲 <a name="clone"/>


	$ git clone https://github.com/MateusHBR/happy.git
		
	# Acesse a pasta do projeto
	
	$ cd happy


## Executar código  ▶️ <a name="exec" />

Acesse a pasta do projeto e instale as Dependências:

- Caso use Yarn:
  
1. **`yarn`**

- Caso use Npm:
  1. **`npm install`**
  
     

### Versão WEB: :desktop_computer:

Acesse a pasta do projeto `$ cd web`

- Caso use Yarn:

  **`yarn start`**

- Caso use Npm:

  **`npm start`**

  

E a aplicação web estará rodando no url: <a href="http://localhost:3000" target="_blank">http://localhost:3000 </a>



### Versão Mobile: 📱

em construção...



### Backend: 💼

Acesse a pasta do projeto `$ cd backend`

renomeie o arquivo **`.env.example`** para **`.env`**

- Caso use Yarn:

  **`yarn start`**

- Caso use Npm:

  **`npm start`**

E pronto, o servidor estará rodando no url: <a href="http://localhost:3333" target="_blank">http://localhost:3333 </a>



## Rotas: 🛣️ <a name="routes" />

- **`POST /orphanages`**: A rota recebe um `name`, `latitude` , `longitude`, `about`,  `instructions`, `openingHours`,  `openOnWeekends` e podendo receber de 0 a multiplas imagens como parâmetro `images` dentro do corpo da requisição;

- **`GET /orphanages`**: A rota lista todos os orfanatos;

- **`GET /orphanages/:id`**: A rota listará apenas o orfanato passado por parâmetro;

  

## Como contribuir 🛠 <a name="contribute" />

- Faça um Fork desse repositório
- Crie uma branch com a sua feature  **`git checkout -b my-feature`**
- Faça um commit das suas mudanças: **`git commit -mg 'feat: My new feature'`**
- Faça um push da sua branch **`git push origin my-feature`**