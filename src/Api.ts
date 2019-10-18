import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({ accessKey: "5f64fd0ea20fabe32c6e599342b8665f66c86e43630b75f3ca477f0d596279ff" })

const Api = {
  searchUsers: (query: string) => {
    return unsplash.search.users(query, 1, 20)
      .then(toJson)
      .then((json: { results: object[] }) => json.results);
  }
}

export default Api
