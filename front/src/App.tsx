import { SendBirdProvider } from '@sendbird/uikit-react';
import Message from './routes/message';
import { GroupChannel } from '@sendbird/chat/groupChannel';

function App() {

  return (
    <div className='App w-screen h-screen'>
      {/* <Message /> */}
      <div className='absolute bottom-1 right-1 w-80 h-5/6 p-1'>
        <SendBirdProvider appId={'DC852C9A-9B1F-4172-950F-98BD71254328'} userId='test-user02'>
          <Message />
        </SendBirdProvider>
      </div>
      {/* <CreateChannelProvider onCreateChannel={onCreateChannel} >
        <div className='bg-purple-500'></div>
        <SbCreteChannel />
        <SbInviteUsers />
      </CreateChannelProvider> */}
    </div>
  )
}

export default App
