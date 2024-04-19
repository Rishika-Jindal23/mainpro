import axios from "axios";

const upload = async (file: File): Promise<string | undefined> => {
    const data = new FormData();
    const cloudName = "rishika1"; // Replace "YourCloudName" with your Cloudinary cloud name
    const apiKey = "362978728753584"; // Replace "YourAPIKey" with your Cloudinary API Key
    data.append("file", file);
    data.append("upload_preset", "skillsphere");
    //console.log([...data.entries()]);

    try {
        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/rishika1/image/upload",
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                params: {
                    api_key: apiKey,
                },
            }
        );

        const { url } = res.data;
        return url;
    } catch (err) {
        console.error("Error uploading image:", err);
    }
};
export default upload;
