import React from "react";
import Image1 from "../asset/logo.png"
import facebook from "../asset/facebook.png"
import twitter from "../asset/twitter.png"
import email from "../asset/email.png"

const Footer = () => {
    return (
        <div className="body grid justify-center items-end ">
    <div className="footer relative w-full h-auto">
        <div className="container-footer w-full grid pt-10 pb-10">
            <div className="ml-10">
                <h1 className="font-bold text-2xl relative mb-6">Tentang kami</h1>
                {/* <img src={(Image1)} className="w-6 h-6"></img> */}
                <p className="">Sumber pasir adalah Suplier bahan Bangunan yang menyediakan 
                segala jenis pasir dan batu untuk kebutuhan pembagunan rumah dan lain-lain.</p>
                <ul className="icon-footer mt-6 grid">
                    <li>
                        <a href="#">
                            <img src={(facebook)} className="w-6 h-6"></img>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={(twitter)} className="w-6 h-6"></img>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={(email)} className="w-8 h-8"></img>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="informasi-footer relative">
                <h1 className="font-bold text-2xl relative mb-6">Informasi</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Tentang Kami</a></li>
                    <li><a href="#">Produk</a></li>
                    <li><a href="#">Kontak</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Galery</a></li>
                </ul>
            </div>
            <div className="relative ml-56">
                <h1 className="font-bold text-2xl relative mb-6">Alamat kantor</h1>
                <p>Kemiri, Kabupaten Tangerang, Banten</p>
            </div>


        </div>
        <div className="copyRightText w-full text-white">
            <p className="">Copyright © 2024 Sumber Pasir | All Right Reserved by Ayu Wandira.</p>
        </div>
        </div>

        </div>
    )
}   

export default Footer