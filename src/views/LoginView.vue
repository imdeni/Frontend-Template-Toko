
<script>
import axios from "axios";


export default {
  data() {
    return {
      getApiServer:"http://localhost:8000/api/",
      form: { 
        username:"",
        password:"",
        password2:"",
        register:"hide",
      },
      
    }
  },
  methods: {
    Login_cek() {
        if(this.form.username!="" && this.form.password!=""){
        axios.post(this.getApiServer + "cek_login/login", this.form)
        .then((response) => {
          if(response.data.data.length=='1'){
            alert("Berhasil Login");
            this.$router.push('dashboard');            
          }else{
            alert("Username atau password salah");
            this.form.password="";
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }else{
        alert("Username atau password tidak boleh kosong");
        this.form.password="";
      }
    },
    Register_user(){
      if(this.form.username!="" && this.form.password!="" && this.form.password2!=""){
        if(this.form.password==this.form.password2){
          axios.post(this.getApiServer + "register/user", this.form)
            .then((response) => {
              console.log(response.data);
              if(response.data.status=='1'){
                alert("Berhasil Disimpan");
                this.form.password="";
                this.form.password2="";
                this.form.username="";
                this.$router.push('/');            
              }else{
                alert("Gagal disimpan / akun sudah ada");
                this.form.password="";
                this.form.password2="";
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }else{
          alert("Password harus sama");
        }
      }else{
        alert("Username atau password tidak boleh kosong");
      }
    },
    Register() {
        this.form.register="show";
        this.form.username="";
        this.form.password="";
        this.form.password2="";
    },
    Login(){
      this.form.register="hide";
      this.form.username="";
      this.form.password="";
      this.form.password2="";
    }
  },
}
</script>

<template>
    <div class="grid place-items-center h-screen sm:pl-8 sm:pr-8">
        <img class="fixed z-0 backgroundnya hidden sm:block" src="https://th.bing.com/th/id/R.baf51bb03cb347bace9fa11df583c01f?rik=18pAtlGASLDf0w&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fart-transparent-background%2fart-transparent-background-1.png&ehk=CkCZEPqxppKZ2WC0ATWJiPnjUT8eWZGqMwcWkQ5dIFQ%3d&risl=1&pid=ImgRaw&r=0" alt="">
        
        <div v-if="(this.form.register=='hide')" class="z-50 lg:w-[768px] md:w-[640px] sm:w-full bg-gradient-to-t from-blue-400 to-blue-700 rounded-xl h-fit">
          <p class="text-center font-bold pt-2 pb-2 text-2xl text-white">Silahkan Login</p>  
          <div class="grid grid-rows-3 gap-2 mr-8 ml-8 pb-2 pt-2">
              
                <div class="grid grid-cols-[75px_minmax(1px,1px)_150px] sm:grid-cols-[82px_minmax(1px,1px)_auto] gap-4 h-6 text-base sm:text-lg md:text-xl">
                    <p class="font-bold text-white text-left">Username</p>
                    <p class="font-bold text-white">:</p>
                    <input v-model="form.username" type="text" placeholder="Max 12 huruf" :maxlength="12" class="block rounded-lg text-slate-500 font-bold pl-2 pr-2 text-md sm:text-base md:text-lg"/>
                </div>

                <div class="grid grid-cols-[75px_minmax(1px,1px)_150px] sm:grid-cols-[82px_minmax(1px,1px)_auto] gap-4 h-6 text-base sm:text-lg md:text-xl">
                    <p class="font-bold text-white">Password</p>
                    <p class="font-bold text-white">:</p>
                    <input v-model="form.password" placeholder="Max 10 huruf" :maxlength="10" type="password" class="block rounded-lg text-slate-500 font-bold pl-2 pr-2 text-md sm:text-base md:text-lg"/>
                </div>

                <div class="grid grid-cols-2 gap-4 text-base sm:text-lg md:text-xl font-bold text-white pb-2">
                    <button class="bg-blue-500 rounded-lg hover:bg-blue-700 p-1" v-on:click="Login_cek()">Login</button>
                    <button class="bg-blue-500 rounded-lg hover:bg-blue-700" v-on:click="Register()">Buat akun</button>
                </div>

          </div>
        </div>
        
        <div v-if="(this.form.register=='show')" class="z-50 lg:w-[768px] md:w-[640px] sm:w-full bg-gradient-to-t from-blue-400 to-blue-700 rounded-xl h-fit">
          <p class="text-center font-bold pt-2 pb-2 text-2xl text-white">Buat Akun</p>  
          <div class="grid grid-rows-4 mr-8 ml-8 pb-2 pt-2">
                
                <div class="grid grid-cols-[75px_minmax(1px,1px)_150px] sm:grid-cols-[82px_minmax(1px,1px)_auto] gap-4 h-6 text-base sm:text-lg md:text-xl">
                    <p class="font-bold text-white text-left">Username</p>
                    <p class="font-bold text-white">:</p>
                    <input v-model="form.username" type="text" placeholder="Max 12 huruf" :maxlength="12" class="block rounded-lg text-slate-500 font-bold pl-2 pr-2 text-md sm:text-base md:text-lg"/>
                </div>

                <div class="grid grid-cols-[75px_minmax(1px,1px)_150px] sm:grid-cols-[82px_minmax(1px,1px)_auto] gap-4 h-6 text-base sm:text-lg md:text-xl">
                    <p class="font-bold text-white">Password</p>
                    <p class="font-bold text-white">:</p>
                    <input v-model="form.password" placeholder="Max 10 huruf" :maxlength="10" type="password" class="block rounded-lg text-slate-500 font-bold pl-2 pr-2 text-md sm:text-base md:text-lg"/>
                </div>

                <div class="grid grid-cols-[75px_minmax(1px,1px)_150px] sm:grid-cols-[82px_minmax(1px,1px)_auto] gap-4 h-6 text-base sm:text-lg md:text-xl">
                    <p class="font-bold text-white">Password</p>
                    <p class="font-bold text-white">:</p>
                    <input v-model="form.password2" placeholder="Input ulang password" :maxlength="10" type="password" class="block rounded-lg text-slate-500 font-bold pl-2 pr-2 text-md sm:text-base md:text-lg"/>
                </div>

                <div class="grid grid-cols-2 gap-4 text-base sm:text-lg md:text-xl font-bold text-white pb-2">
                    <button class="bg-blue-500 rounded-lg hover:bg-blue-700 p-1" v-on:click="Login()">Kembali</button>
                    <button class="bg-blue-500 rounded-lg hover:bg-blue-700" v-on:click="Register_user()">Simpan</button>
                </div>
 
          </div>
        </div>

  </div>
</template>

<style>
.backgroundnya{
    opacity: 20%;
    -webkit-opacity: 20%;
    transition: all .2s ease-in-out;
    -webkit-transition: all .2s ease-in-out;
}
.backgroundnya:hover{
    opacity: 60%;
    -webkit-opacity: 60%;   
}
</style>