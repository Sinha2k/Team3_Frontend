import axios from "axios";
import { omit, pick } from "lodash";
import querystring from "query-string";
import { createService } from "./axiosClient";

const instance = createService(process.env.REACT_APP_API_HEROKU_URL);

export const orderApi = {
  search: (params) => {
    const query = querystring.stringify(
      pick(params, ["page", "perPage", "startDate", "endDate", "status"])
    );
    const data = omit(params, ["page", "perPage"]);
    const url = "order/listorder?" + query;
    return instance.get(url);
  },
};
