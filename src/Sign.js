const Sign = () => {
    return ( 

        <section className="">  
        <div className="container  col-5 sign">
    <form action="">


        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">Password</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        
      </form>
        
    </div>
    
    
    
    
    
    </section>

     );
}
 
export default Sign;