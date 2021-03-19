import React from 'react'
import img1 from '../Contact/admin.png'
import '../Contact/contact.css'
function Contact() {
return (
<body className="main">
<div className="container">
<div className="formbox">
<form>
<h2>Contact Us</h2>
<h3>As A New StartUp , We Want To know Your Comments..</h3>
<div className="inputbox">
<input type="text" name="" required/>
<span>Full Name</span>
</div>
<div className="inputbox">
<input type="text" name="" required/>
<span>Subject</span>
</div>
<div className="inputbox">
<input type="text" name="" required/>
<span>Email</span>
</div>
<div className="inputbox">
<textarea name="" required></textarea>
<span>Comment..</span>
</div>
<div className="inputbox">
<input type="submit" value="Submit" name=""/>
</div>
</form>
</div>
<div className="img">
<img src={img1}/>
</div>

</div>
</body>
)
}
export default Contact