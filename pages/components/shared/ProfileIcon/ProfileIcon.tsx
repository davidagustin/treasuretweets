import Image from 'next/image'

export default function ProfileIcon({ image }) {
    return (
      <div>
        <Image src={image} alt="profile icon" width={50} height={50}/>
      </div>
    )
}
  