import React, { MouseEvent, useRef, useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { ImVideoCamera } from 'react-icons/im';
import { BsFillEmojiLaughingFill, BsImages } from 'react-icons/bs';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const InputCont = () => {
  const { data: session } = useSession() as any;
  const filePickerRef = useRef<any>();
  const [selectedFile, setSelectedFile] = useState<any>();

  const addImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent: ProgressEvent<FileReader>) {
      setSelectedFile(onLoadEvent.target?.result);
    };

    if (!e.target.files) return;

    reader.readAsDataURL(e.target.files[0]);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'strider-uploads');

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/dpccnccr0/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    ).then((res) => res.json());
    console.log(data);
  };

  return (
    <form className='w-full bg-[#1a1a1a] rounded-md'>
      <div className='flex items-center mx-3 mt-5 py-3 border-b border-[#404040]'>
        {session && (
          <Image
            src={session.user?.image}
            alt='fb'
            height={30}
            width={30}
            className='header__icon'
          />
        )}
        <input
          type='text'
          placeholder={`What is on your mind, ${
            session.user.name.split(' ')[0]
          }?`}
          className='bg-[#333] outline-none text-sm py-1.5 px-3 flex-1 rounded-full mx-2'
        />
      </div>
      <div className='flex items-center w-full justify-between px-4'>
        <div className='iconDiv group'>
          <ImVideoCamera className='inputCont__icon text-red-500' />
          <h1 className='inputCont__text'>Video live</h1>
        </div>
        <div
          className='iconDiv group'
          onClick={() => filePickerRef.current.click()}
        >
          <BsImages className='inputCont__icon text-green-500' />

          <input type='file' onChange={addImage} hidden ref={filePickerRef} />

          <h1 className='inputCont__text'>Photo/Video</h1>
        </div>
        <div className='iconDiv group'>
          <BsFillEmojiLaughingFill className='inputCont__icon text-yellow-500' />
          <h1 className='inputCont__text'>Feeling/Activity</h1>
        </div>
      </div>
    </form>
  );
};

export default InputCont;
