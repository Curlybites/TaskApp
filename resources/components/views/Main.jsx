import React, { useEffect, useState } from "react";
import Form from "../views/components/Forms";
import Navbar from "./components/Navbar";
import apiService from "../Service/apiServices"; // Ensure the path is correct
import Footer from "./components/Footer";

import Site from "./components/Site";
import Alex from './components/Alex';

export default function Main() {
    const [tasks, setTasks] = useState([]);

    const [isScrolled, setIsScrolled] = useState(false);

    const fetchTasks = async () => {
        try {
            const response = await apiService.get("/get-task");
            console.log("Response:", response); // Log the entire response
            console.log("Response data:", response.data); // Log response data
            setTasks(response.data.data); // Assuming response.data.data contains the task list
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/20 via-pink-600/25 to-blue-600/20  ">
            <Navbar />

            <div className="h-full ">
                <div className="flex gap-20 justify-evenly lg:flex-row lg:mx-40 lg:my-40 lg:text-start  xsm:flex-col  xsm:items-center xsm:text-center xsm:mt-10">
                    <div className={` lg:w-6/12 xsm:w-4/5 `}>
                        <div className="mb-6 ">
                            <div className="lg:text-4xl font-semibold tracking-wider 00 mb-1 xsm:text-2xl ">
                                TASK APP
                            </div>
                            <div className="text-sm tracking-wider leading-5 font-light ">
                                A Combination of React + Laravel
                            </div>
                        </div>
                        <Form />
                    </div>
                    <div className="lg:w-6/12 p-5 xsm:w-12/12 ">
                        <div className="mb-4 ">
                            <div className="lg:text-4xl font-semibold tracking-wider  xsm:text-2xl">
                                TASK
                            </div>
                        </div>
                        <div className="max-h-[21rem] overflow-y-auto ">
                            {tasks.map((task) => (
                                <div
                                    className="flex flex-col m-2 z-0 "
                                    key={task.id}
                                >
                                    <div
                                        className="collapse collapse-arrow bg-base-100 border border-slate-700 "
                                        key={task.id}
                                    >
                                        <input
                                            type="radio"
                                            name="my-accordion-2"
                                            defaultChecked
                                        />
                                        <div className="collapse-title lg:text-xl font-medium xsm:text-sm xsm:text-start">
                                            {task.title}
                                        </div>
                                        <div className="collapse-content">
                                            <p className="xsm:text-sm xsm:text-start">
                                                {task.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Site />
            <Alex/>
            <Footer />
        </div>
    );
}
