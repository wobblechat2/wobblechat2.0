import axios from 'axios';
class MessageService {
  static async getMessage(url) {
    try {
      ('you are in the get message service');
      let result = await axios.get(url);
      console.log(`we get the messages on service:`, result);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async postMessages(url, messages) {
    try {
      ('you are in the post message service');
      let result = await axios.post(url, messages);
      console.log(`we get the post result on service:`, result);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default MessageService;
