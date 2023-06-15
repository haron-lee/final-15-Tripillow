import React, { useState } from 'react';
import { LayoutStyle } from '../../Styles/Layout';
import BasicHeader from '../../Components/common/Header/BasicHeader';
import profileSm from '../../Assets/profile-sm.png';
import styled from 'styled-components';

const Chat = () => {
  return (
    <ChatLayout>
      <BasicHeader>윤석짱짱123</BasicHeader>
      <ChatContentLayout>
        <UserImage src={profileSm} alt='프로필 사진' />
        <ChatContent>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와
          약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
        </ChatContent>
        <ChatTime>12:39</ChatTime>
      </ChatContentLayout>
      <ChatInputBar>
        <UserImage src={profileSm} alt='프로필 이미지' />
        <ChatInput placeholder='메시지 입력하기...' />
        <SendButton>전송</SendButton>
      </ChatInputBar>
    </ChatLayout>
  );
};

const ChatLayout = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ChatContentLayout = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const UserImage = styled.img`
  width: 42px;
  height: 42px;
  padding-left: 16px;
  margin-right: 12px;
`;

const ChatContent = styled.p`
  max-width: 240px;
  border: 1px solid #c4c4c4;
  background-color: white;
  padding: 12px;
  box-sizing: border-box;
  font-size: var(--sm);
  line-height: 18px;
  border-radius: 0 22px 22px 22px;
`;

const ChatTime = styled.span`
  font-size: 10px;
  color: var(--dark-gray);
  margin-top: auto;
  padding-left: 6px;
`;

const ChatInputBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  height: 60px;
  box-sizing: border-box;
  margin: auto;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  border: 1px solid var(--light-gray);
  border-top: 0.5px solid var(--light-gray);
`;

const ChatInput = styled.input`
  border: none;
  padding-left: 6px;
  font-size: var(--sm);
  flex-grow: 1;
  &::placeholder {
    color: var(--light-gray);
  }
`;

const SendButton = styled.button`
  width: 44px;
  height: 44px;
  color: var(--light-gray);
`;

export default Chat;
