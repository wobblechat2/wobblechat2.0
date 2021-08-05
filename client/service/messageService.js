import axios from 'axios';
class MessageService {
  static async getMessage(url) {
    try {
      ('you are in the get message service');
      let result = await axios.get(url);
      console.log(`messageService-getMessages-result.rows :`, result.rows);
      console.log('--------------------------------------------');
      return result.rows;
    } catch (err) {
      console.log(err);
    }
  }

  static async postMessage(url, messages) {
    try {
      ('you are in the post message service');
      let result = await axios.post(url, messages);
      console.log(`we get the postResult on service:`, result);
      console.log('--------------------------------------------');
      return result.config.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default MessageService;
