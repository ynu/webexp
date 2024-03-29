import process from 'node:process';
import axios from 'axios';
import Debug from 'debug';

const debug = Debug('webexp::debug');

export const object_list = async (sourceType, limit, offset, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/alert/list-alert-object?sourceType=${sourceType}&limit=${limit}&offset=${offset}`)
    const res = await axios.get(`${options.host}/api/admin/alert/list-alert-object?sourceType=${sourceType}&limit=${limit}&offset=${offset}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data.data;
}

export default {
    object_list,
};