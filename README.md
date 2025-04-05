
# Laboras

A Piauian social network made by friends🫂

This repository contains the frontend of the project, made in React.

## Technologies

The following tools were used to develop the project


- [Node.js](https://nodejs.org/en/) - version >18.x (22.x current working)
- [React](https://18.react.dev/) - version 18.2
- [Typescript](https://www.typescriptlang.org/) - version 5.2
- [Tailwind](https://v3.tailwindcss.com/) - version 3.4
- [React Router](https://reactrouter.com/home) - version 6.2
- [shadcn/ui](https://ui.shadcn.com/)

## Versions

This project branchs are complicated. Basically they define three project variatons:

`main, dev`: Primary version of Laboras, made to work with the [original backend on DRF](https://github.com/ryofac/rede-social-django-rest). Relatively a litte out of date and broken, but in the future, will go back as main version.

`next-api`: Second version of Laboras, made to work with the [backend of Next.js fullstack flavor](https://github.com/msruan/next-api). Out of date at the same point as primary version, and maybe broken. Current depreciated, because Next.js has a separeted frontend.

`neo, neo-dev`: Third and current the last version of Laboras, made to work with the [new FastAPI-Neo4j backend](https://github.com/ryofac/rede_social_fast_neo4j.git). Current the active version, with some new features like celebrations. Its most updated branch is _neo-dev_. 
## Features

- Posts CRUD
- Profiles, follow users
- Configs
- Celebrations


## Run Locally

Clone the project

```bash
git clone https://bianca-bezerra/Laboras
```

Go to the project directory

```bash
cd Laboras
```

Switch to current active version

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

Backend team:

<a href="https://github.com/ryofac/rede-social-django-rest/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ryofac/rede-social-django-rest&max=4" />
</a>

Frontend team:

<a href="https://github.com/bianca-bezerra/Laboras/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=bianca-bezerra/Laboras" />
</a>
