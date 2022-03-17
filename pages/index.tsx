import { useState } from "react";
import Head from 'next/head';

import styles from '../styles/Home.module.css';

import MessageInput from './components/MessageInput';
import MessageCard from './components/shared/MessageCard';

export default function Home() {
  const defaultList = [
    { message: "TreasureDAO rocks!!!!" },
    { message: "Made by CryptoMan" },
    { message: "EEEEEEEE!!!!" }
  ];

  const [list, updateList] = useState(defaultList);
  const [textArea, updateTextArea] = useState('');

  const handleAdd = (message) => {
    updateList([{ message }, ...list])
  }

  const handleDelete = (index: number): void => {
    updateList(list.filter((_, listIndex) => listIndex !== index))
  };

  const handleClick = () => {
    handleAdd(textArea);
    updateTextArea('');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Treasure Tweets</title>
        <meta name="description" content="Social Network for TreasureDAO" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main className={styles.main}>
        <MessageInput textArea={textArea} updateTextArea={updateTextArea} handleClick={handleClick}/>
        <div>
          {list.map((item, i) => {
            return (
              <div key={i}>
                <MessageCard message={item.message} handleDelete={handleDelete} index={i}/>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
