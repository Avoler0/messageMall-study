import '@sendbird/uikit-react/dist/index.css';
import React from 'react';
import { Channel, ChannelSettings } from '@sendbird/uikit-react';
import { ChannelListProvider } from '@sendbird/uikit-react/ChannelList/context';
import SbChannelListHeader from '../lib/component/SendBird/Channel/ChannelListHeader';
import SbChannelListBody from '../lib/component/SendBird/Channel/ChannelListBody';
import BuyerRequest from '../lib/component/SendBird/Message/BuyerRequest';

export type Mode = 'channel' | 'chatting' | 'setting' | 'request';

function Message() {
  const [showMode,setShowMode] = React.useState<Mode>('channel')
  const [currentChannelUrl,setCurrentChannelUrl] = React.useState<string>('');
  
  // var channelChatDiv = document.getElementsByClassName("channel-chat")[0];

  // const renderSettingsBar = () =>{
  //   channelChatDiv.computedStyleMap.width = "52%";
  //   channelChatDiv.computedStyleMap.cssFloat = "left";
  // }
  
  return (
    <>
      <div className='channel-wrap flex flex-col h-full border-2 overflow-hidden'>
          <div className='grow'>
            {
              showMode === 'channel' && (
                <div className='channel-list h-full'>
                  <ChannelListProvider>
                    <SbChannelListHeader />
                    <SbChannelListBody setCurrentChannelUrl={setCurrentChannelUrl} setShowMode={setShowMode} />
                  </ChannelListProvider>
                </div>
              )
            }
            {
              showMode === 'chatting' && (
                <div className='channel-chat h-full'>
                  <Channel 
                    channelUrl={currentChannelUrl}
                    onChatHeaderActionClick={()=>{
                      setShowMode('setting')
                    }}
                  />
                </div>
              )
            }
            {
              showMode === 'setting' && (
                <div className='channel-setting h-full'>
                  <ChannelSettings channelUrl={currentChannelUrl} onCloseClick={() => setShowMode('chatting')}/>
                </div>
              )
            }
            {
              showMode === 'request' && (
                <BuyerRequest />
              )
            }
          </div>
        <div className='flex h-1/5 text-xl justify-center'>
          <div className='px-5 cursor-pointer' onClick={() => setShowMode('channel')}>
            채널
          </div>
          <div className='px-5 cursor-pointer' onClick={() => setShowMode('request')}>
            요청하기
          </div>
          <div className='px-5 cursor-pointer' onClick={() => setShowMode('setting')}>
            세팅
          </div>
        </div>
      </div>
    </>
    
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default Message;
