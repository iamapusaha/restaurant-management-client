import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[700px] mb-7">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold text-white">{title}</h1>
                        <p className="mb-5 text-2xl font-semibold">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;