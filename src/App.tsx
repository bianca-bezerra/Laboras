import { MainPosts } from "./components/MainPosts";
import { AsideMyProfile } from "./components/AsideMyProfile";
import { AsideFollowers } from "./components/AsideFollowers";
import { IProfile } from "./models/profile";
import style from "./App.module.css";

interface AppProps {
  idLoggedUser : string;
}

export function App({idLoggedUser} : AppProps) {
  return (
    <div className="container">
      <header className={style.header}>
        <h1>LABORAS</h1>
      </header>
      <aside className={style.aside}>
        <AsideMyProfile idLoggedUser={idLoggedUser}/>
      </aside>
      <main className={style.main}>
        <MainPosts idLoggedUser={idLoggedUser}/>
      </main>
      <aside className={style.aside}>
        <AsideFollowers idLoggedUser={"1"} />
      </aside>
    </div>
  );
}