
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Home/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section>
            <SectionTitle header='FROM OUR MENU' subHeader='Check it out'>
            </SectionTitle>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-7">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4">Read More</button>
            </div>
        </section>
    );
};

export default PopularMenu;