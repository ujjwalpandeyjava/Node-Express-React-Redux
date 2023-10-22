import axios from "axios";

const ax = axios.create({
    baseURL: 'http://127.0.0.1:5000/',	// First run node-express server 
    headers: {
        "ngrok-skip-browser-warning": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
    timeout: 3000,
});
/* data: {
    name: "John Doe",
        email: "johndoe@example.com",
} */
const apiEndPoints = {
    Contacts(url = 'contact/') {
        return {
            fetchAll: () => ax.get(url),
            fetchById: (id) => ax.get(url + id),
            create: (newRecord) => ax.post(url, newRecord),
            update: (id, updatedRecord) => ax.put(url + id, updatedRecord),
            delete: (id) => ax.delete(url + id),
        }
    },
    EMAIL(url = 'eMail/') {
        return {
            fetchAll: () => ax.get(url),
            fetchById: (id) => ax.get(url + id),
            create: (newRecord) => ax.post(url, newRecord),
            update: (id, updatedRecord) => ax.put(url + id, updatedRecord),
            delete: (id) => ax.delete(url + id),
        }
    }
}
export default apiEndPoints;