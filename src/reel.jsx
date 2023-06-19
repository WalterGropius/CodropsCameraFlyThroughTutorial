  export default function Reel() {
    return (
      <>
      <video 
        src="https://zenbau.haus/reel_sm.mp4" 
        style={{width: '100%', height: '100vh', objectFit: 'cover', border: 'none'}}
        title="reel" 
        autoPlay 
        loop
        controls 
        muted>
      </video>
      <div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{color: 'white'}}>Hello, world!<br></br>im Eliáš Bauer a tech creative.<br></br>i make VFX,VR,AR,</h1>
      </div>
    </>
    );
  }

