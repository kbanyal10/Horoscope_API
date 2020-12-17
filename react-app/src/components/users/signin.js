

const Signin = () => (
    <div class="signup-form text-center">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Login</h2>
        <p>Please enter in your login credentials</p>
		<hr/>
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
            <button type="submit" class="btn btn-primary btn-lg">Login</button>
        </div>
    </form>
</div>
    
);

export default Signin;