import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import {  Button, Card,Avatar, Title, Paragraph } from 'react-native-paper';
import { theme } from '../core/theme';

type Props = {
  children: React.ReactNode;
};
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const card = () => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: theme.colors.secondary,
    textAlign: 'center',
    marginBottom: 14,
  },
});

export default memo(card);
