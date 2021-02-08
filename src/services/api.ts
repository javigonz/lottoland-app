import dataParser from '../parser/parser';

const proxyCors = () => `https://javigonz-proxy.herokuapp.com/`;

const setUrl = (query: string) => `${proxyCors()}lotto/${query}`;

export const get = async (query: string): Promise<any> =>
    fetch(setUrl(query))
        .then((result) => result.json().then((data) => dataParser(data)))
        // eslint-disable-next-line no-console
        .catch((err) => console.error(err));

export default get;
