const axios= require("axios");
const adapter = require('axios/lib/adapters/http');
class ConsumerService {

    constructor(baseUrl, port) {
        this.baseUrl = baseUrl;
        this.port = port;
    }

    createToDo(todo) {
        return axios.request({
            method: 'POST',
            url: `/todo`,
            baseURL: `${this.baseUrl}:${this.port}`,
            headers: {
                'Accept': 'application/json',
            },
            data: todo
        }, adapter).then((response) => {
            const todo = response.data;
            return new Promise((resolve, reject) => {
                try {
                    resolve(todo);
                } catch (error) {
                    reject(error);
                }
            });
        });
    };

}
module.exports = ConsumerService;
