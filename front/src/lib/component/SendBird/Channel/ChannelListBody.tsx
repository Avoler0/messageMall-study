import { GroupChannel } from "@sendbird/chat/groupChannel";
import ChannelPreview from "@sendbird/uikit-react/ChannelList/components/ChannelPreview";
import { useChannelListContext } from "@sendbird/uikit-react/ChannelList/context";
import React from "react";
import { Mode } from "../../../../routes/message";

interface props {
  setCurrentChannelUrl: React.Dispatch<React.SetStateAction<string>>;
  setShowMode: React.Dispatch<React.SetStateAction<Mode>>
}

function SbChannelListBody({setCurrentChannelUrl,setShowMode}:props){
  
  const { allChannels, currentChannel, loading, initialized } = useChannelListContext();
  console.log('올채널스',allChannels)


  const onClick = (channel) => {
    setShowMode('chatting')
    setCurrentChannelUrl(channel.url)
  }

  const action = (props: { channel: GroupChannel; }) => {
    // console.log('뿌랍스',props)

    return (
      <div></div>
    )
  }

  return(
    <div>
      {allChannels.map((channel)=>(
        <ChannelPreview key={channel.url} onClick={() => onClick(channel)} isActive={channel.url === currentChannel.url} renderChannelAction={action} channel={channel} tabIndex={0} />
      ))}
      
    </div>
    
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export default SbChannelListBody;