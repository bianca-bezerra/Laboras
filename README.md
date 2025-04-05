
# Laboras

A Piauian social network made by friends🫂

This repository contains the frontend of the project, built with React.

## Technologies

The following tools were used to develop this project


- [React](https://18.react.dev/) - version 18.2
- [Vite](https://v5.vite.dev/) - version 5.2
- [Typescript](https://www.typescriptlang.org/) - version 5.2
- [Tailwind](https://v3.tailwindcss.com/) - version 3.4
- [React Router](https://reactrouter.com/home) - version 6.2
- [shadcn/ui](https://ui.shadcn.com/)
- [Node.js](https://nodejs.org/en/) - version >18.x (22.x current working)

## Versions

This project branchs are complicated. Basically they define three project variatons:

`main, dev`: Primary version of Laboras, designed to work with the [original DRF backend](https://github.com/ryofac/rede-social-django-rest). It's currently somewhat outadated and partially broken, but will return as the main version in the future.

`next-api`: A second version of Laboras, developed to integrate with the [Next.js fullstack backend](https://github.com/msruan/next-api). It is as outdated as the primary version and potentially broken. This version is currently deprecated since Next.js flavor now has its own separate frontend.

`neo, neo-dev`: The last and currently active version of Laboras, built to work with the [FastAPI-Neo4j backend](https://github.com/ryofac/rede_social_fast_neo4j.git). This version introduce new features such as celebrations. The most up-to-date branch is _neo-dev_. 
## Features

- CRUD for posts
- Users profiles and follow system
- User settings
- Celebrations system


## Run Locally

Clone the project

```bash
git clone https://bianca-bezerra/Laboras
```

Go to the project directory

```bash
cd Laboras
```

Switch to the current active version

```bash
git switch neo-dev
```

Install dependencies

```bash
npm i
```

Run the development server

```bash
npm run dev
```


## Authors

Frontend team:

<a href="https://github.com/bianca-bezerra/Laboras/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=bianca-bezerra/Laboras" />
</a>
<br>
<br>

Backend team:


<a href="https://github.com/ryofac/rede-social-django-rest/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ryofac/rede-social-django-rest&max=4" />
</a>
