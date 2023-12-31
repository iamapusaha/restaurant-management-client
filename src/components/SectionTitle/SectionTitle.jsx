

const SectionTitle = ({ header, subHeader }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 w-6/12 my-5">
            <p className="text-xl font-normal text-[#D99904] mb-4">--{subHeader}--</p>
            <h2 className="text-4xl font-normal border-y-4 md:p-5 p-0">{header}</h2>
        </div>
    );
};

export default SectionTitle;