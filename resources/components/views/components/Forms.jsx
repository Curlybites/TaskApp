import React, { useEffect, useState } from "react";
import apiService from "../../Service/apiServices";

export default function Forms() {
    const [title, setTitle] = useState("");
    const [description, setDesctiption] = useState("");

    // for testing the output
    // useEffect(()=>{
    //     console.log(title, description)
    // },[title, description]);


    const handleSubmit = () => {
        apiService
            .post("save-task", {
                title,
                description,
            })
            .then(() => {
                setTitle("");
                setDesctiption("");
            })
            .catch((error) => {
                console.error("Error saving task:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 ">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                    placeholder="Title"
                    className="input input-bordered  w-full "
                />
                <textarea
                    value={description}
                    onChange={(event) => {
                        setDesctiption(event.target.value);
                    }}
                    className="textarea textarea-bordered min-h-52"
                    placeholder="Description"
                ></textarea>

                <button className="btn btn-primary">Save Task</button>
            </div>
        </form>
    );
}
