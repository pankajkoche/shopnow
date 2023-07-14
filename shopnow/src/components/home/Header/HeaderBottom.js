import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Flex from "../../layouts/Flex";
import { Link, useNavigate } from "react-router-dom";


const HeaderBottom = () => {
    return (
        <div className="w-full bg-[#f5f5f3] relative ">   
            <div className="max-w-container mx-auto">
                <Flex className='flex flex-col lg:flex-row items-start lg:items-center w-full px-4 pb-4 lg:pb-0 h-full lg:h-24'>

                </Flex>
            </div>
        </div>
    );
};

export default HeaderBottom;