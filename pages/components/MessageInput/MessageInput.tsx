import { useState } from "react";

import Button from '../shared/Button'
import ProfileIcon from '../shared/ProfileIcon'
import TextArea from '../shared/TextArea'

export default function MessageInput({ textArea, updateTextArea, handleClick}) {
  
  return (
    <div className="mb-3 mt-10">
        <div className="flex">
            <div className="mt-10">
                <ProfileIcon image={'/favicon.webp'}/>
            </div>
            <TextArea updateTextArea={updateTextArea} textArea={textArea}/>
        </div>
        <div className="flex justify-end">
            <Button buttonText={'Tweet'} handleClick={handleClick}/>
        </div>
    </div>
  )
}
