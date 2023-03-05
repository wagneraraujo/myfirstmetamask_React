import { useContext, useState } from 'react'
import './App.css'
import { TransactionContext } from "./context/TransactionContext";

function App() {
  const [count, setCount] = useState(0)
  const { connectWallet, currentAccount } = useContext(TransactionContext)

  console.log({connectWallet, currentAccount})
  return (
    <div className="App">
      <div>
        {currentAccount ? (
          <div>

            <div className="enderecoMeta">{currentAccount}</div>
            <button className="buttonSair">Sair</button>
          </div>
        ): (
 <button onClick={() => connectWallet()}> === Connect Wallet</button>
        )}
       
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h3>Metamask Etherium</h3>
      <div className="configHeader">
        <h6>Swap</h6>
        <button>Configurações</button>

      </div>
      <div className="card">
        <div className="form">

          <div className="itemInput">
            <input type="number" placeholder='0.0' />
            <div className="itemDrop">
              ETH
            </div>
          </div>
          <div className="itemInput">
            <input type="text" placeholder='0xxxxxx' />
          </div>


        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          Confirmar transação
        </button>
      </div>
    </div>
  )
}

export default App
