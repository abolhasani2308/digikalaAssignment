import {AxiosInstance, AxiosResponse} from 'axios';

interface Res<T> {
  data: T;
  error?: boolean;
  message?: string;
}

type Query = (p: any) => PromiseLike<any> | void;
type ApiType = {
  [key: string]: ApiType | Query;
};

const format = <T extends ApiType>(input: T) => input as T;

//it is recommended to define baseurl in the .env file
const baseurl =
  'https://my-json-server.typicode.com/abolhasani2308/productsjson';

export const createApi = (axios: AxiosInstance) => {
  return format({
    async getProducts() {
      const res = await axios.get(`${baseurl}/products`);
      return handle<string>(res);
    },
    async getDetails(id) {
      const res = await axios.get(`${baseurl}/details/${id}`);
      return handle<string>(res);
    },
  });
};

function handle<T>(res: AxiosResponse<Res<T>>) {
  return res?.data;
}
