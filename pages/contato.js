import Head from "next/head";
import Menu from "../components/Menu";

function Contato(){
    return <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="site sobre ..." />
            <meta name="author" content="Rayson - Mendes" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>Rayson - Home</title>
        </Head>
       < Menu />
        Welcome to Next.js!
        </div>
}

export default Contato;