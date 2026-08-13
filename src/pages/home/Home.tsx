function Home() {

  return (

    <div
      style={{
        backgroundColor: "#312e81",
        display: "flex",
        justifyContent: "Center"
      }}>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          color: "white",
          maxWidth: "1280px"
        }}>

        {/* conteudo de texto*/}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem"
        }}>
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "bold"
          }}>Seja Bem-Vinde !</h2>

          <p style={{
            fontSize: "1.25rem"
          }}>Expresse aqui seus pensamentos</p>

          <div style= {{
            display: "flex",
            justifyContent: "space-around",
            gap: "1rem"
          }}>
            <div style={{
                borderRadius: "0.5rem",
                border: "2px solid white",
                padding: "0.5rem 1rem"
            }}>
              Nova Postagem
          </div>
          
          </div>
        </div>


        {/* Imagem da pagina home*/}
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <img
            src= "https://i.imgur.com/fyfri1v.png"
            alt="Imagem da pagina home"
            style={{
                width: "60%"
            }}/>
        </div>

      </div>

    </div>
  )
}

export default Home