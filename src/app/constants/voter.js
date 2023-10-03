import React,{useEffect,useState} from 'react'
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import {create as ipfsHttpClient} from 'ipfs-http-client'
import axios from 'axios'
import { useRouter } from 'next/router';

import { abi2, CONTRACT_ADDRESS } from "../constants/index";
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const fetchContract = async (signerOrProvider) => 
    new ethers.Contract(CONTRACT_ADDRESS, abi2, signerOrProvider);

    export const VotingContext = React.createContext({});
    export const VotingProvider = ({children}) => {
        const votingTitle = "Voting";
        return (
            <VotingContext.Provider value={{votingTitle}}>
                {children}
            </VotingContext.Provider>
        );
        
    };

const Voter = () =>{
  return (
    <div>voter</div>
  );
};

export default Voter