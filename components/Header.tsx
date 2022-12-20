import Link from "next/link";

function Header() {
    return (
        <header>
            <div className="flex">
                <Link href="/">
                    <img className="w-44 object-contain cursor-pointer"
                    src="https://links.papareact.com/yvf"
                    alt=""
                    ></img>
                </Link>
            </div>
						<div className="hidden md:inline-flex items-center space-x-5">
							<h3> About </h3>
							<h3> Contact </h3>
							<h3 className="text-white bg-green-600 px-4 py-1 rounded-full"> Follow </h3>
						</div>
						<div className="flex items-center space-x-5 text-green-600">
							<h3> Sign In </h3>
							<h3> Get Started </h3>
					</div>
        </header>   
				
    );
}
export default Header;