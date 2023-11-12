import SectionTitle from "../../components/SectionTitle/SectionTitle";
import menuImg from '../../assets/home/featured.jpg'
import './FeatureMenu.css'
const FeatureMenu = () => {
    return (
        <div className="bg bg-fixed text-white pt-8 my-7">
            <SectionTitle subHeader='Check it out' header='FROM OUR MENU'
            ></SectionTitle>
            <div className="md:flex gap-6 p-16 items-center justify-center bg-slate-500 bg-opacity-20">
                <div>
                    <img src={menuImg} alt="" />
                </div>
                <div className="space-y-6">
                    <p className="text-2xl font-normal">March 20, 2023 <br /> WHERE CAN I GET SOME?</p>
                    <p className="text-xl font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureMenu;