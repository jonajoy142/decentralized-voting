"use client"
import React,{useState,useEffect,useCallback,useContext} from 'react'
import {useRouter} from 'next/navigation';
import {useDropzone} from 'react-dropzone'
import Image from 'next/image'

import { VotingContext } from '../constants/voter';
// import Style from './page.module.css'
// import images from "../../../public/assets"
// import Button from '@/components/Button/Button'
import Input from '@/components/Input/input'
const allowedVoters =() =>{
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, setFormInput] = useState({
    name: '',
    address: '',
    position: '',
  });
  const router = useRouter();
  const {uploadToIPFS} = useContext(VotingContext);

  const onDrop = useCallback(async (acceptedFiles) => {
    const url = await uploadToIPFS(acceptedFiles[0]);
    setFileUrl(url);
  })
 
  const {getRootProps,getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,
})

return (
    <div className=''>
     <div>
        {
            !fileUrl &&(
              <div>
                <img src = {fileUrl} alt="Voter Image"/>
                <div>
                    <p className='text-amber-300'>
                        Name: {formInput.name}
                    </p>
                    <p className='text-amber-300'>
                        Address:{formInput.address.slice(0,10)}
                    </p>
                    <p className='text-amber-300'>
                        Pos:{formInput.position}
                    </p>
                </div>
              </div>
            )
        }

        {
            !fileUrl &&(
                <div>
                    <div >
                        <h4>Create candidate for voting</h4>
                        <p>Blockchain voting, provide ethereum</p>
                        <p>Contract Candidate</p>
                    </div>
                    <div>
                        {/* {voterArray.map((voter,index)=>(
                            <div key={index + 1}>
                               <div>
                                <img src="" alt="profile pic" />
                               </div>
                               <div>
                                <p>Name</p>
                                <p>Address</p>
                                <p>Details</p>
                               </div>
                            </div>
                        ))} */}
                            
                        
                    </div>
                </div>
            )
        }
     </div>
     <div>
        <div>
            <h1>Create New Voter</h1>
            <div>
                <div>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div>
                            <p>Upload File:JPG,PNG..</p>
                            <div>
                                <Image src={Image.creator} alt="upload" width={50} height={50} />
                            </div>
                            <p>Drag and Drop File</p>
                            <p>or Browsw media on your device</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Input inputType="text" title="Name" handleClick={(e) => setFormInput({...formInput,name:e.target.value})}/>
            <Input inputType="text" title="Address" handleClick={(e) => setFormInput({...formInput,address:e.target.value})}/>
            <Input inputType="text" title="Position" handleClick={(e) => setFormInput({...formInput,position:e.target.value})}/>
        </div>
     </div>
    </div>
);
};

export default allowedVoters