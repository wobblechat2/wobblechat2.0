import axios from 'axios';

class MessageService {
  static async postMessages(url, messages) {
    try {
      let result = await axios.post(url, messages);
      return result.data;
    } catch(err) {
      console.log(err);
    }
  }

}

export default MessageService;