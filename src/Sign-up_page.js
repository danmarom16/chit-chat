import './Sign-up_page.css';

function SignUp() {
    return (
        <div className="register">
            <form>
                <label>
                    <div>username:  
                    <input type="text" name="username" />
                    </div>
                    <div>password:  
                    <input type="password" name="password" />
                    </div>
                </label>
                <p>
                    <input type="submit" value="Login" />
                </p>
            </form>
        </div>
    );
}

export default SignUp;