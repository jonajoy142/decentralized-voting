"use client";
import React,{useEffect,useState} from 'react'
import Web3Modal from "web3modal";
import { ethers } from "ethers";
// import {create as ipfsHttpClient} from 'ipfs-http-client'
// import {ipfs-utils}
import axios from 'axios'
import { useRouter } from "next/navigation";
import { abi2, CONTRACT_ADDRESS } from "./index";
// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

const fetchContract = async (signerOrProvider) => 
    new ethers.Contract(CONTRACT_ADDRESS, abi2, signerOrProvider);
    export const VotingContext = React.createContext({});
    export const VotingProvider = ({children}) => {
        const votingTitle = "Voting Title";
        const router = useRouter();
        const [currentAccount,setCurrentAccount] = useState();
        const [candidateLength,seyCandidateLength] = useState();
        const pushCandidate = [];
        const candidateIndex = [];
        const [candidateArray,setCandidateArray] = useState(pushCandidate);
        //----------end of candidate data
        const [error,setError] = useState();
        const highestVote = [];
        //-----------voters section
        const pushVoter = [];
        const [voterLength,setVoterLength] = useState('');
        const [voterArray,setVoterArray] = useState(pushVoter);
        const [voterAddress,setVoterAddress] = useState([]);
        //-----------connect wallet
        const checkWalletConnected = async () => {
            if(!window.ethereum) return setError("MetaMask not found"); 
            const accounts = await window.ethereum.request({method:'eth_accounts'});
            if(accounts.length){
                const account = accounts[0];
                setCurrentAccount(account);
                // console.log(account);
            } else {
                setError("Please connect to MetaMask");
            }
        };
        //-----------connect wallet
        const connectWallet = async () => {
            try {
               if(!window.ethereum) return setError("MetaMask not found");
               const account = await window.ethereum.request({method:'eth_requestAccounts'});
                // console.log(account);
                setCurrentAccount(account[0]);
            } catch (error) {
                console.log(error);
            }
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = await fetchContract(signer);
                const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
                const account = accounts[0];
                setCurrentAccount(account);
                // console.log(account);
            } catch (error) {
                console.log(error);
            }
        };
        //-----------upload to ipfs voter img
        const uplaodToUPFS  = async (e) => {
            try{
             const addd = await client.add({content:file});
             const url = `https://ipfs.infura.io/ipfs/${added.path}`;
             return url;    
            } catch{
                setError("Error uploading image");
            }  
        };
        
        return (
            <VotingContext.Provider value={{votingTitle,connectWallet,checkWalletConnected}}>
                {children}
            </VotingContext.Provider>
        );
    };


// const Voter = () =>{
//   return (
//     <div>voter</div>
//   );
// };

export default VotingProvider