import Button from '../shared/Button'
import ProfileIcon from '../shared/ProfileIcon'
import TextArea from '../shared/TextArea'

export default function Message() {
  return (
    <div className="mb-3 xl:w-96 mt-10">
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
