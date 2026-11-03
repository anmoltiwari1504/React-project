  import { Unlock } from "lucide-react"
  import ClientInfo from "./ClientInfo"
  import Community from "./Community"
  import Hero from "./Hero"
  import Achivement from "./Achivement"
  import Mobileinfo from "./Mobileinfo"
  import Tesla from "./Tesla"
  import Update from "./Update"
  import Authform from "./Authform"



  function Home({ show , setShow }) {
    
    return (
      <>



        <Hero setShow ={setShow} />
        {show && <Authform setShowsetRegister ={setShow } />}

        <ClientInfo />
        <Community />
        <Unlock />
        <Achivement />
        <Mobileinfo />
        <Tesla />
        <Update />
      </>
    )
  }

  export default Home
