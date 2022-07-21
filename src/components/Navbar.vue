<template>
  <div class="nav-col d-flex justify-content-between align-items-center border">
    <div class="search-bar-col">
        <div class="mobile-bar">
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
        </div>
    </div>
  </div>
</template>

<script>
export default {

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

input {
    border: none;
    outline: none;
    background-color: transparent;
    color: #fff;
}

.search_icon {
    width: 25px;
    height: 25px;
}

.notification, .message, .mobile-bar {
    width: 35px;
    height: 35px;
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