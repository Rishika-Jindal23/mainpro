// import "./add.scss";
// export default function AddPage() {
//     return (
//         <div className="add">
//             <h1>hello from Add component page</h1>
//         </div>
//     );
// }
import React from "react";
import styles from "./Add.module.scss"; // Assuming
// Assuming you're using CSS modules
// If you're using regular CSS, you can use import "./Add.scss";

const Add: React.FC = () => {
    return (
        <div className={styles.add}>
            <div className={styles.container}>
                <h1>Add New Sphere</h1>
                <div className={styles.sections}>
                    <div className={styles.info}>
                        <label htmlFor="">Title</label>
                        <input
                            type="text"
                            placeholder="e.g. I will do something I'm really good at"
                        />
                        <label htmlFor="">Category</label>
                        <select name="cats" id="cats">
                            <option value="design">Design</option>
                            <option value="web">Web Development</option>
                            <option value="animation">Animation</option>
                            <option value="music">Music</option>
                        </select>
                        <label htmlFor="">Cover Image</label>
                        <input type="file" />
                        <label htmlFor="">Upload Images</label>
                        <input type="file" multiple />
                        <label htmlFor="">Description</label>
                        <textarea
                            placeholder="Brief descriptions to introduce your service to customers"
                            cols={0}
                            rows={16}
                        ></textarea>
                        <button>Create</button>
                    </div>
                    <div className={styles.details}>
                        <label htmlFor="">Service Title</label>
                        <input
                            type="text"
                            placeholder="e.g. One-page web design"
                        />
                        <label htmlFor="">Short Description</label>
                        <textarea
                            placeholder="Short description of your service"
                            cols={30}
                            rows={10}
                        ></textarea>
                        <label htmlFor="">Delivery Time (e.g. 3 days)</label>
                        <input type="number" />
                        <label htmlFor="">Revision Number</label>
                        <input type="number" />
                        <label htmlFor="">Add Features</label>
                        <input type="text" placeholder="e.g. page design" />
                        <input type="text" placeholder="e.g. file uploading" />
                        <input
                            type="text"
                            placeholder="e.g. setting up a domain"
                        />
                        <input type="text" placeholder="e.g. hosting" />
                        <label htmlFor="">Price</label>
                        <input type="number" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;
