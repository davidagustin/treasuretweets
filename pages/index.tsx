import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MessageInput from './components/MessageInput';
import MessageCard from './components/shared/MessageCard';
import React, { useState } from "react";
import { SyntheticEventData } from 'react-dom/test-utils';

export default function Home() {
  const defaultList = [
    { message: "ItemOne" },
    { message: "ItemTwo" },
    { message: "ItemThree" }
  ];

  const [list, updateList] = useState(defaultList);

  const handleDelete= (index: number): void => {
    updateList(list.filter((_, listIndex) => listIndex !== index))
   };

  return (
    <div className={styles.container}>
      <Head>
        <title>Treasure Tweets</title>
        <meta name="description" content="Social Network for TreasureDAO" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main className={styles.main}>
        <MessageInput />
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
