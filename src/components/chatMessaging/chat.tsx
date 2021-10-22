import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import {
  Attachment,
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibXVkZHktc25vdy0wIiwiZXhwIjoxNjM0MzUyNDc2fQ.19eHYLiuolRTFBIyllP3AbutxabFhgkFtTYU-PFWw7E';

const filters = { type: 'messaging', members: { $in: ['muddy-snow-0'] } };
const sort = { last_message_at: -1 };

const attachments = [
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71k0cry-ceL._SL1500_.jpg',
    name: 'iPhone',
    type: 'product',
    url: 'https://goo.gl/ppFmcR',
  },
];

const CustomAttachment = (props: any) => {
  const { attachments } = props;
  const [attachment] = attachments || [];

  if (attachment?.type === 'product') {
    return (
      <div>
        Product:
        <a href={attachment.url} rel="noreferrer">
          <img alt="custom-attachment" height="100px" src={attachment.image} />
          <br />
          {attachment.name}
        </a>
      </div>
    );
  }

  return <Attachment {...props} />;
};

const ChatMessaging = () => {
  const [chatClient, setChatClient] = useState(null);

  useEffect(() => {
    const initChat = async () => {
      const client: any = StreamChat.getInstance('dz5f4d5kzrue');

      await client.connectUser(
        {
          id: 'muddy-snow-0',
          name: 'muddy',
          image: 'https://getstream.io/random_png/?id=muddy-snow-0&name=muddy',
        },
        userToken
      );

      const [channelResponse] = await client.queryChannels(filters, sort);

      await channelResponse.sendMessage({
        text: 'Your selected product is out of stock, would you like to select one of these alternatives?',
        attachments,
      });

      setChatClient(client);
    };

    initChat();
  }, []);

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <Chat client={chatClient} theme="messaging light">
      <ChannelList filters={filters} />
      <Channel Attachment={CustomAttachment}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatMessaging;
