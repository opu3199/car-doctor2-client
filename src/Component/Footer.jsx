

const Footer = () => {
    return (
        <div>
        <footer data-aos="fade-up-right" className="footer p-10 bg-fuchsia-950 text-neutral-content">
  <nav>
    <header className="footer-title">Brand Name</header> 
    <a className="link link-hover">Apple</a>
    <a className="link link-hover">Samsung</a>
    <a className="link link-hover">Walton</a>
    <a className="link link-hover">Singer</a>
    <a className="link link-hover">Sony</a>
    <a className="link link-hover">Google</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

  <nav>
    <header className="footer-title">Sign up & get 10% off your next order</header> 
    <input className="p-2" type="email" name="" placeholder="email" id="" />
    <button className="bg-red-300 p-2 rounded-md">Subscribe</button>
    <div className="flex gap-5">
      <a href="https://www.facebook.com/">Facebook</a>
      <a href="">Instragram</a>
      <a href="">Twitter</a>
    </div>
  </nav>
  
</footer>
  </div>
    );
};

export default Footer;