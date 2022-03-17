import Button from '../shared/Button'
import ProfileIcon from '../shared/ProfileIcon'
import TextArea from '../shared/TextArea'

export default function MessageInput() {
  return (
    <div className="mb-3 mt-10">
        <div className="flex">
            <div className="mt-10">
                <ProfileIcon image={'/favicon.webp'}/>
            </div>
            <TextArea />
        </div>
        <div className="flex justify-end">
            <Button buttonText={'Tweet'}/>
        </div>
    </div>
  )
}
