import React from 'react'

interface ProductDetailsProps {
    errors?: any;
    register?: any;
    showPurposeOther?: boolean;
    setShowIdn?: (showId: boolean) => void;
    setShowPurposeOther: (foreigner: boolean) => void;
   }

const ProductDetails: React.FC<ProductDetailsProps> = ({
    errors,
    register,
    showPurposeOther,
    setShowPurposeOther,
   }) => {
  return (
    <div>
    <div>
      <h2 className='w-full bg-green-500 p-4 font-extrabold rounded'>Bussiness Details</h2>
      <div>
        <div className="pb-4">
        <div>
              <label>
                Bussiness Type
              : </label>
              <div className="">
              <select
    {...register("citizenShip", {
      required: "This field is required",
    })}
  >
    <option value="">Bussines Type</option>
    <option value="rwanda">Retailer</option>
    <option value="foreigner">Wholesale</option>
    <option value="foreigner">Manufacturer</option>
  </select>
  {errors.citizenShip && <p className="text-red-800">{errors.citizenShip.message as string}</p>}

              </div>
              <div>
<label>
  Company Name
: </label>
<input
  type="text"
  placeholder='Enter Company Name'
  {...register("companyName", {
    required: "This field is required",
  })}
/>
   {errors.companyName && <p className="text-red-800">{errors.companyName.message as string}</p>}
</div>
<div>
<label>
  TIN number
: </label>
<input
  type="number"
  placeholder='Enter TIN number'
  {...register("tinNumber", {
    required: "TIN number is required",
    pattern: {
      value: /^\d{9}$/,
      message: "TIN number must be exactly 9 digits",
    },
  })}
/>
{errors.tinNumber && <p className="text-red-500 text-xs">{errors.tinNumber.message as string}</p>}
</div>
<div>
<label>
  Registration Date
: </label>
<input
  type="date"
  placeholder='select date'
  {...register("registrationDate", {
    required: "This field is required",
  })}
/>
   {errors.registrationDate && <p className="text-red-800">{errors.registrationDate.message as string}</p>}
</div>
            </div>
        </div>
      </div>
      <h3 className='text-black font-bold'>Bussiness Address</h3>
      <div>
        <div className="pb-4">
        <div>
              <div>
<label>
  Location
: </label>
<input
  type="text"
  placeholder='Enter District'
  {...register("bussinessAddressLocation", {
    required: "This field is required",
  })}
/>
   {errors.bussinessAddressLocation && <p className="text-red-800">{errors.bussinessAddressLocation.message as string}</p>}
</div>
            </div>
        </div>
      </div>
    </div>
    <div>
      <h1 className='w-full bg-green-500 p-4 font-extrabold rounded'>Product Information</h1>
<div>                <label>
               Purpose of importation
              : </label>
              <div className="">
              <select
    {...register("productInfo", {
      required: "This field is required",
      onChange: (e : any) => {
        if (e.target.value === "othersPurpose") {
          setShowPurposeOther(true)
        }
        else {
          setShowPurposeOther(false)
        }
      }
    })}
  >
    <option value="">Purpose of importation</option>
    <option value="directSales">Direct Sales</option>
    <option value="personalUse">Personal use</option>
    <option value="trialUse">Trial Use</option>
    <option value="othersPurpose">others</option>
  </select>
  {errors.productInfo && <p className="text-red-800">{errors.productInfo.message as string}</p>}

  </div>
  {showPurposeOther ? <div>
<label>
  Specify purpose of importation
: </label>
<input
  type="text"
  {...register("otherImportationPurpose", {
    required: "This field is required",
  })}
/>
   {errors.otherImportationPurpose && <p className="text-red-800">{errors.otherImportationPurpose.message as string}</p>}
</div> : null}
  </div>
<div>
<h3 className='text-black font-bold'>Product Details</h3>
      <div>                <label>
      Product Category
              : </label>
              <div className="">
              <select
    {...register("productCategory", {
    })}
  >
    <option value="">Select the product Category</option>
    <option value="generalPurpose">General Purpose</option>
    <option value="constructionMaterial">Construction Material</option>
    <option value="chemicals">Chemicals</option>
  </select>
  </div></div>
  <div>
<label>
  Product Name
: </label>
<input
  type="text"
  placeholder='Enter Product Name'
  {...register("productName", {
    required: "This field is required"
  })}
/>
   {errors.productName && <p className="text-red-800">{errors.productName.message as string}</p>}
</div>
<div>
<label>
  Weight in (kg) : </label>
<input
  type="text"
  {...register("productWeight", {
    required: false,
  })}
/>
</div>
<div>
<label>
  Description of Product : </label>< br/>
<textarea
  {...register("productDescription", {
    required: "This field is required",
  })}
/>
   {errors.productDescription && <p className="text-red-800">{errors.productDescription.message as string}</p>}
</div>
<div>                <label>
      Unit of measurement
              : </label>
              <div className="">
              <select
    {...register("measurementUnit")}
  >
    <option value="">SEnter unit of measurement</option>
    <option value="kgs">Kgs</option>
    <option value="tonnes">Tonnes</option>
  </select>
  </div></div>
  <div>
<label>
  Quantity of product(s) : </label>
  <input
type="number"
placeholder='enter Quantity'
{...register("productQuantity", {
  required: "This field is required please provide a number greater than 0",
  min: {
    value: 1,
    message: "Quantity must be greater than 0",
  },
})}
/>
   {errors.productQuantity && <p className="text-red-800">{errors.productQuantity.message as string}</p>}
</div>

<button className='pt-2 pr-6 pl-6 pb-2 bg-lime-800 rounded' type='submit'>Submit</button><br/>
    </div>
    </div>
    </div>
  )
}

export default ProductDetails
