import Image from 'next/image';

interface ProfileIcon {
  image: string;
}

export default function ProfileIcon({ image }: ProfileIcon) {
    return (
      <div>
        <Image src={image} alt="profile icon" width={50} height={50}/>
      </div>
    )
}
  