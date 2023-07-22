import SendbirdChat from '@sendbird/chat'
import { OpenChannel, OpenChannelCreateParams, OpenChannelModule, SendbirdOpenChat } from '@sendbird/chat/openChannel';


export const sb = SendbirdChat.init({
    appId: 'DC852C9A-9B1F-4172-950F-98BD71254328',
    modules: [
        new OpenChannelModule(),
    ],
  });
//   try {
//       const user = await sb.connect('d3fe89e1294460f5552007e281652165e0b2cdde');
//       // The user is connected to the Sendbird server.
//       console.log(4444,user)
//   } catch (err) {
//       // Handle error.
//       console.log('에러',err)
//   }
// const channelParams: OpenChannelCreateParams ={
//   name:'test-channel',
//   channelUrl:'/test-channel',
//   operatorUserIds:['Hoon','Doo'],
//   data:'channel is channel',
//   customType:'man of man'
// }
// export const channel: OpenChannel = await sb.openChannel.createChannel(channelParams)

