import Unsplash, { toJson } from "unsplash-js";
import { TUser } from "@types";

const unsplash = new Unsplash({ accessKey: "aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5" })

const Api = {
  searchUsers: (query: string) => {
    return unsplash.search.users(query, 1, 20)
      .then(toJson)
      .then((json: { results: object[] }) => json.results);
  },
  getUserPhotos: (user: TUser) => {
    return unsplash.users.photos(user.username, 1, 20)
      .then(toJson)
      .then((json: []) => json);
  }
}

export default Api
