import { Empire } from "../utils/Empire";

const UploadJson = ({
  handleChangeFiles,
}: {
  handleChangeFiles: (e: Empire) => void;
}) => {
  const handleChange = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      // @ts-ignore
      handleChangeFiles(e.target.result);
    };
  };
  return (
    <>
      <input type="file" onChange={handleChange} />
    </>
  );
};
export default UploadJson;
