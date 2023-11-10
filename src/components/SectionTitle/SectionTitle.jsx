

const SectionTitle = ({ header, subHeader }) => {
    return (
        <div className="mx-auto text-center w-4/12 my-5">
            <p className="text-xl font-normal text-[#D99904] mb-4">--{subHeader}--</p>
            <h2 className="text-4xl font-normal border-y-4 p-5">{header}</h2>
        </div>
    );
};

export default SectionTitle;