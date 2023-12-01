import { logo } from "../assets";

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img
                    src={logo}
                    alt="Sumz_logo"
                    className="w-28 object-contain"
                />
                <button
                    type="button"
                    onClick={() => {
                        window.open("https://github.com/VenkatRaman3103");
                    }}
                    className="black_btn"
                >
                    GitHub
                </button>
            </nav>
            <h1 className="head_text">
                Summarize Article with
                <br className="max-md:hidden" /><h2 className="orange_gradient">OpenAI GPT-4</h2>
            </h1>
            <h1 className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eveniet dignissimos cupiditate nam illum saepe ea sunt quis distinctio officiis at quaerat suscipit excepturi impedit. Saepe, quae. Optio, nisi dolorum?</h1>
        </header>
    );
};

export default Hero;
