function sub() {
    console.log("it is workin")
    document.querySelector("#lpv").style.display="none";
    document.querySelector("#lph").style.display=""
}
function cancel(){
    document.querySelector("#lpv").style.display="";
    document.querySelector("#lph").style.display="none";
}
// let vr = document.getElementsByClassName("lower-part")
// let veh =document.getElementsByClassName("lower-part-hidden")

const userdata={
    //object to store the user data
}
function subuser(){
    alert("its submiting...")
    userdata.name=(document.querySelector("#pt-Name").value);
    userdata.mnumber=document.querySelector("#mnumber").value;
    userdata.dob=document.querySelector("#dob").value;
    userdata.gender=document.querySelector("#gender").value;

    document.querySelector("#lp3").style.display='';
    document.querySelector("#lph").style.display="none";
    document.querySelector("#btn-final").style.display=''

    document.querySelector(`#test-user`).innerHTML=userdata.name;
    document.querySelector(`#test-numb`).innerHTML=userdata.mnumber;
    document.querySelector(`#test-gender`).innerHTML=userdata.gender;
    document.querySelector(`#test-dob`).innerHTML=userdata.dob;
    i++
}
// document.querySelector("#btn-final").addEventListener('click' , function (){console.log("it is final buttok")})
function step2(){
    document.querySelector("#lp3").style.display='none';
    document.querySelector("#lph").style.display="none";
    document.querySelector("#btn-final").style.display='none'
    document.querySelector("#lpv").style.display="";

    document.querySelector(".hdin1").innerHTML="Address Details";
    document.querySelector(".hdin2").innerHTML="Step 2: Select Address";
    document.querySelector(".add-pt").innerHTML="+ Add Address"
    document.querySelector(".add-pt").id="adda-ddr"
    document.querySelector("#svg-bg").innerHTML=`<svg width="100%" height="auto" viewBox="0 0 366 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M154.211 257.562C153.627 250.889 156.936 244.011 162.508 240.299C168.088 236.587 175.702 236.185 181.638 239.297C183.08 235.441 184.553 231.516 187.111 228.29C189.669 225.064 193.518 222.589 197.632 222.741V257.562H154.211Z" fill="#EBEBEB"/>
    <path d="M39.8915 122.838L17.7026 167.588L24.3296 167.838L5.52636 203.403H15.4024L0 234.997H86.0912L67.1361 203.403L76.2227 203.008L58.0571 167.459L64.7677 167.064L39.8915 122.838Z" fill="#EBEBEB"/>
    <path d="M43.6438 174.747C43.7501 174.747 43.5603 193.702 43.2187 217.075C42.8771 240.456 42.5128 259.404 42.3989 259.396C42.2926 259.396 42.4824 240.448 42.824 217.068C43.1656 193.695 43.53 174.747 43.6438 174.747Z" fill="#E0E0E0"/>
    <path d="M54.1961 185.186C54.2416 185.217 53.695 186.014 52.7537 187.251C51.8124 188.496 50.4764 190.174 48.9733 192.011C47.5007 193.795 46.1646 195.411 45.1019 196.694C44.1074 197.886 43.485 198.623 43.4394 198.585C43.3939 198.554 43.9404 197.757 44.8817 196.52C45.823 195.275 47.1591 193.597 48.6621 191.76C50.1348 189.976 51.4708 188.367 52.5336 187.076C53.528 185.885 54.1505 185.148 54.1961 185.179V185.186Z" fill="#E0E0E0"/>
    <path d="M43.4283 198.593C43.36 198.677 41.1813 197.098 38.5699 195.056C35.951 193.014 33.8862 191.291 33.9545 191.207C34.0228 191.124 36.2015 192.703 38.8129 194.745C41.4318 196.787 43.4966 198.51 43.4283 198.593Z" fill="#E0E0E0"/>
    <path d="M42.8464 220.537C42.8085 220.575 42.2012 220.074 41.2295 219.246C40.2578 218.419 38.9142 217.28 37.4035 216.05C35.8929 214.821 34.5037 213.735 33.5017 212.953C32.4997 212.171 31.8772 211.678 31.9076 211.632C31.9379 211.587 32.6135 212.004 33.6687 212.733C34.7163 213.462 36.1434 214.517 37.6541 215.754C39.1647 216.992 40.4856 218.168 41.4117 219.049C42.3378 219.929 42.8768 220.514 42.8464 220.552V220.537Z" fill="#E0E0E0"/>
    <path d="M55.1134 206.972C55.1134 206.972 54.9919 207.199 54.7186 207.579C54.4454 207.951 54.0278 208.475 53.4889 209.112C52.4261 210.388 50.8699 212.073 49.124 213.895C47.378 215.717 45.7915 217.364 44.6831 218.586C43.5672 219.801 42.8992 220.575 42.8461 220.545C42.8233 220.529 42.9675 220.317 43.2408 219.937C43.5141 219.565 43.9316 219.041 44.4706 218.404C45.5334 217.129 47.0895 215.443 48.8355 213.621C50.5815 211.8 52.1604 210.152 53.2763 208.93C54.3922 207.716 55.0602 206.941 55.1134 206.972Z" fill="#E0E0E0"/>
    <path d="M220.482 173.764H310.437L327.244 149.897L344.863 174.439L365.564 174.105L343.253 144.052L242.951 144.469L220.482 173.764Z" fill="#E0E0E0"/>
    <path d="M265.463 174.105V257.767H355.289V174.105H344.996L327.24 149.896L310.38 173.74L265.463 174.105Z" fill="#F5F5F5"/>
    <path d="M299.169 221.497H278.156V257.768H299.169V221.497Z" fill="#E0E0E0"/>
    <path d="M344.86 220.472H311.763V240.975H344.86V220.472Z" fill="#E0E0E0"/>
    <path d="M321.703 220.472H320.944V241.165H321.703V220.472Z" fill="#EBEBEB"/>
    <path d="M335.462 220.472H334.703V241.165H335.462V220.472Z" fill="#EBEBEB"/>
    <path d="M335.083 231.062H321.32V231.821H335.083V231.062Z" fill="#EBEBEB"/>
    <path d="M344.86 179.443H311.763V199.947H344.86V179.443Z" fill="#E0E0E0"/>
    <path d="M321.703 179.443H320.944V200.137H321.703V179.443Z" fill="#EBEBEB"/>
    <path d="M335.462 179.443H334.703V200.137H335.462V179.443Z" fill="#EBEBEB"/>
    <path d="M335.083 190.031H321.32V190.79H335.083V190.031Z" fill="#EBEBEB"/>
    <path d="M296.978 179.625H276.102V199.392H296.978V179.625Z" fill="#E0E0E0"/>
    <path d="M265.472 174.104H229.012V257.759H265.472V174.104Z" fill="#E0E0E0"/>
    <path d="M286.919 179.625H286.16V199.392H286.919V179.625Z" fill="#EBEBEB"/>
    <path d="M296.978 189.615H276.102V190.374H296.978V189.615Z" fill="#EBEBEB"/>
    <path d="M327.195 170.296C329.639 170.296 331.621 168.314 331.621 165.87C331.621 163.426 329.639 161.444 327.195 161.444C324.751 161.444 322.77 163.426 322.77 165.87C322.77 168.314 324.751 170.296 327.195 170.296Z" fill="#E0E0E0"/>
    <path d="M295.627 160.443L301.206 153.55V136.979H289.516V160.572L295.627 160.443Z" fill="#F5F5F5"/>
    <path d="M295.624 160.443V136.979H301.203V153.55L295.624 160.443Z" fill="#EBEBEB"/>
    <path d="M301.992 134.541H288.206V136.978H301.992V134.541Z" fill="#EBEBEB"/>
    <path d="M265.465 210.703H197.63V257.768H265.465V210.703Z" fill="#F5F5F5"/>
    <path d="M240.103 210.703H197.63V257.768H240.103V210.703Z" fill="#E0E0E0"/>
    <path d="M233.782 225.878H206.006V257.685H233.782V225.878Z" fill="#F5F5F5"/>
    <path d="M261.733 225.748H243.841V230.303H261.733V225.748Z" fill="#EBEBEB"/>
    <path d="M220.482 173.765V176.187H310.384V173.742L220.482 173.765Z" fill="#EBEBEB"/>
    <path d="M310.383 176.185L327.197 152.584L327.243 149.896L310.436 173.763L310.383 176.185Z" fill="#EBEBEB"/>
    <path d="M365.129 174.104H344.997V175.668H365.129V174.104Z" fill="#EBEBEB"/>
    <path d="M292.006 215.94H284.574V218.764H292.006V215.94Z" fill="#E0E0E0"/>
    <path d="M227.103 37.5827C210.288 14.4601 185.845 3.67308 160.331 3.68067C160.331 3.68067 97.8634 3.68067 79.3638 59.6047C72.547 80.2146 74.0576 102.593 82.332 122.664C85.1938 129.603 88.997 137.133 93.9995 144.367C110.131 167.665 160.331 231.286 160.331 231.286H171.247C185.26 211.822 220.536 147.169 231.103 126.445C244.373 100.415 246.407 64.1442 227.103 37.5827ZM170.754 141.035C141.285 141.035 117.395 117.146 117.395 87.6692C117.395 58.1927 141.285 34.311 170.754 34.311C200.223 34.311 224.112 58.2003 224.112 87.6692C224.112 117.138 200.223 141.035 170.754 141.035Z" fill="#E8505B"/>
    <path opacity="0.4" d="M227.103 37.5827C210.288 14.4601 185.845 3.67308 160.331 3.68067C160.331 3.68067 97.8634 3.68067 79.3638 59.6047C72.547 80.2146 74.0576 102.593 82.332 122.664C85.1938 129.603 88.997 137.133 93.9995 144.367C110.131 167.665 160.331 231.286 160.331 231.286H171.247C185.26 211.822 220.536 147.169 231.103 126.445C244.373 100.415 246.407 64.1442 227.103 37.5827ZM170.754 141.035C141.285 141.035 117.395 117.146 117.395 87.6692C117.395 58.1927 141.285 34.311 170.754 34.311C200.223 34.311 224.112 58.2003 224.112 87.6692C224.112 117.138 200.223 141.035 170.754 141.035Z" fill="black"/>
    <path d="M238.087 38.0163C221.272 14.8937 196.829 4.10667 171.315 4.11426C171.315 4.11426 108.847 4.11427 90.3477 60.0383C83.5308 80.6482 85.0415 103.027 93.3158 123.098C96.1777 130.036 99.9809 137.567 104.983 144.801C121.115 168.098 171.315 231.72 171.315 231.72C171.315 231.72 229.319 151.922 242.087 126.878C255.357 100.848 257.391 64.5778 238.087 38.0163ZM170.821 141.469C141.216 141.537 117.349 117.89 117.463 88.1028C117.57 58.6339 141.353 34.7445 170.821 34.7445C200.29 34.7445 224.202 58.6339 224.18 88.1028C224.157 117.67 200.214 141.4 170.821 141.469Z" fill="#E8505B"/>
    <path d="M170.755 34.3027C147.542 34.3027 127.797 49.1359 120.456 69.8369C127.638 53.9942 143.579 42.9718 162.101 42.9718C187.35 42.9718 207.823 63.4376 207.823 88.6933C207.823 113.949 187.357 134.415 162.101 134.415C147.443 134.415 134.401 127.507 126.036 116.773C135.555 131.371 152.02 141.034 170.755 141.034C200.224 141.034 224.113 117.145 224.113 87.6685C224.113 58.1921 200.224 34.3103 170.755 34.3103V34.3027Z" fill="#E8505B"/>
    <path opacity="0.4" d="M170.755 34.3027C147.542 34.3027 127.797 49.1359 120.456 69.8369C127.638 53.9942 143.579 42.9718 162.101 42.9718C187.35 42.9718 207.823 63.4376 207.823 88.6933C207.823 113.949 187.357 134.415 162.101 134.415C147.443 134.415 134.401 127.507 126.036 116.773C135.555 131.371 152.02 141.034 170.755 141.034C200.224 141.034 224.113 117.145 224.113 87.6685C224.113 58.1921 200.224 34.3103 170.755 34.3103V34.3027Z" fill="black"/>
    <path d="M277.16 112.134C275.012 110.669 272.408 110.031 269.82 110.32C265.447 110.821 259.108 111.458 259.108 111.458L259.131 111.663L228.516 113.546L219.149 94.5225L204.938 103.882C204.938 103.882 206.805 106.873 214.769 121.585C217.949 127.46 224.47 130.732 231.082 129.768L267.132 124.492V124.424C270.852 124.211 274.89 123.862 275.475 123.331C276.591 122.306 277.608 118.586 277.608 118.586C277.608 118.586 284.03 122.405 285.268 122.496C286.512 122.579 286.733 121.547 287.499 120.454C288.023 119.71 281.404 115.019 277.145 112.126L277.16 112.134Z" fill="#FFBE9D"/>
    <path d="M221.029 93.2887C221.029 93.2887 215.077 81.8337 209.627 71.0163C202.931 57.7318 188.159 55.0749 188.159 55.0749L166.767 52.2662C166.767 52.2662 148.89 44.174 132.227 64.2526L118.533 79.526L121.44 82.1373L134.998 94.3287L137.678 96.7351L143.811 90.4193L140.957 106.421L135.924 128.724C135.924 128.724 135.932 128.732 135.939 128.739L146.818 127.426L154.181 82.4486L195.651 85.7583L192.395 114.119C193.063 114.02 198.081 113.026 199.713 106.209C200.35 103.529 200.153 101.259 199.751 99.597L202.149 105.738L221.036 93.2963L221.029 93.2887Z" fill="#455A64"/>
    <path d="M154.173 82.4197L146.809 127.397L135.931 128.711C145.276 136.765 157.437 141.646 170.744 141.646C177.394 141.646 183.755 140.424 189.623 138.199L192.387 114.082L195.643 85.7219L154.173 82.4121V82.4197Z" fill="#263238"/>
    <path d="M156.633 50.0357L155.73 86.5719L162.653 87.6651L163.579 50.643C163.579 50.643 161.15 49.4968 156.633 50.0357Z" fill="#263238"/>
    <path d="M185.906 86.7692L191.607 55.3874C191.934 55.0382 196.617 56.7158 198.022 58.3176L192.905 87.4296L185.906 86.7692Z" fill="#263238"/>
    <path d="M162.907 82.2907C162.907 82.2907 162.975 82.5109 163.013 82.9132C163.044 83.3155 163.097 83.9076 163.036 84.644C162.975 85.3727 162.778 86.2837 162.178 87.0959C161.882 87.4982 161.48 87.8778 160.971 88.1131C160.463 88.3485 159.855 88.432 159.278 88.3181C158.109 88.0904 157.198 87.3237 156.682 86.4734C156.166 85.6156 155.984 84.7199 155.915 83.9911C155.847 83.2548 155.885 82.6627 155.915 82.2604C155.953 81.858 155.999 81.6303 156.022 81.6379C156.098 81.6379 156.007 82.5488 156.189 83.9608C156.287 84.6592 156.492 85.5018 156.986 86.2837C157.472 87.0428 158.322 87.7336 159.347 87.9309C160.379 88.1435 161.358 87.6121 161.89 86.8758C162.451 86.147 162.672 85.312 162.763 84.6136C162.922 83.1941 162.839 82.2831 162.915 82.2831L162.907 82.2907Z" fill="#455A64"/>
    <path d="M158.806 85.5155C157.994 85.1891 157.599 84.2706 157.926 83.4659C158.252 82.6536 159.171 82.2589 159.976 82.5853C160.788 82.9117 161.183 83.8303 160.856 84.6349C160.53 85.4472 159.611 85.8419 158.806 85.5155Z" fill="#455A64"/>
    <path d="M191.266 85.7127C191.266 86.5857 190.56 87.2917 189.687 87.2917C188.814 87.2917 188.108 86.5857 188.108 85.7127C188.108 84.8398 188.814 84.1338 189.687 84.1338C190.56 84.1338 191.266 84.8398 191.266 85.7127Z" fill="#455A64"/>
    <path d="M193.384 84.6222C193.384 84.6222 193.369 85.3433 193.019 86.4668C192.83 87.021 192.533 87.689 191.964 88.2583C191.418 88.8428 190.507 89.2452 189.565 89.1389C188.632 89.0478 187.812 88.5771 187.288 87.9623C186.764 87.3474 186.514 86.6566 186.4 86.0721C186.286 85.4875 186.316 85.0017 186.362 84.6829C186.407 84.3565 186.476 84.1895 186.499 84.1895C186.574 84.1895 186.415 84.9182 186.673 86.0113C186.81 86.5503 187.068 87.1804 187.561 87.7193C188.04 88.2507 188.783 88.6606 189.603 88.7441C190.431 88.8276 191.197 88.5088 191.714 87.9926C192.237 87.4916 192.549 86.8843 192.761 86.3605C193.164 85.3054 193.315 84.5918 193.384 84.607V84.6222Z" fill="#455A64"/>
    <path d="M158.702 99.6223C158.649 99.6223 158.626 99.3187 158.641 98.8404C158.641 98.6051 158.664 98.3167 158.679 98.0054C158.694 97.8384 158.702 97.6714 158.717 97.512L158.74 97.2539L158.755 97.1172V97.0489L158.763 97.0186V97.0034V96.9958C158.565 97.1704 159.028 96.7529 158.983 96.7984C160.44 96.9578 161.617 97.1704 161.602 97.2767C161.586 97.3829 160.402 97.345 158.937 97.1856C158.892 97.2311 159.355 96.8136 159.157 96.9882V97.011V97.0489L159.15 97.1172L159.135 97.2539L159.104 97.5196C159.081 97.6866 159.066 97.846 159.043 98.0206C158.998 98.3394 158.96 98.6279 158.914 98.8632C158.831 99.3415 158.755 99.6299 158.694 99.6299L158.702 99.6223Z" fill="#455A64"/>
    <path d="M157.592 110.091C157.486 110.076 157.524 108.899 157.676 107.457C157.828 106.014 158.04 104.853 158.154 104.86C158.268 104.868 158.222 106.052 158.071 107.495C157.919 108.937 157.706 110.098 157.592 110.091Z" fill="#455A64"/>
    <path d="M159.134 119.148C159.089 119.246 157.98 118.798 156.667 118.146C156.69 118.191 156.462 117.774 156.561 117.948V117.933V117.918V117.887V117.819L156.584 117.683L156.614 117.417C156.637 117.257 156.659 117.09 156.675 116.923C156.72 116.612 156.766 116.324 156.804 116.088C156.887 115.618 156.971 115.322 157.024 115.329C157.077 115.329 157.092 115.633 157.077 116.119C157.069 116.362 157.054 116.643 157.031 116.961C157.016 117.128 157.001 117.295 156.993 117.455L156.971 117.72L156.956 117.857V117.925L156.948 117.956V117.971V117.979C157.047 118.153 156.819 117.736 156.842 117.781C158.155 118.434 159.18 119.041 159.134 119.14V119.148Z" fill="#455A64"/>
    <path d="M166.146 122.632C166.1 122.73 165.273 122.419 164.301 121.941C163.33 121.463 162.586 120.992 162.639 120.893C162.684 120.795 163.512 121.106 164.484 121.584C165.455 122.062 166.199 122.533 166.146 122.632Z" fill="#455A64"/>
    <path d="M174.5 124.552C174.538 124.651 173.475 125.182 172.109 125.736C171.782 125.721 172.018 125.736 171.942 125.736H171.934H171.919L171.889 125.714L171.828 125.683L171.706 125.623L171.471 125.501C171.327 125.425 171.183 125.349 171.031 125.266C170.75 125.114 170.499 124.977 170.294 124.856C169.877 124.613 169.634 124.431 169.657 124.385C169.68 124.34 169.968 124.423 170.416 124.605C170.636 124.697 170.902 124.81 171.19 124.939C171.342 125.015 171.494 125.084 171.646 125.152L171.881 125.266L172.002 125.327L172.063 125.357L172.093 125.372H172.109L172.116 125.387C172.048 125.387 172.276 125.387 171.957 125.387C173.316 124.833 174.454 124.469 174.492 124.575L174.5 124.552Z" fill="#455A64"/>
    <path d="M180.17 122.251C180.208 122.35 179.608 122.691 178.826 123.01C178.044 123.329 177.376 123.504 177.331 123.405C177.293 123.306 177.893 122.965 178.674 122.646C179.456 122.327 180.124 122.152 180.17 122.251Z" fill="#455A64"/>
    <path d="M185.741 117.462C185.848 117.47 185.817 118.669 185.666 120.126C185.423 120.453 185.597 120.217 185.544 120.293H185.537H185.521L185.491 120.316L185.43 120.339L185.301 120.392L185.058 120.491C184.906 120.552 184.755 120.605 184.595 120.665C184.299 120.779 184.026 120.87 183.798 120.946C183.343 121.09 183.047 121.159 183.024 121.106C183.001 121.053 183.259 120.901 183.692 120.681C183.904 120.574 184.17 120.453 184.459 120.324C184.618 120.255 184.762 120.187 184.914 120.126L185.157 120.028L185.278 119.975L185.339 119.952L185.37 119.937H185.385L185.392 119.929C185.339 120.005 185.514 119.762 185.271 120.088C185.423 118.631 185.635 117.454 185.741 117.47V117.462Z" fill="#455A64"/>
    <path d="M186.752 107.622C186.859 107.63 186.836 108.746 186.692 110.105C186.555 111.463 186.35 112.556 186.244 112.541C186.137 112.534 186.16 111.418 186.304 110.059C186.441 108.7 186.646 107.607 186.752 107.622Z" fill="#455A64"/>
    <path d="M184.891 99.7806C184.906 99.6744 186.098 99.7123 187.555 99.8717C187.904 100.304 187.654 99.9932 187.73 100.092V100.107V100.122V100.153V100.221L187.707 100.358L187.677 100.623C187.654 100.783 187.639 100.95 187.616 101.117C187.57 101.435 187.533 101.716 187.487 101.952C187.403 102.43 187.32 102.718 187.267 102.711C187.214 102.703 187.191 102.407 187.206 101.921C187.206 101.678 187.229 101.398 187.252 101.079C187.267 100.912 187.282 100.745 187.29 100.578L187.312 100.312L187.328 100.175V100.107L187.335 100.077V100.061V100.054C187.411 100.153 187.161 99.8338 187.51 100.266C186.052 100.107 184.876 99.8945 184.891 99.7882V99.7806Z" fill="#455A64"/>
    <path d="M175.577 98.7806C175.592 98.6743 176.64 98.6971 177.923 98.8338C179.206 98.9704 180.238 99.1753 180.231 99.2816C180.215 99.3879 179.168 99.3651 177.877 99.2285C176.594 99.0918 175.562 98.8869 175.57 98.7806H175.577Z" fill="#455A64"/>
    <path d="M166.264 97.7708C166.279 97.6646 167.327 97.6873 168.609 97.824C169.892 97.9606 170.925 98.1656 170.917 98.2719C170.91 98.3781 169.854 98.3554 168.564 98.2187C167.281 98.0821 166.249 97.8771 166.256 97.7708H166.264Z" fill="#455A64"/>
    <path d="M117.465 84.9123C117.42 85.8232 117.397 86.7418 117.397 87.6679C117.397 91.342 117.769 94.9326 118.475 98.4018C118.475 98.4397 118.49 98.4701 118.498 98.508C118.589 98.9483 118.695 99.381 118.801 99.8213C119.219 101.537 119.705 103.23 120.251 104.892C120.32 105.097 120.388 105.31 120.464 105.515C122.422 105.074 128.108 100.163 134.644 94.0141L121.101 81.8379C119.211 83.7281 118.088 84.6998 117.473 84.9123H117.465Z" fill="#FFBE9D"/>
    <path d="M202.955 6.07324C203.426 11.3187 209.407 15.7368 214.668 15.5774C217.568 15.4863 220.506 14.1958 223.299 15.0004C227.975 16.3517 229.866 22.8801 234.656 23.753C238.239 24.4059 241.548 21.5061 245.177 21.3087C247.849 21.1644 250.369 22.5005 252.578 24.0035C254.787 25.5066 256.913 27.245 259.441 28.1028C261.976 28.9606 264.299 27.4347 266.857 26.6604C267.495 28.2925 267.905 30.289 268.717 32.0198C269.537 33.743 270.516 36.825 269.074 37.493C269.074 37.493 265.043 39.5806 262.712 39.4667C264.565 41.3797 267.495 42.1768 270.061 41.4556C270.706 45.3575 271.192 49.8514 268.558 52.7968C267.381 54.1024 265.726 54.8995 264.018 55.3398C255.554 57.5261 246.718 51.6126 238.132 53.2295C234.61 53.8899 231.384 55.7953 227.823 56.2583C224.324 56.7138 220.65 55.6814 217.909 53.4572C214.524 50.7168 212.193 46.1317 207.897 45.4182C205.991 45.0993 204.063 45.6459 202.196 46.1697C200.336 46.6935 198.385 47.1945 196.495 46.7922C194.605 46.3898 192.821 44.7805 192.912 42.8524" fill="#263238"/>
    <path d="M186.136 57.0166C187.084 51.7256 188.178 46.1765 188.178 46.1765C188.178 46.1765 195.192 46.2448 198.175 37.5985C201.014 29.3545 203.071 9.51879 203.071 9.51879C193.962 3.78747 181.869 4.40236 173.496 11.0294L166.505 54.1092C165.693 59.1118 169.344 63.7955 174.711 64.623C180.123 65.458 185.247 62.0572 186.151 57.0166H186.136Z" fill="#FFBE9D"/>
    <path d="M197.849 24.3819C197.766 24.9892 197.181 25.4143 196.544 25.3384C195.914 25.2624 195.466 24.7083 195.549 24.101C195.633 23.4937 196.217 23.0686 196.847 23.1445C197.485 23.2204 197.925 23.7746 197.842 24.3819H197.849Z" fill="#263238"/>
    <path d="M199.922 23.4328C199.755 23.5542 199.003 22.7648 197.774 22.5522C196.551 22.3245 195.542 22.7951 195.428 22.6205C195.375 22.5446 195.565 22.3017 196.005 22.0816C196.438 21.8614 197.151 21.702 197.91 21.8462C198.677 21.9829 199.269 22.3776 199.588 22.7344C199.914 23.0912 199.998 23.3796 199.914 23.4328H199.922Z" fill="#263238"/>
    <path d="M185.242 22.3848C185.158 22.9921 184.574 23.4172 183.936 23.3413C183.306 23.2654 182.858 22.7112 182.941 22.1039C183.025 21.4966 183.609 21.0715 184.239 21.1474C184.877 21.2234 185.317 21.7775 185.234 22.3848H185.242Z" fill="#263238"/>
    <path d="M187.035 21.6185C186.868 21.7399 186.116 20.9504 184.887 20.7379C183.664 20.5101 182.655 20.9808 182.541 20.8062C182.488 20.7303 182.678 20.4874 183.118 20.2672C183.551 20.0471 184.264 19.8877 185.023 20.0243C185.79 20.161 186.382 20.5557 186.701 20.9125C187.027 21.2693 187.111 21.5577 187.027 21.6109L187.035 21.6185Z" fill="#263238"/>
    <path d="M189.886 31.5096C189.886 31.4413 190.676 31.4413 191.943 31.5021C192.262 31.5248 192.574 31.5172 192.657 31.3123C192.771 31.0997 192.703 30.7353 192.612 30.3482C192.452 29.5359 192.285 28.6857 192.103 27.7976C191.412 24.1766 190.972 21.216 191.124 21.1857C191.268 21.1629 191.943 24.0779 192.634 27.6989C192.794 28.5946 192.953 29.4449 193.097 30.2571C193.15 30.6367 193.287 31.0769 193.044 31.5172C192.915 31.7374 192.657 31.8664 192.445 31.8816C192.232 31.9044 192.057 31.8816 191.898 31.8588C190.645 31.707 189.871 31.578 189.879 31.5021L189.886 31.5096Z" fill="#263238"/>
    <path d="M188.178 46.185C188.178 46.185 182.128 45.517 176.829 40.9092C176.829 40.9092 178.643 47.5287 187.692 48.265L188.185 46.185H188.178Z" fill="#EB996E"/>
    <path d="M188.842 34.3706C188.5 33.7102 187.787 33.2547 187.005 33.2016C186.466 33.1636 185.882 33.3306 185.479 33.7026C185.077 34.0821 184.902 34.6818 185.122 35.1449C185.373 35.6687 186.049 35.8964 186.663 35.8357C187.278 35.775 187.848 35.4789 188.394 35.1753C188.546 35.0918 188.698 35.0083 188.812 34.8716C188.918 34.7426 188.971 34.5528 188.888 34.4161" fill="#EB996E"/>
    <path d="M186.129 31.7217C186.334 31.7445 186.099 33.0805 187.071 34.2268C188.042 35.373 189.485 35.4793 189.469 35.6615C189.469 35.745 189.105 35.8664 188.505 35.7754C187.913 35.6918 187.086 35.3503 186.494 34.6519C185.901 33.9459 185.734 33.126 185.788 32.5719C185.833 32.0025 186.038 31.6989 186.129 31.7293V31.7217Z" fill="#263238"/>
    <path d="M179.507 4.67559C181.883 9.92107 189.588 16.2976 195.532 18.5598C194.993 17.4819 191.645 14.4378 191.106 13.3523C193.505 15.9636 196.974 19.5011 200.641 20.3817C201.073 20.488 201.552 20.5715 201.954 20.4196C202.5 20.2147 202.713 19.6529 202.865 19.1443C203.51 17.0188 204.064 13.2688 204.117 11.0522C204.178 8.83554 203.594 6.50505 201.992 4.71354C199.965 2.4362 196.655 1.34307 193.475 0.667458C190.803 0.0981221 188.009 -0.266251 185.375 0.242356C182.741 0.750963 180.281 2.26919 179.492 4.50099" fill="#263238"/>
    <path d="M165.321 24.4204C165.305 22.0367 165.359 19.7898 165.548 18.3247C166.148 13.6941 167.59 -3.13552 183.129 1.19903L181.475 5.5108C181.475 5.5108 182.666 16.3434 174.696 22.1582C174.696 22.1582 174.734 32.968 169.207 36.8698C169.207 36.8698 165.359 29.5368 165.321 24.4279" fill="#263238"/>
    <path d="M175.031 21.4218C174.112 21.0726 173.103 20.9208 172.139 21.103C171.175 21.2851 170.256 21.8165 169.709 22.6364C169.163 23.4562 169.019 24.5038 169.186 25.4755C169.353 26.4471 169.816 27.3505 170.385 28.1551C170.795 28.7321 171.281 29.2786 171.911 29.605C172.541 29.9315 173.33 29.9998 173.945 29.6506" fill="#FFBE9D"/>
    <path d="M173.487 27.0906C173.594 27.1437 173.078 27.6447 172.25 27.2576C171.848 27.0754 171.506 26.6351 171.339 26.1265C171.172 25.6179 171.104 25.0713 171.142 24.464C171.187 23.8567 171.43 23.2494 171.84 22.8623C172.235 22.46 172.789 22.2778 173.222 22.3461C174.118 22.4827 174.285 23.1507 174.186 23.1507C174.102 23.2115 173.814 22.8319 173.199 22.8699C172.622 22.8699 171.931 23.5531 171.886 24.5323C171.817 25.5268 172.038 26.4908 172.516 26.8097C173.009 27.1816 173.442 26.9995 173.487 27.0906Z" fill="#EB996E"/>
    <path d="M264.962 22.1513C264.962 22.1513 264.871 22.4018 264.545 22.7738C264.218 23.1381 263.611 23.6012 262.692 23.8365C261.789 24.0794 260.575 24.0946 259.33 23.6012C258.069 23.1306 256.832 22.2348 255.534 21.2176C254.228 20.2307 252.771 19.0617 250.903 18.6594C249.977 18.4848 248.975 18.5075 247.996 18.7884C247.009 19.0541 246.045 19.4944 245.073 19.9802C244.102 20.4661 243.115 21.0126 242.06 21.4909C241.005 21.9615 239.858 22.3639 238.629 22.4094C237.399 22.4625 236.139 22.0906 235.091 21.377C234.036 20.671 233.201 19.6918 232.434 18.6821C230.916 16.6553 229.686 14.4691 227.834 13.0267C226.923 12.3056 225.837 11.8653 224.729 11.7211C223.621 11.5616 222.513 11.6755 221.442 11.8653C219.309 12.26 217.32 12.9356 215.369 13.1786C213.411 13.4139 211.551 13.2089 209.957 12.7079C206.731 11.7362 204.605 9.87641 203.413 8.47964C202.221 7.04491 201.834 6.07324 201.834 6.07324C201.834 6.07324 201.88 6.11879 201.948 6.22507C202.024 6.34653 202.123 6.50594 202.244 6.68812C202.502 7.09805 202.92 7.68256 203.527 8.37336C204.742 9.72458 206.867 11.5161 210.04 12.4346C211.604 12.9053 213.426 13.0875 215.331 12.8445C217.244 12.594 219.218 11.9108 221.389 11.4933C222.475 11.2884 223.621 11.1745 224.79 11.3339C225.959 11.4781 227.113 11.9488 228.077 12.7003C230.028 14.211 231.258 16.4276 232.761 18.424C233.512 19.4185 234.324 20.3598 235.319 21.0278C236.306 21.6958 237.475 22.045 238.621 21.9995C239.775 21.9615 240.883 21.582 241.915 21.1265C242.955 20.6634 243.935 20.1245 244.914 19.6386C245.893 19.1528 246.888 18.7049 247.912 18.4392C248.93 18.1584 250 18.1356 250.979 18.3329C252.953 18.7808 254.418 19.9954 255.716 20.9974C257.007 22.0222 258.214 22.918 259.421 23.3962C260.62 23.8973 261.789 23.8973 262.67 23.6923C263.565 23.4873 264.158 23.0546 264.499 22.7206C264.833 22.379 264.955 22.1437 264.977 22.1589L264.962 22.1513Z" fill="#263238"/>
    <path d="M90.121 172.941L76.3506 200.717L80.4574 200.869L68.7898 222.944H74.9235L65.3586 242.552H118.793L107.026 222.944L112.667 222.694L101.394 200.634L105.561 200.391L90.121 172.941Z" fill="#455A64"/>
    <path d="M92.441 205.158C92.5473 205.158 92.4638 216.924 92.2512 231.431C92.0387 245.938 91.7805 257.697 91.6667 257.697C91.5604 257.697 91.6439 245.938 91.8565 231.424C92.069 216.917 92.3271 205.158 92.441 205.158Z" fill="#263238"/>
    <path d="M98.9937 212.302C99.0316 212.332 98.7355 212.81 98.1662 213.524C97.5969 214.237 96.7467 215.156 95.7674 216.128C94.7882 217.099 93.9152 217.98 93.3003 218.64C92.6854 219.293 92.3134 219.711 92.2679 219.68C92.2299 219.65 92.526 219.172 93.0953 218.458C93.6647 217.745 94.5149 216.826 95.4941 215.854C96.4734 214.883 97.3464 214.002 97.9613 213.349C98.5761 212.696 98.9481 212.279 98.9937 212.309V212.302Z" fill="#263238"/>
    <path d="M92.313 219.955C92.2447 220.039 90.8707 219.082 89.2462 217.822C87.6217 216.554 86.3615 215.461 86.4223 215.37C86.483 215.279 87.857 216.243 89.4891 217.511C91.1136 218.779 92.3737 219.872 92.3054 219.963L92.313 219.955Z" fill="#263238"/>
    <path d="M91.9493 233.58C91.8734 233.663 90.3931 232.373 88.5257 230.855C86.6583 229.329 85.0945 228.145 85.1628 228.053C85.2235 227.97 86.8936 229.018 88.7762 230.551C90.6588 232.084 92.0252 233.512 91.9493 233.587V233.58Z" fill="#263238"/>
    <path d="M99.5654 225.152C99.664 225.228 98.1003 227.255 95.8988 229.502C94.874 230.572 93.9479 231.544 93.1281 232.402C92.4221 233.146 91.997 233.616 91.9514 233.579C91.8528 233.503 93.4165 231.476 95.618 229.229C96.6428 228.158 97.5689 227.187 98.3887 226.337C99.0947 225.593 99.5198 225.122 99.5654 225.16V225.152Z" fill="#263238"/>
    </svg>
    `

}

