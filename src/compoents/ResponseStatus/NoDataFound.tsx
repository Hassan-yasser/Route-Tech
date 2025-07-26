import { IoAlertCircleOutline } from "react-icons/io5";

const NoDataFound = ({ meesage }: { meesage: string }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 text-gray-500 w-full col-span-full">
      <IoAlertCircleOutline size={48} className="mb-3 text-gray-400" />
      <p className="text-lg sm:text-xl font-medium capitalize">{meesage}</p>
    </div>
  );
};

export default NoDataFound;
