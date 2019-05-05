import React, { Component } from 'react';
import "./UserAgreement.css"

var height = window.screen.height;
class ReturnAgreement extends Component {
    constructor(props){
        super(props)
        this.state={
           
        }
    }
    render() {
      return (
          <div className="UserAgreement">
              <h2>KEBIJAKAN PENGEMBALIAN BARANG/DANA</h2>
              <ul className="ul_1">
                    <li>
                        <span>Permohonan untuk Pengembalian Barang/Dana </span>
                        <p>Dengan tunduk pada syarat dan ketentuan dalam Kebijakan Pengembalian Barang/Dana ini serta Syarat & Ketentuan, Pembeli dapat mengajukan permohonan untuk pengembalian barang yang dibeli ("Barang") dan/atau pengembalian uang dengan ketentuan-ketentuan yang diatur dalam Kebijakan Pengembalian Barang/Dana. </p>
                    </li>
                    <li>
                        <span>​Permohonan untuk Pengembalian Barang </span>
                        <p>Pembeli hanya boleh mengajukan permohonan pengembalian Barang dalam situasi berikut:</p>
                        <ul>
                            <li>Barang tersebut cacat dan/atau rusak saat diterima </li>
                            <li>Hamee telah mengirimkan Barang yang tidak sesuai dengan spesifikasi yang disepakati (misalnya salah ukuran, warna, dsb.) kepada Pembeli;</li>
                            <li>Barang yang dikirimkan kepada Pembeli secara material berbeda dari deskripsi yang diberikan oleh Hamee dalam daftar Barang; </li>
                        </ul>
                        <p>Selain dari alasan-alasan yang dikemukakan di atas, permohonan pengembalian barang tidak dapat diterima.  </p>
                        <p>Hamee akan meninjau setiap permohonan Pembeli kasus per kasus dan, atas kebijakannya sendiri, menentukan apakah permohonan Pembeli dapat diterima atau tidak. </p>
                    </li>
                    <li>
                        <span>Syarat Mengembalikan Barang </span>
                        <p>Untuk mengembalikan barang, Pembeli harus : </p>
                        <ul className="ul_2">
                            <li>
                                Mengirimkan email ke hamee.ecommerce@gmail.com dengan subyek “Pengembalian Barang” dan melampirkan data-data: 
                                <ul className="ul_3">
                                    <li>Nama pemesan </li>
                                    <li>Nomor order barang </li>
                                    <li>Alasan mengembalikan barang </li>
                                    <li>Menyertakan foto kondisi barang saat diterima </li>
                                </ul>
                            </li>
                            <li>
                                Setelah Hamee memverifikasi dan mengonfirmasi permohonan Pengembalian Barang, Pembeli dapat mengirimkan barang tersebut dalam batas waktu yang telah ditentukan oleh Hamee. 
                            </li>
                            <li>
                                Pembeli harus memastikan bahwa Barang harus dikembalikan ke Hamee dalam kondisi seperti yang diterima oleh Pembeli. Hamee akan melakukan verifikasi Barang dengan menyesuaikannya dengan foto Gambar saat Barang diterima. 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span> ​Biaya Mengembalikan Barang </span>
                        <p>
                            Biaya pengembalian Barang dengan alasan-alasan di atas akan ditanggung oleh Hamee. Untuk itu, pembeli yang melakukan Pengembalian Barang dapat mengirimkan email ke hamee.ecommerce@gmail.com dengan subyek “Biaya Mengembalikan Barang” dengan melampirkan data-data: 
                        </p>
                        <ul className="ul_3">
                            <li>Nama pemesan </li>
                            <li>Nomor order barang </li>
                            <li>Jenis barang yang dikembalikan </li>
                            <li>Nomor resi pengembalian barang (serta foto bukti resi) </li>
                            <li>No rekening yang digunakan untuk menerima biaya Pengembalian Barang </li>
                        </ul>
                    </li>
                    <li>
                        <span>Pengembalian Dana </span>
                        <p>Uang Pembeli hanya akan dikembalikan setelah Hamee apabila barang pengganti tidak tersedia sesuai dengan detail pemesanan. Konfirmasi tertulis mengenai hal ini akan dikirimkan Hamee lewat email resmi kepada Pembeli. </p> 
                            <p>Proses Pengembalian Dana akan dilakukan maksimal dalam 7 hari kerja setelah Hamee menerima informasi rekening Pembeli untuk Pengembalian Dana. </p>
                    </li>
              </ul>
          </div>
      )
    }
}

export default ReturnAgreement;