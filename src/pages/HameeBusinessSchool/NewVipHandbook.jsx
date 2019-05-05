import React, { Component } from 'react';

class NewVipHandbook extends Component {
    render(){
        return(
            <div style={styles.NewVipHandbookBox}>
                <div style={styles.centerStyle}>
                    <h2>Mendaftar Sebagai Member Hamee</h2>
                    <h4>Penulis：Hamee  2019-03-07</h4>
                </div>
                <div>
                    <ul style={{listStyle:'upper-roman',paddingInlineStart: 15}}>
                        <li style={styles.li_1_styls}>
                            <p style={styles.pTitle}>Bergabung dengan keluarga Hamee dengan menjadi member Hamee</p>
                            <p style={styles.pStyle}>
                                Referal code adalah nama yang anda pilih atau kode yang anda masukkan pada saat anda mendaftar menjadi user dan akan digunakaan saat anda membeli paket hadiah member.
                                Member Downline adalah Member yang membeli paket hadiah member dengan menggunakan link yang di bagikan oleh uplinenya.
                            </p>
                        </li>
                        <li style={styles.li_1_styls}>
                            <p style={styles.pTitle}>Cara Menjadi Member Hamee</p>
                            <p style={styles.pStyle}>Cara pertama menjadi Member Hamee：</p>
                            <ul style={styles.ul_2_Style}>
                                <li>
                                Dengan mengklik link undangan Membership
                                </li>
                                <li>
                                Bisa juga dengan langsung mengklik Join Hamee Membership pada halaman utama aplikasi
                                </li>
                                <li>
                                Kemudian klik tombol “beli paket reseller” yang ada di bawah layar handphone anda
                                </li>
                                <li>
                                Anda akan langsung terlompatkan ke bagian daftar produk Paket Hadiah Member, dari situ anda dapat memilih salah satu produk favorit anda (anda hanya dapat membeli satu buah produk paket hadiah member ini)
                                </li>
                                <li>
                                Bila telah memilih produk mana yang anda sukai silakan lanjutkan ke proses pembayaran dengan mengklik produk kemudian klik tombol “Beli Sekarang” (bila anda belum terdaftar atau log in maka akan ada halaman untuk anda segera daftar dan log in sebelum melanjutkan transaksi)
                                </li>
                                <li>
                                Saat mendaftar pastikan anda masukkan kode referral yang benar
                                </li>
                                <li>
                                Jangan lupa untuk mengisi alamat lengkap untuk pengiriman produk yang anda beli sebelum melanjutkan ke proses pembayaran
                                </li>
                                <li>
                                Lanjutkan transaksi anda dan klik tombol “bayar sekarang”
                                </li>
                                <li>
                                Masukkan data yang di perlukan untuk pembayaran, dan setelah berhasil akan muncul berita di layar anda bahwa transaksi anda berhasil. Selamat anda telah menjadi member Hamee
                                </li>
                            </ul>
                            <p style={styles.pStyle}>Cara kedua menjadi member Hamee:</p>
                            <p style={styles.pStyle}>Dapat langsung melalui aplikasi yang telah anda download, kemudian klik banner Join Hamee Membership</p>
                        </li>
                        <li style={styles.li_1_styls}>
                            <p style={styles.pTitle}>Bagaimana mengembangkan anggota downline Anda sendiri</p>
                            <p style={styles.pStyle}>
                                Syarat untuk memiliki downline: User Hamee harus menjadi Member terlebih dahulu agar dapat memiliki downline sendiri
                            </p>
                            <ul style={styles.ul_2_Style}>
                                <li>Bila telah resmi terdaftar sebagai “Member” hamee, di aplikasi anda akan muncul menu ke empat berbentuk Mahkota</li>
                                <li>Klik menu dengan icon Mahkota tersebut, dan klik tombol “ajak teman” kemudian bagikan link ke teman mu dengan mengklik “share” yang terletak di ujung kanan atas layar handphone anda</li>
                                <li>
                                Link yang anda bagikan ke teman anda akan mengarahkan teman anda untuk membeli “Paket Hadiah Member” sehingga mereka juga akan menjadi member resmi hamee dan anada akan mendapatkan komisi bila teman anda telah resmi menjadi member hamee melalui link yang anda bagikan tadi
                                <p style={styles.pTitle}>Catatan: Pastikan untuk "bagikan link sendiri" dari menu “Member” yang berbentuk mahkota agar teman anda menjadi downline anda.</p>
                                </li>
                                <li>
                                Tetapi bila teman anda telah menjadi member, maka teman anda tidak bisa membeli “Paket Hadiah Reseller” tersebut untuk kedua kalinya. Pada saat membeli akan muncuk notifikasi bahwa anda telah menjadi anggota member hamee
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const styles={
    NewVipHandbookBox:{
        padding:12,
    },
    centerStyle:{
        textAlign:'center'
    },
    ul_2_Style:{
        listStyle:'decimal',
        paddingInlineStart: 12
    },
    pTitle:{
        fontSize:14,
        color:'#000',
        fontWeight:'600',
        lineHeight:1.5,
        marginBottom:0
    },
    pStyle:{
        fontSize:14,
        textIndent:15,
        fontWeight:'400',
        lineHeight:1.5,
        marginBottom:0
    },
    li_1_styls:{
        marginBottom:10
    }
}

export default NewVipHandbook;