import axios from "axios";

export function getdata() {
  return axios.get("https://jsonkeeper.com/b/SULU");
}
