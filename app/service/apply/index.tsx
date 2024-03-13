"use client";

import React from 'react'
import { FormProvider } from "react-hook-form";
import Button from '@/app/components/Button';
import { useApplyForm } from './useApplyForm';

const ApplyService = () => {
  const { methods, handleSubmit, error , register, errors} = useApplyForm();

   const [showIdn, setShowIdn] = React.useState(false);
   const [isForeigner, setIsForeigner] = React.useState(false);
   const [showPurposeOther, setShowPurposeOther] = React.useState(false);

   const sendEmail = async () => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: 'Hello, this is a test email.',
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('An error occurred while sending the email:', error);
    }
  };

  return (
    <div>
              <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
      <div>
        <p>Bussiness Owner Details</p>
        <div>
          <div className="pb-4">
              <h2 className='text-black font-bold'>
                Bussiness Details
              </h2>
            <div className="">
              <div>
                <label>
                  Applicants Citizenship 
                </label>
                <div className="">
                <select
      {...register("citizenShip", {
        required: false,
        // required: "Please select a citizenship",
        onChange: (e) => {
          console.log(e.target.value);
          if (e.target.value === "rwanda") {
            setShowIdn(true);
            setIsForeigner(false);
          }
          else if (e.target.value === "foreigner") {
            setIsForeigner(true);
            setShowIdn(false);
          }
          else {
            setShowIdn(false);
            setIsForeigner(false);
          }
        }
      }
      )}
    >
      <option value="">Select citizenship</option>
      <option value="rwanda">Rwanda</option>
      <option value="foreigner">Foreigner</option>
    </select>
    {/* {errors.citizenShip && <p className="text-red-800">{errors.citizenShip.message as string}</p>} */}
                </div>
                {showIdn ? <div>
 <label>
    Identification document number
 </label>
 <input
    type="text"
    placeholder='Enter identification document number'
    // className="input mt-2 w-full"
    {...register("nidWidget", {
      required: "This field is required",
    })}
 />
     {errors.nidWidget && <p className="text-red-800">{errors.nidWidget.message as string}</p>}
</div> : null}
              </div>
              <div>
                {isForeigner ? <div>
                  <label>
                    passport Number
                  </label>
                  <input
                    type="text"
                    // className="input mt-2 w-full"
                    {...register("passportNumber", {
                      required: true,
                    })}
                  />
                </div> : null}
                <div>
                  <label>
                    Other Name
                  </label>
                  <input
                    type="text"
                    // className="input mt-2 w-full"
                    {...register("otherName", {
                      required: "This field is required",
                    })}
                  />
                          {errors.otherName && <p className="text-red-800">{errors.otherName.message as string}</p>}
                </div>
                <div>
                  <label>
                    Surname
                  </label>
                  <input
                    type="text"
                    // className="input mt-2 w-full"
                    {...register("surname", {
                      required: "This field is required",
                    })}
                  />
                   {errors.surname && <p className="text-red-800">{errors.surname.message as string}</p>}
                </div>
                <div >
 <label>
    Nationality
 </label>
 <input
    type="text"
    placeholder='Enter identification document number'
    // className="input mt-2 w-full"
    {...register("nationality", {
      required: "This field is required",
    })}
 />
                    {errors.nationality && <p className="text-red-800">{errors.nationality.message as string}</p>}
</div>
<div>
                  <label>
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder='Enter phone number'
                    {...register("phoneNumber")}
                  />
                </div>
                <div>
                  <label>
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder='Enter Email Address'
                    // className="input mt-2 w-full"
                    {...register("emailAddress")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-black font-bold'>Bussiness Owner Address</h2>
        <div>
          <div className="pb-4">
            <div>
            <div>
                  <label>
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder='Enter District'
                    // className="input mt-2 w-full"
                    {...register("bussiness_location", {
                      required: "This field is required",
                    })}
                 />
                                    {errors.bussiness_location && <p className="text-red-800">{errors.bussiness_location.message as string}</p>}
                
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div>
        <h2 className='text-black font-bold'>Bussiness Details</h2>
        <div>
          <div className="pb-4">
          <div>
                <label>
                  Bussiness Type
                </label>
                <div className="">
                <select
      // className="input mt-2 w-full"
      {...register("citizenShip", {
        required: "This field is required",
        // validate: (value: string) => {
        //   if (!value || !value.length) return true;
        //   return /^\d{1,3}$/.test(value ?? "");
        // },
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
 </label>
 <input
    type="text"
    placeholder='Enter Company Name'
    // className="input mt-2 w-full"
    {...register("companyName", {
      required: "This field is required",
      // Add any additional validation rules as needed
    })}
 />
     {errors.companyName && <p className="text-red-800">{errors.companyName.message as string}</p>}
</div>
<div>
 <label>
    TIN number
 </label>
 <input
    type="number"
    placeholder='Enter TIN number'
    // className="input mt-2 w-full"
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
 </label>
 <input
    type="date"
    placeholder='select date'
    // className="input mt-2 w-full"
    {...register("registrationDate", {
      required: "This field is required",
      // Add any additional validation rules as needed
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
 </label>
 <input
    type="text"
    placeholder='Enter District'
    // className="input mt-2 w-full"
    {...register("bussinessAddressLocation", {
      required: "This field is required",
      // Add any additional validation rules as needed
    })}
 />
     {errors.bussinessAddressLocation && <p className="text-red-800">{errors.bussinessAddressLocation.message as string}</p>}
</div>
              </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-black font-bold'>Product Information</h1>
<div>                <label>
                 Purpose of importation
                </label>
                <div className="">
                <select
      // className="input mt-2 w-full"
      {...register("productInfo", {
        required: "This field is required",
        onChange: (e) => {
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
 </label>
 <input
    type="text"
    // className="input mt-2 w-full"
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
                </label>
                <div className="">
                <select
      // className="input mt-2 w-full"
      {...register("productCategory", {
        // required: "This field is required",
      })}
    >
      <option value="">Select the product Category</option>
      <option value="generalPurpose">General Purpose</option>
      <option value="constructionMaterial">Construction Material</option>
      <option value="chemicals">Chemicals</option>
    </select>
    {/* {errors.productCategory && <p className="text-red-800">{errors.productCategory.message as string}</p>} */}
    </div></div>
    <div>
 <label>
    Product Name
 </label>
 <input
    type="text"
    placeholder='Enter Product Name'
    // className="input mt-2 w-full"
    {...register("productName", {
      required: "This field is required",
      // Add any additional validation rules as needed
    })}
 />
     {errors.productName && <p className="text-red-800">{errors.productName.message as string}</p>}
</div>
<div>
 <label>
    Weight in (kg) </label>
 <input
    type="text"
    // className="input mt-2 w-full"
    {...register("productWeight", {
      required: false,
      // Add any additional validation rules as needed
    })}
 />
</div>
<div>
 <label>
    Description of Product </label>< br/>
 <textarea
    // className="input mt-2 w-full"
    {...register("productDescription", {
      required: "This field is required",
    })}
 />
     {errors.productDescription && <p className="text-red-800">{errors.productDescription.message as string}</p>}
</div>
<div>                <label>
        Unit of measurement
                </label>
                <div className="">
                <select
      // className="input mt-2 w-full"
      {...register("measurementUnit", {
        // required: "This field is required",
      })}
    >
      <option value="">SEnter unit of measurement</option>
      <option value="kgs">Kgs</option>
      <option value="tonnes">Tonnes</option>
    </select>
    {/* {errors.measurementUnit && <p className="text-red-800">{errors.measurementUnit.message as string}</p>} */}
    </div></div>
    <div>
 <label>
    Quantity of product(s) </label>
    <input
 type="number"
 placeholder='enter Quantity'
 // className="input mt-2 w-full"
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

<button className='pt-2 pr-4 pl-4 pb-2 bg-lime-950' type='submit'>Submit</button><br/>
      </div>
      </div>
      </div>
              </form>
      </FormProvider>
      {/* <button className='pt-2 pr-4 pl-4 pb-2 bg-lime-950' onClick={() => sendEmail()}>send Email</button> */}
    </div>
  )
}

export default ApplyService
