import ProfileIcon from "../ProfileIcon";
import Button from "../Button";

interface MessageCard {
  message: string;
  handleDelete: (any) => void;
  index: number;
};

export default function MessageCard({ message, handleDelete, index }: MessageCard) {
  return (
    <div className="border-[2px] border-gray-800 border-solid w-[560px] p-[12px] flex flex-row" aria-label='message-card'>
      <div>
          <ProfileIcon image={'/favicon.webp'}/>
      </div>
      <div className="ml-4">
        <div className="font-bold">
          CryptoMan | Treasure
        </div>        
        <div aria-label='message-card-output'>
          { message }
        </div>
      </div>
      <div className="h-[40px] ml-[auto] self-end">
        <Button buttonText={'Delete'} handleClick={() => handleDelete(index)}/>
      </div>
    </div>
  )
}
