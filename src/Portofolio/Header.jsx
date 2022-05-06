function Header() {
    return ( 
        <div className="lg:mb-24 my-12 lg:my-0 w-full">
            <svg className="absolute w-full h-auto top-0 left-0 overflow-hidden" id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="overflow-hidden"  fill="#0099ff" fillOpacity="0.7" d="M0,160L40,154.7C80,149,160,139,240,149.3C320,160,400,192,480,186.7C560,181,640,139,720,138.7C800,139,880,181,960,170.7C1040,160,1120,96,1200,74.7C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            <h1 className="relative text-5xl font-semibold z-10 pt-8">My Portofiolio</h1> 
        </div>
     );
}

export default Header;