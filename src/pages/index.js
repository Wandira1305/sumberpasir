import * as React from "react"
import Footer from "../components/Footer"
import image1 from "../asset/logo1.png"
import gratisOngkir from "../asset/gratisongkir.png"
import muatan from "../asset/barang.png"
import cod from "../asset/cod.png"
import produk from "../asset/batuscreening.png"
import produk1 from "../asset/batusplit.png"
// import produk2 from "../asset/pasir rangkas.png"
// import produk3 from "../asset/batu sirdam.png"
import customer1 from "../asset/cs1.png"
// import customer2 from "../asset/cs2.png"
import customer3 from "../asset/cs3.png"
import customer4 from "../asset/cs4.png"

const IndexPage = () => {
  return (
   
    // Section home
    <div>
      <section className="home w-screen h-screen">
        <div className=" header absolute w-full flex justify-between items-center ">
          <a href="#" className="logoNavbar">
            <img src={(image1)} className="logo w-40 h-16 absolute "></img>
            {/* <p className="textLogo absolute text-white text-2xl font-black tracking-widest">Sumber Pasir</p> */}
          </a>
          <div></div>
          <nav className="navbar">
            <ul className="relative text-white mt-5">
              <li className="list"><a href="#">Home</a></li>
              <li className="list"><a href="#">Tentang Kami</a></li>
              <li className="list"><a href="#">Produk ▾</a>
               <ul className="">
                <li className="produk"><a href="#">Batu</a></li>
                <li className="produk"><a href="#">Pasir</a></li>
               </ul>
              </li>
              <li className="list"><a href="#">Kontak</a></li>
              <li className="list"><a href="#">Blog</a></li>
             
                <button>
                  <li><a className="galery" href="#">Galery</a></li>
                </button>
             
            </ul>

          </nav>
        </div>
            <div className="text justify-center items-center text-center text-white">
              <p className=" font-bold text-2xl pt-52">Sumber Pasir</p>
              <h1 className="judul font-bold text-7xl">Supplier Pasir dan Batu</h1>
              <h1 className="judul font-bold text-7xl mb-3">Kemiri</h1>
              <p className="mb-20">Aman Dan Terpercaya Siap Kirim ke Berbagai Daerah</p>
              
              <a className="tombol_menu text-white justify-center text-center items-center p-6" href="#">Hubungi Kami</a>
            </div>
      
          
      
      </section>


      {/* SECTION ALASAN */}

      <section className="alasan-section" id="alasan-section">
            <div className=" justify-center flex ">
              <h1 className=" mt-40 text-4xl font-bold">Kenapa Harus Beli di Sumber Pasir ?</h1>
            </div>

            <div className="card flex justify-center items-center flex-wrap gap-8">
                <div className="cardBox text-center">
                  <img src={(gratisOngkir)} className="img-ongkir"></img>
                  <h1 className="cardText font-bold">Free Ongkos Kirim</h1>
                  <p className="mt-6">Harga lebih murah jika dekat dengan lokasi Kami, di nego aja !</p>
                </div>
                <div className="cardBox text-center">
                  <img src={(muatan)} className="img-muatan"></img>
                  <h1 className="cardText font-bold">Gratis Bongkar Muat</h1>
                  <p className="mt-6">Tidak ada biaya tambahan lainnya, langsung kita bongkar muatan</p>
                </div>
                <div className="cardBox text-center">
                  <img src={(cod)} className="img-cod"></img>
                  <h1 className="cardText font-bold">Bayar di Tempat COD</h1>
                  <p className="mt-6">Pembayaran Aman & nyaman bisa langsung di lokasi tujuan.</p>
                </div>
            </div>
       
      </section>

      {/* SECTION  PRODUK*/}

    <section className="produk-section">
      <div className="justify-center items-center text-center">
        <h1 className="mt-20 mb-10 text-4xl font-bold">Produk Terlaris</h1>
        <p>Butuh pasir segera? Langsung hubungi SUMBERPASIR! Melayani segala </p>
          <p>kebutuhan konstruksi seperti pasir,
           batu, dan juga lainnya. Pengiriman</p>
        <p>dilakukan di hari yang sama dengan hari pemesanan. Pesan pasir di </p>
           <p>SUMBER PASIR dijamin anti worry!.</p>
      </div>

      <div className="card mt-10 flex justify-center items-center text-center flex-wrap gap-4">
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk)} className="img-produk w-full h-full"></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk1)} className="img-produk w-full h-full"></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk)} className="img-produk w-full h-full "></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk1)} className="img-produk w-full h-full "></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk)} className="img-produk w-full h-full "></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk1)} className="img-produk w-full h-full "></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk)} className="img-produk w-full h-full "></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk1)} className="img-produk w-full h-full "></img>
                </a>


            </div>
                <div className=" justify-center items-center flex mt-10 mb-10">
                  <a href="#" className="btn-produk flex justify-center items-center text-center w-40 h-16 rounded-3xl text-white">
                    EXPLORE MORE
                  </a>
              </div>
    </section> 

    {/* SECTION CLOSING */}

    <section className="closing"> 
<div className="closing-first flex items-center">
      <div className="img-logo pt-10 pb-10">
        <img className="w-56 h-20 mt-5 mb-5 ml-28 mr-40" src={(image1)} alt="Gambar" />
      </div>
      <div className="text-logo mr-40">
        <h1 className="text-4xl font-bold mb-6">Tentang Kami</h1>
        <p><b>Sumber pasir</b> adalah Suplier bahan Bangunan yang menyediakan segala jenis pasir dan batu untuk kebutuhan pembagunan rumah dan lain-lain.
                 System pembayaran bisa melalui COD “Barang sampai langsung bayar”</p>
      </div>
    </div>
    <div className="text-produk justify-center item-center text-center">
        <h1 className="text-4xl font-bold mt-20 ">Produk Kami</h1>
      </div>

      <div className="card-closing mt-10 flex justify-center items-center text-center flex-wrap gap-4">
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk)} className="img-produk w-full h-full "></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk1)} className="img-produk w-full h-full "></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk)} className="img-produk w-full h-full "></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk1)} className="img-produk w-full h-full "></img>
                </a>

        <div className="closing-cta mt-20 mb-52 ml-56 mr-40 justify-center align-center bg-white rounded-2xl">
          <div className="ml-10 pt-10 text-left">
          <h1 className="h1-cta font-bold text-3xl mb-5 pb-">Hubungi Kami Segera</h1>
          <p className="p-cta font-bold">Untuk informasi mengenai Harga Pasir & Harga Batu terbaru.</p>
          <a href="#" className="btn-cta justify-center align-center flex ">
              081388230020
          </a>
          </div>
        </div>
        </div>

        <div className="text-cus justify-center item-center text-center">
          <h1 className="text-4xl font-bold mt-20 ">Customer Kami</h1>
        </div>

        <div className="closing-customer flex justify-center items-center text-center flex-wrap gap-4">
          <div className="card-customer">
             <img src={(customer1)} className="img-customer w-full h-full"></img>
          </div>
          <div className="card-customer">
             <img src={(customer3)} className="img-customer w-full h-full"></img>
          </div>
          <div className="card-customer">
             <img src={(customer4)} className="img-customer w-full h-full"></img>
          </div>

        </div>
    


    </section>

    <Footer/>
    </div> 

    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>