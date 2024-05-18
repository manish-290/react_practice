export default function Bio() {
    return (
        //i put in the fragment operator here
      <div>
      {/* i used className instead pf class due to rreservd word */}
         <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br/><br/>
        <b>And <i>pictures</i></b>of scientists!
      </p>
      </div>
     
    );
  }