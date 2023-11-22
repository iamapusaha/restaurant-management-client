import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
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