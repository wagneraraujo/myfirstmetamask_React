
import React, { useState, useEffect, createContext } from "react";


export const TransactionContext = createContext<any>('');

let eth: any;

if (typeof window !== 'undefined') {
  eth = window?.ethereum;
}

export const TransactionProvider = ({ children }: any) => {

  const [currentAccount, setCurrentAccount] = useState<any>(null)

  useEffect(()=> {
    checkIfWalletIsConnect()
  },[])


  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Instale a Metamask');

      const accounts = await metamask.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(accounts[0])
    }
    catch (err) {
      console.log('err', err)
      throw new Error('Não existe uma conte Etherium')
    }
  }


  const checkIfWalletIsConnect = async ( metamask = eth) =>{
    try{
      if(!metamask) return alert("Você precisa instalar a metamask")

      const accounts = await metamask.request({method: 'eth_accounts'})
      if(accounts.lenght){
        setCurrentAccount(accounts[0])
        console.log('carteira conecatada')
      }
    }
    catch (err){
      console.log('error =>', err)
      throw new Error("Nennhuma metamask");
      
    }

  }

  return (
    <TransactionContext.Provider value={{ currentAccount, connectWallet }}>
      {children}
    </TransactionContext.Provider>
  )



}




