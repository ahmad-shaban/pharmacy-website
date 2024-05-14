import "./CSS/Admin.css";
import axios from "axios";
import { useState } from "react";

function Admin() {
	const [message, setMessage] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post("/api/products/", {
				name: event.target.name.value,
				description: event.target.description.value,
				category: event.target.category.value,
				image: event.target.image.value,
				old_price: event.target.old_price.value,
				new_price: event.target.new_price.value,
			})
			.then((res) => {
				setMessage("Added successfully");
				setTimeout(() => {
					setMessage("");
				}, 1000);
			})
			.catch((err) => {
				setMessage("error");
				setTimeout(() => {
					setMessage("");
				}, 1000);
			});
	};

	return (
		<div id='admin'>
			<main>
				<h1>Add product</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>Product name</label>
					<input type='text' name='name' id='name' placeholder='Product name' autoComplete="off" />

					<label htmlFor='description'>Product description</label>
					<input type='text' name='description' id='description' placeholder='Product description' autoComplete="off" />

					<label htmlFor='category'>Category</label>
					<input type='text' name='category' id='category' placeholder='category' autoComplete="off" />

					<label htmlFor='image'>Product image</label>
					<input type='text' name='image' id='image' placeholder='Product image' autoComplete="off" />

					<label htmlFor='price'>Product old price</label>
					<input type='text' name='price' id='old_price' placeholder='Product old price' autoComplete="off" />
					
					<label htmlFor='price'>Product new price</label>
					<input type='text' name='price' id='new_price' placeholder='Product new price' autoComplete="off" />

					<input type='submit' value='Add product' />
				</form>
				<p className='message'>{message}</p>
			</main>
		</div>
	);
}

export default Admin;
