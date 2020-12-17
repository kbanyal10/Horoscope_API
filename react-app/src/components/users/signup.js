

const Signup = () => (
    <div class="signup-form text-center">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr/>
        <div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>                    
				</div>
				<input type="text"  size="250" class="form-control" name="username" placeholder="Name" required="required"/>
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<i class="fa fa-paper-plane"></i>
					</span>                    
				</div>
				<input type="email" size="250" class="form-control" name="email" placeholder="Email Address" required="required"/>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<i class="fa fa-lock"></i>
					</span>                    
				</div>
				<input type="text" size="250" class="form-control" name="password" placeholder="Password" required="required"/>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<i class="fa fa-lock"></i>
						<i class="fa fa-check"></i>
					</span>                    
				</div>
				<input type="text" size="250" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
			</div>
        </div>
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
    </form>
</div>
);

export default Signup;