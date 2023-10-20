const AddProduct = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const brand = form.brand.value;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const img = form.img.value;
    const type = form.type.value;
    const description = form.description.value;
    const user = { brand, name, price, rating, img, type, description };

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="px-10 mt-5 mb-16">
      <h2 className="text-3xl font-semibold text-center mb-5">Add Product</h2>
      <form onSubmit={handleForm}>
        <div className="md:flex gap-10 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Select Brand:</span>
            </label>
            <select id="" name="brand" className=" input p-3 input-bordered">
              <option value="Mercedes Benz">Mercedes Benz</option>
              <option value="BMW">BMW</option>
              <option value="Tesla">Tesla</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              <option value="Toyota">Toyota</option>
            </select>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Img URL:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="img"
                placeholder="Img URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control md:w-1/2 ">
          <label className="label">
            <span className="label-text">Short description:</span>
          </label>
          <textarea
            className="border p-5"
            name="description"
            id=""
            cols="10"
            rows="3"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Add"
          className="btn btn-block bg-gray-200 mt-3"
        />
      </form>
    </div>
  );
};

export default AddProduct;
