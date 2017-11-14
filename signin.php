<?php

include("header.php");

?>

<div class="section" id="sec_signup">
    <h2 class='text-center'>Create Account</h2>
    <div class="cont text-center">
    	You can create an account right now
    	<div class="color_blue text-bold">Please enter the following information</div>
    	<form class='login'>
    		<div>
    			<input type="text" class="form-control" placeholder="Name" id='uname'>
    		</div>
    		<div>
    			<input type="text" class="form-control" placeholder="Company" id='ucompany'>
    		</div>
    		
    		<div>
    			<input type="text" class="form-control" placeholder="E-mail Address" id='uemail'>
    		</div>
    		
    		<div>
    			<input type="password" class="form-control" placeholder="Password" id='upassword'>
    		</div>
    		<div>
    			<input type="password" class="form-control" placeholder="Verify Password" id='upassword_confirm'>
    		</div>
    		<div class="divbt" id="bt_register">Register</div>
    	</form>
        <div class="color_blue" id="bt_go_signin">SignIn Account?</div>
	</div>

</div>
<div class="section" id="sec_login">
    <h2 class='text-center'>SignIn Account</h2>
    <div class="cont text-center">
        <div class="color_blue text-bold">Please enter Email address and Password</div>
        <form class='login'>
            <div>
                <input type="text" class="form-control" placeholder="Email Address" id='uname1'>
            </div>
            <div>
                <input type="password" class="form-control" placeholder="Password" id='upassword1'>
            </div>
            <div class="divbt" id="bt_login">Signin</div>
        </form>
        <div class="color_blue" id="bt_go_signup">Create Account?</div>
    </div>

</div>
<br/>

<br/>

<?php

include("footer.php");

?>
<?php
if(isset($_REQUEST['signup']) && $_REQUEST['signup'] == '1') {
?>
<style>
#sec_signup{
    display: block;
}
#sec_login{
    display: none;
}
.color_blue{
    cursor: pointer;
}
</style>
<?php
} else {
?>
<style>
#sec_signup{
    display: none;
}
#sec_login{
    display: block;
}
.color_blue{
    cursor: pointer;
}
</style>
<?php
}
?>

<style type="text/css">

@media only screen and (max-device-width : 640px) {
    #bt_login{
        width: 50%;
    }
}
</style>
<script src="js/user.js"></script>
