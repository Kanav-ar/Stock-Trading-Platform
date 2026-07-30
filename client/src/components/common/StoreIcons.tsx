import playstore from "../../assets/googlePlayBadge.svg";
import appstore from "../../assets/appstoreBadge.svg";
import { Link } from "react-router";
type StoreLink = {
    links: {
        playStore:string;
        appStore:string;
    }
}
export default function StoreIcons({links}:StoreLink) {
  return (
    <>
      <div className="flex gap-4">
        <Link className="hover:opacity-80" to={links.playStore}><img src={playstore} alt="playstore badge" /></Link>
        <Link className="hover:opacity-80" to={links.appStore}><img src={appstore} alt="appstore badge" /></Link>    
      </div>
    </>
  );
}
