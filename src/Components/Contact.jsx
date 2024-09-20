const Contact = () => {


    return (
      <div className="contact-sec">

        <div className="line-text act">
                <div className="line2"></div>
                <h5>Contact</h5>
        </div>

        <div className="inside-sec">


            <div className="input-sec">
                <form action="">
                    <input type="text" placeholder="Name" readonly />
                    <input type="text" placeholder="Email." readonly />
                    <input type="text" placeholder="Message" readonly />
                </form>
                <button className="btn">Send</button>
            </div>


            <div className="images-sec">
                <div className="sec1">
                <img 
                    src="../public/Rectangle 49.png" 
                    alt="Portfolio"  
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                lectus tortor, dignissim sit amet, adipiscing. </p>
                </div>

                <div className="sec2">
                    <img className="img1"
                        src="../public/Component 11.png" 
                        alt="Portfolio"  
                    />
                    <img className="img2"
                        src="../public/Rectangle 50.png" 
                        alt="Portfolio"  
                    />
                </div>
            </div>
        </div>

      </div>
    );
  };
  
  export default Contact;
  