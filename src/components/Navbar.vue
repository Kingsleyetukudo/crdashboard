<template>
  <div class="nav-col d-flex justify-content-between align-items-center border">
    <div class="search-bar-col">
        <div class="mobile-bar" @click="toggleNav">
            <img src="../assets/bars-solid.svg" class="img-fluid" alt="">
        </div>

        <div class="search_field rounded-pill">
            <div class="search_icon">
                <img src="../assets/magnifying-glass-solid.svg" class="img-fluid" alt="">
            </div>
            <input type="text" placeholder="search here..." class="w-100 p-2">
        </div>
    </div>

    <div class="profile-col">

        <div class="notification">
            <div class="position-relative">
                <img src="../assets/bell-regular.svg" class="img-fluid" alt=""> <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill count">+99</span>
            </div>
        </div>
        
        <div class="message">
            <div class="position-relative">
                <img src="../assets/comment-dots-regular.svg" alt=""> <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill count">+99</span>
            </div>

        </div>
        <div class="profile-img">
            <img src="../assets/avatar.png" class="img-fluid" alt="">
            <div class="profile-details">
                <div class="text border-bottom pb-3 text-end">
                    <p class="fs-5"> Welcome Admin</p>
                    <p class="fs-6">Travor James</p>
                </div>
  
                <ul class="pt-3">
                    <li>My Profile <img src="../assets/user-regular.svg" alt=""></li>
                    <li>Settings <img src="../assets/gear-solid.svg" alt=""></li>
                    <li>Logout <img src="../assets/logout.svg" alt=""></li>
                </ul>
            </div>
        </div>
     
    </div>
  </div>

  <div :class="{'mobile-nav-toggle-out' : !showNav, 'mobile-nav-toggle-in' : showNav}">
   <div class="img-holder  d-flex justify-content-end align-items-center w-100 mb-5">
     <div class="close-icon" @click="navbarClose">
        <img src="../assets/xmark-solid.svg" class="img-fluid" alt="">
    </div>
   </div>

    <ul>
        <li> <img src="../assets/house-solid.svg" alt=""> Dashboard</li>
        <li> <img src="../assets/file-lines-regular.svg" alt=""> Pages</li>
        <li><img src="../assets/file-lines-regular.svg" alt=""> Applications</li>
        <li><img src="../assets/file-lines-regular.svg" alt=""> UI Components</li>
        <li><img src="../assets/file-lines-regular.svg" alt=""> Widgets</li>
        <li><img src="../assets/file-lines-regular.svg" alt=""> Forms</li>
        <li><img src="../assets/file-lines-regular.svg" alt=""> Charts</li>
    </ul>
  </div>



</template>

<script>
export default {
    data() {
        return {
            showNav: false
        }
    },

    methods: {
        toggleNav() {
            this.showNav = !this.showNav
        },

        navbarClose() {
            this.showNav = !this.showNav
        }
    }

}
</script>

<style scoped>
* {padding: 0; margin: 0; box-sizing: border-box;}

.nav-col {
    border-radius: 5px;
    padding: 2rem .5rem;
}

.search-bar-col {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
}

.mobile-nav-toggle-in {
    width: 350px;
    padding: 2rem;
    position: absolute;
    top: 0;
    border-right: 2px solid red;
    transition: all .8s ease;
    overflow: hidden;
}

.mobile-nav-toggle-out {
    width: 0px;
    position: absolute;
    top: 0;
    transition: all .8s ease-out;
    overflow: hidden;
}

ul {
    list-style: none;
    font-size: 1.5em;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

li {
    display: flex;
    align-items: center;
    gap: 1rem;
}

li img {
    width: 30px;
}

.mobile-bar {
    display: none;
}

.search_field {
    display: flex;
    align-items: center;
    width: 50%;
    gap: 1rem;
    background-color: #f7faff;
    padding: .5rem 1rem;
}

.profile-details {
    display: none;
    align-items: flex-end;
    flex-direction: column;
    background-color: #4d4f5c;
    color: #fff;
    width: 200px;
    padding: 1rem;
    position: absolute;
    right: 0;
}

.profile-img {
    position: relative;
    display: inline-block;
}

.profile-img:hover  .profile-details{
    display: block;
}

.profile-details ul {
    gap: .8rem;
    align-items: flex-end;
}

.profile-details li img {
    width: 15px;
}

.profile-details li {
    font-size: .7em;
}

input {
    border: none;
    outline: none;
    background-color: transparent;
    color: #fff;
}

.search_icon, .close-icon  {
    width: 25px;
    height: 25px;
}

.notification, .message, .mobile-bar{
    width: 35px;
    height: 35px;
    cursor: pointer;
}

.profile-img {
    width: 70px;
    height: 70px;
    border: 3px solid #a5adc6;
    border-radius: 50px
}

.profile-col {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.count {
    /* padding: .1rem; */
    background-color: red;
}

/* .search_icon img {
    width: 100%;
    height: 100%;
}  */

@media (max-width: 991px) {
    .mobile-bar {
        display: block;
    }

    .notification, .message, .mobile-bar, .profile-img {
        width: 35px;
        height: 35px;
    }

    .profile-img {
        margin-left: 2rem;
    }
}

@media (max-width: 767px) {
    .search_field {
        display: none;
    }
}

</style>