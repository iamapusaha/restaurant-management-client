import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiousPublic from "../../../hooks/useAxiousPublic";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const axiousPublic = useAxiousPublic();
    const axiousSecure = useAxiousSecure();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imgFile = { image: data.image[0] }
        const res = await axiousPublic.post(image_hosting_api, imgFile, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        if (res.data.success) {
            reset()
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: data.price
            }
            const menuRes = await axiousSecure.post('/menu', menuItem)
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been added!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <div>
            <SectionTitle subHeader={"What's new?"} header={'ADD AN ITEM'} ></SectionTitle>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Recipe name" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-6">

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select  {...register("category", { required: true })} className="select select-bordered">
                            <option disabled value='default'>Category</option>
                            <option>salad</option>
                            <option>dessert</option>
                            <option>pizza</option>
                            <option>popular</option>
                            <option>drinks</option>
                            <option>soup</option>
                            <option>offered</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="price" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </div>
                <div>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>

                <button className="btn">
                    Add Item <FaUtensils className="ml-1"></FaUtensils>
                </button>
            </form>
        </div>
    );
};

export default AddItems;