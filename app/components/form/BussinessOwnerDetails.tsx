import React from 'react'

interface BusinessOwnerDetailsProps {
    errors: any;
    register: any;
    isForeigner: boolean;
    showIdn: boolean;
    setShowIdn: (showId: boolean) => void;
    setIsForeigner: (foreigner: boolean) => void;
   }

   const BussinessOwnerDetails: React.FC<BusinessOwnerDetailsProps> = ({
    errors,
    register,
    isForeigner,
    showIdn,
    setShowIdn,
    setIsForeigner,
   }) => {
  return (
    <div>
            <div>
        <p className='w-full bg-green-500 p-4 font-extrabold rounded'>Bussiness Owner Details</p>
        <div>
          <div className="pb-4">
              <h2 className='text-black font-bold'>
                Bussiness Details
              </h2>
            <div className="">
              <div>
                <label>
                  Applicants Citizenship 
                : </label>
                <div className="">
                <select
      {...register("citizenShip", {
        required: false,
        onChange: (e : any) => {
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
                </div>
                {showIdn ? <div>
 <label>
    Identification document number
 : </label>
 <input
    type="text"
    placeholder='Enter identification document number'
    {...register("identificationNumber", {
      required: "This field is required",
    })}
 />
     {errors.identificationNumber && <p className="text-red-800">{errors.identificationNumber.message as string}</p>}
</div> : null}
              </div>
              <div>
                {isForeigner ? <div>
                  <label>
                    passport Number
                  : </label>
                  <input
                    type="text"
                    {...register("passportNumber", {
                      required: true,
                    })}
                  />
                </div> : null}
                <div>
                  <label>
                    Other Name
                  : </label>
                  <input
                    type="text"
                    {...register("otherName", {
                      required: "This field is required",
                    })}
                  />
                          {errors.otherName && <p className="text-red-800">{errors.otherName.message as string}</p>}
                </div>
                <div>
                  <label>
                    Surname
                  : </label>
                  <input
                    type="text"
                    {...register("surname", {
                      required: "This field is required",
                    })}
                  />
                   {errors.surname && <p className="text-red-800">{errors.surname.message as string}</p>}
                </div>
                <div >
 <label>
    Nationality
 : </label>
 <input
    type="text"
    placeholder='Enter identification document number'
    {...register("nationality", {
      required: "This field is required",
    })}
 />
                    {errors.nationality && <p className="text-red-800">{errors.nationality.message as string}</p>}
</div>
<div>
                  <label>
                    Phone Number :    
                  </label>
                  <div className='flex border border-black w-[280px]'>
                    <div>+250</div>
                  <input
                    type="text"
                    className='border-none'
                    placeholder='Enter phone number'
                    {...register("phoneNumber")}
                  />
                  </div>
                </div>
                <div>
                  <label>
                    Email Address
                  : </label>
                  <input
                    type="text"
                    placeholder='Enter Email Address'
                    {...register("emailAddress")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BussinessOwnerDetails
